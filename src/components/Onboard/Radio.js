import logo from '../../logo.svg';

export const Radio = ({inp, handleChange, value})=> <div className='flexRow justifySpaceBetween flexWrap'>{inp.options.map((radio, i)=> {
    return <div className='flexCol radioItem'
    key={radio.title}
    style= {{
        boxShadow: `${(i === value) ? '0px 0px 0px 2px #664de5' : '0px 0px 0px 2px #eee'}`
    }}
    onClick={()=>{
     handleChange(i, inp.name)  
     }}
     >
         <div style={{
             marginLeft: '-1rem'
         }}><img src={logo} className="App-logo" alt="logo" />{!!i && <img src={logo} className="App-logo" alt="logo" />}</div>
          <div className='radioTitle'>{radio.title}</div>
          <div className='radioSubTitle'>{radio.subtitle}</div>   
     </div>
  })}
  </div>