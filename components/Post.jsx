import * as moment from 'moment'
import 'moment/locale/es'

const Post = (props)=>{
    

    let image=''
    let date = moment(props.art.display_date).format('D MMMM YYYY');

    if (props.art.promo_items){
        if(props.art.promo_items.basic.resized_urls){
            image=<img src={props.art.promo_items.basic.resized_urls[2].resizedUrl} alt={props.art.promo_items.basic.subtitle} />
            
        }else
            image= <img className="image" src={props.art.promo_items.basic.url} alt={props.art.promo_items.basic.subtitle}/>
    }
    
 

    return(
        <div className="post">
            <article>
                {/* Image */}
                <div>
                    {
                        image
                    }
                </div>
                {/* Content text */}
                <div>
                    <h1>
                        {props.art.headlines.basic}
                    </h1>
                    <p>{date}</p>
                </div>
            </article>
            <style jsx>
                {`
                    h1{
                        color:#0f0f0f
                    }
                    .post{
                        grid-column:span 4;
                    }
                    
                `}
            </style>
            <style global jsx>{`
                
                img {
                  max-width:171px;
                }
            `}</style>
        </div>
    
    )
}


export default Post