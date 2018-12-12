window.SpeechRecognition = window.SpeechRecognition || window.webkitSpeechRecognition;

const alexa = new SpeechRecognition();
const przycisk = ducument.querySelector('input');

przycisk.addEventListener('click', ()=>alexa.start())
alexa.addEventListener('result', function(e){
    console.log('wiem co powiedziales :)')
    console.dir(e)
});