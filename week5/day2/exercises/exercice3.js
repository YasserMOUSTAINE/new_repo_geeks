const getAsyncGif=async()=>{
    try{
        const res=await fetch("https://www.swapi.tech/api/starships/9/")
        if(!res.ok){
            throw new Error('erreur http: '+res.status)
        }
        const data=await res.json()
        console.log(data.result)
    }
    catch(err){
        console.log(err)
    }
}