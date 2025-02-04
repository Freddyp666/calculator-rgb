function cambiarTema(){
  let body=document.body;
  let calc=document.querySelector('.calculadora');
  if(body.style.backgroundColor=='white'){
      body.style.backgroundColor='#131010';
      calc.style.backgroundColor='#1A1A19';
      calc.style.color='white';

  }else{
      body.style.backgroundColor='white';
      calc.style.backgroundColor='white';
      calc.style.color='black';
  }

}

function cambiarRGB() {
  let r = Math.floor(Math.random() * 256);
  let g = Math.floor(Math.random() * 256);
  let b = Math.floor(Math.random() * 256);
  
  let colorRandom = `rgb(${r}, ${g}, ${b})`;
  document.querySelector('.calculadora').style.backgroundColor = colorRandom;

  // Calcular brillo basado en la luminosidad percibida
  let luminancia = 0.2126 * r + 0.7152 * g + 0.0722 * b;
  
  // Determinar color de texto (negro o blanco)
  let colorTexto = luminancia > 128 ? 'black' : 'white';
  document.querySelector('.calculadora').style.color = colorTexto;
}

//Agregar Valores a la pantalla
function agregarValorPantalla(valor){
  let mostrarPantalla=document.getElementById("pantallaCal");
  if(mostrarPantalla){
      mostrarPantalla.value+=valor;
  }else{
      console.error("No valor")
  }
  

}

//Funcion suma
function limpiarPantalla(){
  let borrar=document.getElementById("pantallaCal");
  borrar.value='';
}

function calcularResultado(){
  const valorPantalla=document.getElementById('pantallaCal').value;
  const resultado=eval(valorPantalla)
  document.getElementById('pantallaCal').value=resultado;


}