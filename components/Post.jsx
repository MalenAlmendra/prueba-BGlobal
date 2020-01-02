import * as moment from 'moment'
import 'moment/locale/es'

const Post = (props)=>{
    

    let image=''
    let date = moment(props.art.display_date).format('D MMMM YYYY');

    if (props.art.promo_items){
        // if(props.art.promo_items.basic.resized_urls){
        //     image=<img src={props.art.promo_items.basic.resized_urls[2].resizedUrl} alt={props.art.promo_items.basic.subtitle} />
            
        // }else
            image= <img className="image" src={props.art.promo_items.basic.url} alt={props.art.promo_items.basic.subtitle}/>
    }
    
 

    return(
        <div className="post">
            <article>
                {/* Image */}
                <div>
                    {image}
                </div>

                {/* Content text */}
                <div>
                    <h1>
                        {props.art.headlines.basic}
                    </h1>
                    <p>{date}</p>
                </div>
            </article>
        </div>
    
    )
}


export default Post