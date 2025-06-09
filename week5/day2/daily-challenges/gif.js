const getGif=async(val)=>{
    try{
        const res= await fetch(`https://api.giphy.com/v1/gifs/search?q=${val}&rating=g&api_key=hpvZycW22qCjn5cRM1xtWB8NKq4dQ2My&limit=1`)
        if(!res.ok){
            throw new Error('error: '+res)
        }
        const data=await res.json()

        // data.data.forEach(gif => {
        //     console.log(gif.images.original.url);
        // });
        // console.log(data)
        const gifUrl=data.data[0].images.original.url
        const gifDiv=document.createElement('div')
        const img=document.createElement('img')
        img.src=gifUrl
        img.alt="gif"

        const delbtn=document.createElement('button')
        delbtn.textContent="delete"
        delbtn.addEventListener('click',()=>{
            gifDiv.remove()
        })
        gifDiv.appendChild(img)
        gifDiv.appendChild(delbtn)
        gifContainer.appendChild(gifDiv);
    }
    catch(err){
        console.log(err)
    }
}
const form=document.getElementById('formGif')
form.addEventListener('submit',function(e){
        e.preventDefault()
        const inp=document.getElementById('title')
        const val=inp.value
        getGif(val)
    }
)

const btnDeleteAll=document.getElementById('deleteAll')
const gifContainer=document.getElementById('gifContainer')

btnDeleteAll.addEventListener('click',function(){
    gifContainer.innerHTML=''
})