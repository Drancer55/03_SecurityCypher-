//función de cifrar
let cifrado = () => {
  alert("Funcion cifrado activada")
//Variables con los datos ingresados por el usuario
let inputText = document.getElementById('textoPorCifrar').value;
let llave = document.getElementById('chooseNumber').value;

console.log("valor del input: " + inputText + " llave: " + llave)

  let offset = Number(llave.value)
  typeof(offset)
  console.log(typeof(offset))

  document.getElementById('encodeM').innerHTML= "Tu mensaje codificado: " + cipher.encode(inputText, offset)
}

//agregar una función al tag del btn
document.getElementById('Codifica').addEventListener('click', (cifrado));

/*
//Arrow function de decifrado
const decifrado = () => {
let textl = texto.value;
let offset = parseInt(llave.value);
document.getElementById('decodeM').innerHTML = "Tu mensaje descifrado: " + cipher.decode(textl,offset);
console.log(cipher.decode(textl,offset));
}
*/
