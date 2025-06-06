const func=(val)=>{
    return new Promise((resolve,reject)=>{
        if (val){
            resolve(3)
        }
        else{
            reject('boo!')
        }
    })
}
var val1="test"
var val2
func(val1).
    then(result=>console.log(result)).
    catch(error=>console.log(error))

func(val2).
    then(result=>console.log(result)).
    catch(error=>console.log(error))
