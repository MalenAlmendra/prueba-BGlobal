import Post from './Post'

const Posts=(props)=>(
    <div className="posts">
        {
            props.articles.map(article=>(

                article.subtype=="7"
                ?
                    <Post 
                        key={article._id}
                        art={article}
                    />
                : null
            ))
        }
    </div>
)

export default Posts