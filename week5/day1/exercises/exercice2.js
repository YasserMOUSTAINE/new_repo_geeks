const test2=new Promise((resolve,reject)=>{
    setTimeout(()=>{
        resolve('success')
    },4000)
    
})
test2.then(result=>console.log(result))