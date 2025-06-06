const makeAllCaps=(arr)=>{
    let sum=0
    let len=arr.length
    var newArr=[]
    for(i of arr){
        if (typeof(i)=="string"){
            sum+=1
            let item=i.toUpperCase()
            newArr.push(item)
        }  
    }
    return new Promise((resolve, reject) => {
        if(sum==len){
            resolve(newArr)
        }
        else{
            reject('its not all string')
        }
    })
}


const sortWords=(arr)=>{
    return new Promise((resolve,reject)=>{
        if(arr.length>4){
            let sortedArr=arr.sort()
            console.log(sortedArr)
            resolve(sortedArr)
            
        }
        else{
            reject("less than 4")
        }
    })
}

// makeAllCaps([1, "pear", "banana"])
//     .then((arr)=>sortWords(arr))
//     .then((result)=>console.log(result))
//     .catch(err=>console.log(err))

// makeAllCaps(["apple", "pear", "banana"])
//       .then((arr) => sortWords(arr))
//       .then((result) => console.log(result))
//       .catch(error => console.log(error))

makeAllCaps(["apple", "pear", "banana", "melon", "kiwi"])
      .then((arr) => sortWords(arr))
      .then((result) => console.log(result)) //["APPLE","BANANA", "KIWI", "MELON", "PEAR"]
      .catch(error => console.log(error))