let form=document.forms[0]
const storySpan = document.getElementById("story");
let noun,adjective,person,verb,place

const story = [
  () => `${person} went to ${place} to ${verb} a ${adjective} ${noun}.`,
  () => `In ${place}, ${person} saw a ${noun} that was very ${adjective} and decided to ${verb}.`,
  () => `Once upon a time, a ${adjective} ${noun} helped ${person} to ${verb} in ${place}.`,
  () => `${person} couldn't believe their eyes when a ${adjective} ${noun} started to ${verb} in ${place}.`,
  () => `Everyone in ${place} was shocked as ${person} danced with a ${adjective} ${noun} and tried to ${verb}.`
];
function generateStory() {
  const randomIndex = Math.floor(Math.random() * story.length);
  storySpan.textContent = story[randomIndex]();
}


form.addEventListener("submit",function(event){
    //1
    event.preventDefault()
     noun=document.getElementById('noun').value.trim()
     adjective=document.getElementById('adjective').value.trim()
     person=document.getElementById('person').value.trim()
     verb=document.getElementById('verb').value.trim()
     place=document.getElementById('place').value.trim()
    
    //2
    if (!noun || !adjective || !person || !verb || !place) {
            alert("Please fill in all fields.");
            return;
        }
    generateStory();
})