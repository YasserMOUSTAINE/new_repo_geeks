const getTenGif=async ()=>{
    try{
        let res=await fetch('https://api.giphy.com/v1/gifs/search?q=sun&limit=10&offset=2&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My')
        let data=await res.json()
        console.log(data)
    }
    catch(err){
        console.log('error getTen:',err)
    }
}

getTenGif()