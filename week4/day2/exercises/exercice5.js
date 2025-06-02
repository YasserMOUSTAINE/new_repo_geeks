const epic = ['a', 'long', 'time', 'ago', 'in a', 'galaxy', 'far far', 'away'];
const total=epic.reduce((acc,val,i)=>{
    return acc+" "+val
})
console.log(total)