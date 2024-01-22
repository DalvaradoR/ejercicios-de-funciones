let titulo  = document.querySelector('h1');
titulo.innerHTML = 'Es hora del desafio';

//creacion de funcion para mandar a imprimir en consola
function clickSeMuestraEnConsole(){
    console.log('EL Boton fue clicado');
};

//funcion pide al usuario un nombre de una ciudad luego la concatena desntro de un texto en una alert con temple string
function clickPromptPregunta(){
    let ciudad = prompt('Digite la ciudad en donde esta');
    alert('Estuve en '+ciudad+' y me acorde de ti.');
};

//funcion manda una alert con un texto definido/constante
function clickPorAlerta(){
    alert('Yo amo JS')
};

//funcion pide al usuario 2 numeros con prompt (los recive como string) y con parseIn los convierte en number
function clickParaSumar(){
    let numero1 = parseInt(prompt('Digite el primer numero para sumar'));
    let numero2 = parseInt(prompt('Digite el segundo numero para sumar'));
  //hacemos un temple string pero como las variables numero1 y numero2 son numeros podemos hacer la suma en ${} directamente
    alert(`la suma de ${numero1} + ${numero2} es ${numero1+numero2}`);
};
