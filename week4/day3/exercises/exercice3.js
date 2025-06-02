const users = { user1: 18273, user2: 92833, user3: 90315 }
const newUsers=Object.entries(users)
console.log(newUsers)
const mutlip=newUsers.map((key,id)=>{
    return [key,id*2]
})
console.log(mutlip)