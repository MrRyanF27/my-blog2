import { useState,useEffect } from "react";

const useFetch = (url) => {


    const [data,setData] = useState(null);
    const [pending,isPending] = useState(true)
    const [err,isError] = useState(null)

   

     
        useEffect(()=>{
        
        
            setTimeout(() => {
                fetch(url).then((res)=>{
                
                if(!res.ok){
                    throw Error('error')
                }
    
               return res.json()
    
    
            }).then((data)=>{
                
                setData(data)
                isPending(false)
            }).catch((err)=>{
                isError(err.message)
                isPending(false)
            })
    
    
            }, 1000);
            
            
    
         },[url])
        
    

        return {data,pending,err}
}
 
export default useFetch;