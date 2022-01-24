const Heading = ({heading: {title, subtitle, replace}, state})=> {

 const handleReplace = (replace, title) => {
    
       return replace.reduce((acc, curr)=> {
        return acc.replace(`{{${curr.key}}}`, state[curr.index][curr.key].value);
       }, title);

    }
    return <div className="flexCol heading">
        <div className="title">{Array.isArray(replace) && replace.length ? handleReplace(replace, title): title}</div>
        <div className="subtitle">{subtitle}</div>
    </div>

}

export default Heading;
