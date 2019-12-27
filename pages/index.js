import Posts from '../components/Posts'
import Tags from '../components/Tags'
import fetch from 'isomorphic-unfetch'

const Index=(props)=>(
    <>
        <h1>Acumulado Grilla</h1>
        <Tags tags={props.tags}/>
        <div>
            <Posts articles={props.articles} />
            
        </div>
    </>
)

//Elimina los objetos duplicados. Se utiliza para eliminar las tags repetidas

const deleteDuplicates=(arr,prop)=>{
    let newArray = [];
    let lookup  = {};
 
     for (let i in arr) {
         lookup[arr[i][prop]] = arr[i];
     }
 
     for (let i in lookup) {
         newArray.push(lookup[i]);
     }
 
     return newArray;
}

Index.getInitialProps=async(req)=>{
    const data= await fetch('https://api-test-ln.herokuapp.com/articles')
    const res = await data.json()
    let tags=[]

    for (const art of res.articles) {
        for (const tag of art.taxonomy.tags) {
            tags.push(tag)
        }
    }

    tags=deleteDuplicates(tags,'text')

    return{
        articles:res.articles,
        tags:tags.sort(function (a, b) {
            if (a.text > b.text) {
              return 1;
            }
            if (a.text < b.text) {
              return -1;
            }
            return 0;
          })
    }

}


export default Index