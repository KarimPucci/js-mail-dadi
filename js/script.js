console.log("ciao");

//costante
const mail = [
  `kizpucci10@gmail.com`,
  `kizpucci20@gmail.com`,
  `kizpucci30@gmail.com`,
  `kizpucc40i@gmail.com`,
  `kizpucci50@gmail.com`,
]

let correttaMail =false;
let index;
const output = document.querySelector(`output`)
const inserisciMail = prompt(`inserisci la tua mail`);

for(let i = 0; i < mail.length; i++){
  if(mail[i] == inserisciMail){
    correttaMail = true;
  }else{
  }
}

if(correttaMail){
  output.innerHTML = `Mail corretta`
}else{
  output.innerHTML = `Mail non corretta`
}

//DADI
const minDado = 1;
const maxDado = 6
const nBt = document.getElementById("lanciodado");
const container = document.querySelector(".uscita");

let outputPersona;
let outputComputer;
let outputUscita;
let nPerson = 0;
let nComputer = 0;

nBt.addEventListener('click', function(){

container.innerHTML = '';
nPersona = Math.floor(Math.random() * (maxDado - minDado + 1) + minDado);
nComputer = Math.floor(Math.random() * (maxDado - minDado + 1) + minDado);


outputPersona = document.createElement('div');
outputComputer = document.createElement('div');
outputPersona.innerHTML = `Il tuo numero é:  ${nPersona}`;
outputComputer.innerHTML = `Il numero del computer è:  ${nComputer}`;
container.append(outputPersona);
container.append(outputComputer);

outputUscita = document.createElement('div');
if(nPersona > nComputer){
  outputUscita = 'HAI VINTO';
}else if(nComputer > nPersona ){
  outputUscita = 'HAI PERSO';
}else{
  outputUscita= 'PAREGGIO';
}

container.append(outputUscita);
})