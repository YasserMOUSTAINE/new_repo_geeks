const getGif=async()=>{
    try{
        const response= await fetch("https://api.giphy.com/v1/gifs/search?q=hilarious&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My")
        const data=await response.json()
        console.log(data)
    }
    catch(err){
        console.log('Erreur : ',err)
    }
}


