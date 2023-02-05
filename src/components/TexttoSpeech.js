export const TexttoSpeech = (text)=>{
    if('speechSynthesis' in window){
        const synth = window.speechSynthesis
        let ourText = text
        const utterThis = new SpeechSynthesisUtterance(ourText)
        utterThis.rate = 1
        utterThis.pitch = 1
        utterThis.lang="Vn"
        synth.speak(utterThis)
      } else {
        console.log("Web Speech API not supported :-(")   
      } 
}