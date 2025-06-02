
(function(name){
    let div = document.getElementById('profile')

    let para=document.createElement('p')
    para.textContent=name
    div.appendChild(para)
    let img=document.createElement('img')
    img.src='./profile.png'
    img.width=40
    div.appendChild(img)
})("yasser")
