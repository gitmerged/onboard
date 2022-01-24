export const Input = ({inp, handleChange, value, state, currentStep})=> <div className='flexCol'>
<div className='label'>{inp.label}&nbsp;&nbsp;<span>{!!inp.optional && '(Optional)' }</span></div>
<div className='flexRow alignCenter'>
    {inp.prepend && <div className='prepend'>
        {inp.prepend}
        </div>}
    <input onChange={(e)=> {
    handleChange(e.target.value, inp.name)
}}
value={value}
placeholder={state[currentStep][inp.name].placeholder}
required={!!!state[currentStep][inp.name].optional}
/></div>
<div>{inp.error}</div>
</div>