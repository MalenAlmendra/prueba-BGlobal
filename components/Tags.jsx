
const Tags =(props)=>{
    
    return(
        <div className="tags">
        {
            props.tags.slice(0,10).map(t=>(
                <>
                    <a className="tag" href={`/temas/`+t.slug}>{t.text}</a> 
                    •
                </>
            ))
        }
        </div>
    )
}

export default Tags;