
const Tags =(props)=>{
    
    return(
        <div className="tags">
        {
            props.tags.slice(0,10).map(t=>(
            <a href={`/temas/`+t.slug}>• {t.text}</a>
            ))
        }
        <style jsx>
            {`
                .tags{
                    display:flex;
                }
            `}
        </style>
        </div>
    )
}

export default Tags;