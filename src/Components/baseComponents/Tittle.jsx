


const Tittle =(props)=>{
    const{title,tag} = props;
    switch(tag){
        case 'h1':
            return(
                <h1>{title}</h1>
            )
        break;
        case 'h2':
            return(
                <h2>{title}</h2>
            )
        break;
        case 'h3':
            return(
                <h3>{title}</h3>
            )
        break;
        case 'h4':
            return(
                <h4>{title}</h4>
            )
        break;
        case 'h5':
            return(
                <h5 className="chart-title">{title}</h5>
            )
        break;
        case 'h6':
            return(
                <h6>{title}</h6>
            )
        break;
        default:
            return null;
    }
}

export default Tittle;