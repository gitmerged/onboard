import React from "react";


const StepProgress = ({totalSteps, currentStep, handleStepChange})=> {

    return <div className="stepProgress">
            {Array.from({length: totalSteps}, (v, i) => i+1).map((item)=> {
                return <React.Fragment  key={item}>
                {(item - 1 !==0 ) && <div className={`line${(item -1 <= currentStep) ? ' doneLine': ''}`}></div>}
                <div className={`step${(item -1 <= currentStep) ? ' doneStep':''}`}
                onClick={()=>{handleStepChange(item -1)}}
                  
                >
                
                <div className="stepNumber">{item}</div>
                
                </div>
                {(item  !== totalSteps) && <div className={`line${(item -1 <= currentStep) ? ' doneLine':''}`}></div>}
                </React.Fragment>
            })}
    </div>

}

export default StepProgress;