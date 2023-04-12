
import Bl from "./Bl";
import useFetch from "./useFetch";

const Home = () => {

   const {data:blogs,err,pending} = useFetch('http://localhost:8000/blogs')
    
    

    return ( 
        <div className="Home">
            
                {err && <div>May Error</div>}
                { pending &&  <div>Loading...</div>}
                { blogs && <Bl b={blogs}   />}

              
           
            
         
            
        </div>
     );
}
 
export default Home;