const morse = `{
  "0": "-----",
  "1": ".----",
  "2": "..---",
  "3": "...--",
  "4": "....-",
  "5": ".....",
  "6": "-....",
  "7": "--...",
  "8": "---..",
  "9": "----.",
  "a": ".-",
  "b": "-...",
  "c": "-.-.",
  "d": "-..",
  "e": ".",
  "f": "..-.",
  "g": "--.",
  "h": "....",
  "i": "..",
  "j": ".---",
  "k": "-.-",
  "l": ".-..",
  "m": "--",
  "n": "-.",
  "o": "---",
  "p": ".--.",
  "q": "--.-",
  "r": ".-.",
  "s": "...",
  "t": "-",
  "u": "..-",
  "v": "...-",
  "w": ".--",
  "x": "-..-",
  "y": "-.--",
  "z": "--..",
  ".": ".-.-.-",
  ",": "--..--",
  "?": "..--..",
  "!": "-.-.--",
  "-": "-....-",
  "/": "-..-.",
  "@": ".--.-.",
  "(": "-.--.",
  ")": "-.--.-"
}`

function toJs(){
    let morseObject = JSON.parse(morse)
    return new Promise((resolve, reject) => {
        if(Object.keys(morseObject).length !== 0){
            resolve(morseObject)
        } else {
            reject('Morse object is empty')
        }
    })
}

function toMorse(morseJS){
    let userVal = document.getElementById("textInput").value
    let arrMorse = []
    return new Promise((resolve, reject) => {
        for(let i of userVal){
            if(i.toLowerCase() in morseJS){
                arrMorse.push(morseJS[i.toLowerCase()])
            } else {
                reject("Character not in Morse table: " + i)
                return
            }
        }
        resolve(arrMorse)
    })
}

function joinWords(morseTranslation){
    const joined = morseTranslation.join('\n')
    document.getElementById("output").innerText = joined
}

// Cette fonction est liée au bouton HTML
function startTranslation(){
    toJs()
        .then(result => toMorse(result))
        .then(morseArr => {
            joinWords(morseArr)
        })
        .catch(err => console.log('Error:', err))
}
