const compareToTen=(num)=>{
    return new Promise((resolve,reject)=>{
        if(num>=10){
            resolve("bigger than 10")
        }
        else{
            reject("not bigger than 10")
        }
    })
}
compareToTen(15).
    then(result=>console.log("result: ",result)).
    catch(error=>console.log("error: ",error))

compareToTen(8).
    then(result=>console.log("result: ",result)).
    catch(error=>console.log('error: ',error))

console.log("finish")