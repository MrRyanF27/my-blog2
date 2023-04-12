import { useState } from "react";
import { useHistory } from "react-router-dom";
 


const Create = () => {

    const [title,setTitle] = useState("")
    const [body,setBody] = useState("")
    const [author,setAuthor] = useState("")

    const [pending,isPending]=useState(false)
    const [success,isSuccess] = useState(false)
    const [error,isError] = useState(false)

    const history = new useHistory()


    const handleSubmit = (e)=>{
        isPending(true)

        e.preventDefault()
        const data = {title,body,author}

        fetch('http://localhost:8000/blogs',{
            method:'POST',
            headers:{'Content-type':'application/json'},
            body: JSON.stringify(data)
        }).then((res)=>{
            history.push('/')
            if(!res.ok){
                throw Error('errorr')
            }

            isPending(false)
            isSuccess(true)  
            
        }).catch((e)=>{

            isError(true)
            isSuccess(false)
        })
    }



    return ( 
        <div className="content">
            
         {success && <p>Blog Added succesfully</p>}
         {error && <p>Adding Blog Failed try again</p>}

            <form onSubmit={handleSubmit} className="create">
                            <h1>Create new Blog</h1>

                <label>Title</label>
                <input 
                    type="text" 
                    required
                    value={title}
                    onChange={(t)=>setTitle(t.target.value)}
                />

                <label>Body</label>
                <textarea
                    required
                    value={body}
                    onChange={(b)=>{setBody(b.target.value)}}
                ></textarea>

                <label>Author</label>
                <select value={author} onChange={(a)=>{setAuthor(a.target.value)}} >
                    <option value="Coco Martin">Coco Martin</option>
                    <option value="Lito Lapid">Lito Lapid</option>
                    <option value="Jeric Raval">Jeric Raval</option>
                </select>

               {!pending && <button>Add Blog</button>}
               {pending && <button >Adding ....</button>}

                <div className="content">
                         <h2>{title}</h2>
                         <p>{body}</p>
                     {  author &&  <small>written by {author}</small> }
                </div>

            </form>

            


        </div>
     );


}
 
export default Create;