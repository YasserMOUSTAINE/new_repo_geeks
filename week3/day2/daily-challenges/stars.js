let val=""
for(let i=1;i<7;i++){
    val = "* " +val
    console.log(val)
}
let twice=""
for(let i=1;i<8;i++){
    
    for(let j=1;j<i;j++){
        twice += "* " 
        
    }
    twice+="\n"
}
console.log(twice)