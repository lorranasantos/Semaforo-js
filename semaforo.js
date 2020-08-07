////////////////////////////////////////////////////////

const red  = document.getElementById ( 'red' );
const yellow = document.getElementById ( 'yellow' );
const green = document.getElementById ( 'green' );
const auto = document.getElementById ( 'auto' );
const sem = document.getElementById ( 'sem' );

var imgs = [];   
imgs[0] = './imagens/vermelho.png';
imgs[1] = './imagens/amarelo.png';
imgs[2] = './imagens/verde.png';

var imgTest = -1;
 
function semGreen (){
        sem.src = './imagens/verde.png';
        clearInterval(intervalId);
    
}
function semYellow (){
        sem.src = './imagens/amarelo.png';
        clearInterval(intervalId);
}
function semRed (){
        sem.src = './imagens/vermelho.png';
        clearInterval(intervalId);
}
let intervalId;
function semAuto (){ 
        intervalId = setInterval(function semAuto (){   
        ++imgTest;
        
        if (imgTest >= imgs.length) {
                imgTest = 0;
                
                }
        sem.src = imgs[imgTest];     
        }, 1000); 
}

green.addEventListener ( 'click', semGreen);
yellow.addEventListener ( 'click', semYellow);
red.addEventListener ( 'click', semRed);
auto.addEventListener ( 'click', semAuto);





  