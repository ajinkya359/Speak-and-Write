const btn=document.querySelector('.talk');
const content=document.querySelector('.content');
const end=document.querySelector('.end')
const clear=document.querySelector('.clear')
const SpeechRecognition=window.SpeechRecognition|| window.webkitSpeechRecognition;
const recognition=new SpeechRecognition();
let status=0;


btn.addEventListener('click',()=>{
    status=1;
    recognition.start();
})
clear.addEventListener('click',()=>{
    content.innerHTML=""
    
})
end.addEventListener('click',()=>{
    status=0;
    recognition.stop();
   
})

recognition.onstart=()=>{
    console.log("Voice is activated")
}
recognition.onend=()=>{
    console.log("Voice ended")
    if(status) {
        console.log("voice started");
        recognition.start()}
}
recognition.onresult=(event)=>{
    const message=event.results[0][0].transcript
    content.innerHTML+=`<p>${message}</p>`
    
    // readoutloud(message)
}


// function readoutloud(message){
//     const speech=new SpeechSynthesisUtterance();
//     speech.text=message
//     speech.volume=0.2;
//     speech.rate=1;
//     speech.pitch=1;
//     window.speechSynthesis.speak(speech);
// }