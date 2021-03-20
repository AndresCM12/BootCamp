const TextoEjemplo = (props) =>{
    
    return(
        
    <div>
        
        <h3 style={{color: props.color}}>{props.titulo}</h3>
        <h4>{props.messages}</h4>
        
        <br />

    </div>)
}

export default TextoEjemplo