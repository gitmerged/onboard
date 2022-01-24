import React, { useState} from 'react';
import Heading from '../Heading';
import StepProgress from '../StepProgress';
import { steps } from './data';
import { Radio } from './Radio';
import { Input } from './Input';
import logo from '../../logo.svg';


const initialState = steps.map((item)=>{
    return (item.form.inputs && item.form.inputs.reduce((acc, inp)=> {
       return {
           ...acc,
            [inp.name]: {
            value: inp.value,
            optional: inp.optional,
            placeholder: inp.placeholder
            ,}
        }
    }, {})) || []
});


const Step = ()=> {

    const [state, setState] = useState(initialState);
    const [currentStep, setCurrentStep] = useState(0);

    const handleChange = (value, name)=> {
        const newState = state.map((item, index)=> {
            if(index !==currentStep)
            return item 
            else {
                return {
                    ...item,
                    [name]: {
                        ...item[name],
                        value,
                    },
                }
            }
        })
        
        setState(newState);
    }

    const hasMissingInputs = (step)=> {
       return state[step] && Object.keys(state[step]).find(item=> {
            if(typeof state[step][item].value === 'number')
            return false;
            return !state[step][item].value && !state[step][item].optional
        });
    }

    const handleStepChange = (newStep) => {
        if(newStep > currentStep) {
        for(let i =0; i < newStep ;i++ ) {
            if(hasMissingInputs(i))
            return;
         }
        }  
        setCurrentStep(newStep);
    }

  

    return <div className='onboardWrap'>
    
        <div className='flexCol'>

        <StepProgress totalSteps={steps.length} currentStep={currentStep} handleStepChange={handleStepChange} />
        {currentStep === steps.length -1   && <div className='completedOnboard'><img src={logo} className="App-logo" alt="logo" /></div>}
        <Heading state={state} heading={steps[currentStep].heading}/>

        {steps.map((step, stepIndex)=> {

                if(stepIndex !== currentStep)
                return null;

                const {inputs, button} = step.form;

                return <React.Fragment  key={step.heading.title}>
                
                <div className='flexCol form'
                style={ currentStep === steps.length -1 ? {
                    minHeight:  'calc(300px - 10vw)',

                }: {}}
                >
                 <div className='flexCol inputWrap'>
                     {inputs && inputs.map((inp)=> {

                         const value = state[currentStep][inp.name].value || inp.value;

                         if(inp.type === 'customRadio')
                         
                         return <React.Fragment key={inp.name}><Radio inp={inp} handleChange={handleChange} value={value}/></React.Fragment>
                         else
                         
                         return <React.Fragment key={inp.name}><Input inp={inp} handleChange={handleChange} value={value} state={state} currentStep={currentStep}/></React.Fragment>

                     })}
                     </div> 

                <button 
                disabled={hasMissingInputs(currentStep)}
                onClick={()=>{
                    handleStepChange(currentStep === steps.length - 1 ? currentStep : currentStep+1);
                }}
                >{button.name}</button>
                
                </div>
                </React.Fragment>
            })}


        </div>
    </div>


}


export default Step;