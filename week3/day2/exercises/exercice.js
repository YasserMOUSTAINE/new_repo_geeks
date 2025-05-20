const prompt = require("prompt-sync")()

const people = ["Greg", "Mary", "Devon", "James"];

people.shift(); 
people[people.indexOf("James")] = "Jason";
people.push("yasser")
console.log(people.indexOf('Marry'))
let notMarry=people.slice(1,-1)
console.log(notMarry)
console.log(people)
let last=people.pop()
console.log(last)

for (pers in people){
    console.log(people[pers])
    if(people[pers]=="Devon"){
        break
    }
}



let colors=["red","green","black","yellow"]

for(col in colors){
    console.log("My #",col," choice is",colors[col])
}
const suffixes = ["st", "nd", "rd", "th", "th"];

for (let i = 0; i < colors.length; i++) {
  let suffix;
  switch (i + 1) {
    case 1:
        suffix = "st";
        break;
    case 2:
        suffix = "nd";
        break;
    case 3:
        suffix = "rd";
        break;
    case 4:
        suffix = "th";
        break;
    case 5:
        suffix = "th";
        break;
    default:
        break;
  }

  console.log(`My ${i + 1}${suffix} choice is ${colors[i]}`);
}


// let user_prompt=prompt("donner: ")
// console.log(typeof(user_prompt))

// while(user_prompt<"10"){
//     let user_prompt=prompt("donner: ")
// }

const building = {
    numberOfFloors: 4,
    numberOfAptByFloor: {
        firstFloor: 3,
        secondFloor: 4,
        thirdFloor: 9,
        fourthFloor: 2,
    },
    nameOfTenants: ["Sarah", "Dan", "David"],
    numberOfRoomsAndRent:  {
        sarah: [3, 990],
        dan:  [4, 1000],
        david: [1, 500],
    },
}
console.log(building.numberOfFloors)
console.log(building.numberOfAptByFloor.firstFloor)
console.log(building.numberOfAptByFloor.secondFloor)
console.log(building.nameOfTenants[0])
console.log(building.numberOfRoomsAndRent.sarah[0])
let som=building.numberOfRoomsAndRent.sarah[1]+building.numberOfRoomsAndRent.david[1]
let dan=building.numberOfRoomsAndRent.dan[1]
if(som >dan){
    console.log('not bigger')
}
else{
     building.numberOfRoomsAndRent.dan[1] = 1200;
}
console.log(building)

for (i in building){
    console.log(i)
}
for (i in building){
    console.log(building[i])
}


const details = {
  my: 'name',
  is: 'Rudolf',
  the: 'reindeer'
}

for(i in details){
    console.log(i,details[i])
}

const names = ["Jack", "Philip", "Sarah", "Amanda", "Bernard", "Kyle"];
let sorted=names.sort()
let val=""
for(i in sorted){
    val+=sorted[i][0]

}
console.log(val)