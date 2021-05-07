const botonnumeros = document.getElementsByName ('numero');
const botonoperaciones = document.getElementsByName ('operacion');
const botonigual = document.getElementsByName ('igual')[0];
const botonborrar = document.getElementsByName ('borrar')[0];

var resultado = document.getElementById ('resultado');
var operacionactual= '';
var operacionanterios = '';
var operacion = undefined;

botonnumeros.forEach(function(boton){
boton.addEventListener('click',function(){
agregarnumero(boton.innerText);

})


});

botonoperaciones.forEach(function(boton){
    boton.addEventListener('click',function(){
    haceroperacion(boton.innerText);
    
    })
    
    
    });

 botonigual.addEventListener('click', function(){

    darresultado();
    actualizardisplay();

 });

 
 botonborrar.addEventListener('click', function(){

    borrarresultado();
    actualizardisplay();

 });
 function haceroperacion (ope){
if(operacionactual === '')return;
if(operacionanterios !== ''){
    darresultado()
}
operacion = ope.toString();
operacionanterios = operacionactual;
operacionactual = '';
 }
function darresultado(){

    var calculo;
    const anterior = parseFloat(operacionanterios);
    const actual = parseFloat (operacionactual);
    if (isNaN(anterior) || isNaN(actual))return;
    switch(operacion){
        case'+':
        calculo = anterior + actual;
        break;
        case'-':
        calculo = anterior - actual;
        break;
        case'*':
        calculo = anterior * actual;
        break;
        case'/':
        calculo = anterior / actual;
        break;
        default:
            return;
    }
    operacionactual= calculo;
    operacion = undefined;
    operacionanterios = '';
} 

function agregarnumero(num){
    operacionactual=operacionactual.toString() + num.toString();
    actualizardisplay();
}
function borrarresultado(){
    operacionactual = '';
    operacionanterios = '';
    operacion = undefined;
}
function actualizardisplay(){
    resultado.value = operacionactual;
}
borrarresultado();

