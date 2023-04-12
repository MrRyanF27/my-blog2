import { useHistory, useParams } from "react-router-dom";
import useFetch from "./useFetch";



const BlogDetails = () => {

const {id} = useParams()
const history = useHistory()

const {data:blogs,pending,err} = useFetch('http://localhost:8000/blogs/'+id)

function handleDelete(){
    fetch('http://localhost:8000/blogs/'+id,{
        method:'DELETE',
        
    }).then(()=>{
        history.push('/')
    })
}

    return (
        <div className="content">
         {  pending && <div>Loading...</div>}
         {  err && <div>Error</div>}
         {blogs && 
            <article className="bd">
                <h2>{blogs.title}</h2>
                <small>written by {blogs.author}</small>
                <div>
                    {blogs.body}
                </div>
                <button onClick={handleDelete}>Delete</button>
            </article>
            }
        </div>
      );
}
 
export default BlogDetails;