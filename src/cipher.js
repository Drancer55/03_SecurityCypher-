//a nivel de BOM
window.cipher = {
  //arrow function de codificado
  encode: function encode (offset,cifrar) {
    console.log("function encode activada") // => Función  //variable local que opera el cifrado de MAYÚSCULAS
    if(!(typeof(cifrar)==='string')){
      let noEs = "Error, ingrese una cadena de caracteres"
      return  noEs
    }
    let cifrado = "";
    console.log(offset,cifrar)
    console.log(typeof(offset))
    //se declara un for para iterar el string que se va a codificar
    for(let i=0; i< cifrar.length; i++) {
      console.log(cifrar.length)

      if (cifrar.charCodeAt(i)>=65 && cifrar.charCodeAt(i) <=90) {  //Se toma el código ASCII del rango de 65 a 90
        cifrado= cifrado + String.fromCharCode((cifrar.charCodeAt(i) + offset -65) %26+65)
        console.log(cifrado);
        return cifrado;

      } else if (cifrar.charCodeAt(i)>=97 && cifrar.charCodeAt(i) <= 122) {
        cifrado = cifrado + String.fromCharCode((cifrar.charCodeAt(i) + offset -97) %26 + 97)
        console.log(cifrado);
        return cifrado;

      } else  {
        cifrado = cifrado + String.fromCharCode(cifrar.charCodeAt(i))
        console.log(typeof(cifrar))
        console.log(cifrado);
        return cifrado;
      }

    } //for closure
  }

  //se cierra objeto cipher
}

