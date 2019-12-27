import Post from './Post'

const Posts=(props)=>(
    <div className="posts">
        {
            props.articles.map(article=>(

                article.subtype==='7'
                ?
                    <Post 
                        key={article._id}
                        art={article}
                    />
                : null
            )
               


                
            )
        }

        <style global jsx>
            {`
                .posts{
                    display:grid;
                    grid-template-columns:repeat(12,1fr)
                }

            `}
        </style>
    </div>
)

export default Posts