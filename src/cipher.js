//funciones del objeto window
  window.cipher = {
//se declara function de codificado (encode):
    encode : (cifrar, offset) => {
    console.log("Inicia cifrado");
//Variables que se necesitan para el cifrado
//Cada bloque local se refiere a un cierto tipo de carácteres especiales, se divide así para facilitar codificar y decodificar mensajes de acuerdo a un subgrupo (mayúsculas, minúsculas, espacios y carácteres especiales respectivamente)
    let cifrado = "";
    let codeNumber = "";
      for(let i=0; i<cifrar.length; i++) {    //iteraciones, cifrar.length determinará cuantas "vueltas" dará para encontrar el carácter correspondiente al cifrado
//De acuerdo con el número que abarcan los códigos del abecedario en American Standard Code for Information Interchange (ASCII) buscaremos los parámetros (en este caso de 32 al 64 para números y carácteres como "%&/())
//Cada console.log muestra que el código pasa y lo "lee" imprimiendolo en la consola del Browser
      if (cifrar[i].charCodeAt() >= 33 && cifrar[i].charCodeAt() <= 64) {
        let simbol = (cifrar[i].charCodeAt() - 33 + offset) % 32 + 33;
        let codeNumber = String.fromCharCode(simbol);
        cifrado += codeNumber;
          console.log("Números y/o simbolos codificados")
//los carácteres que se abarcan en este bloque corresponden a letras con acentos y carácteres especiales (del 123 al 254 ASCII) por ejemplo: ñ{á}éçó
      } else if (cifrar[i].charCodeAt() >= 123 && cifrar[i].charCodeAt() <= 254) {
        let character = (cifrar[i].charCodeAt() - 123 + offset) % 132 + 123; //132 carácteres en este bloque
        let codeNumber = String.fromCharCode(character);
        cifrado += codeNumber;
        console.log("Carácter especial codificado")
//32 ASCII corresponde al carácter "space"
      } else if (cifrar[i].charCodeAt() == 32) {
        let space = " ";
        cifrado += space;
        console.log("Espacio codificado");
//65 al 90 ASCII corresponde a las mayúsculas
      } else if (cifrar[i].charCodeAt() >= 65 && cifrar[i].charCodeAt() <= 90) {
        let upper = (cifrar[i].charCodeAt() - 65 + offset) % 26 + 65; //26 letras del abecedario
        let codeNumber = String.fromCharCode(upper);                 //El String.fromCharCode() método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
        cifrado += codeNumber;
        console.log("Mayúscula codificada");
        console.log(codeNumber);
//del 97 al 122 ASCII corresponde a las minúsculas
      } else if (cifrar[i].charCodeAt() >= 97 && cifrar[i].charCodeAt() <= 122) {
        let lower = (cifrar[i].charCodeAt() - 97 + offset) % 26 + 97; //26 letras del abecedario
        let codeNumber = String.fromCharCode(lower);                  //El String.fromCharCode() método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
        cifrado += codeNumber;
        console.log("Minúscula codificada");
        console.log(codeNumber);
      } console.log(cifrado);
      }
          return cifrado; //Retorna cuantos espacios se va a desplazar para codificar el secreto
  },
//se declara function paradecodificar (decode):
//
    decode : (descifrar, offset) => {
        console.log("Inicio del descifrado")
//Variables que nos ayudarán a descifrar el mensaje oculto
        let descifrado = "";
        let codeNumber = ""; //Determina el código de algun carácter especial
//iteraciones, descifrar.length determinará cuantas "vueltas" dará para encontrar el carácter correspondiente al descifrado de los carácteres ingresados
      for(let i=0; i<descifrar.length; i++) {
              console.log("El decodificado ha iniciado");
//32 al 64 ASCII corresponde a los números y carácteres como "%&/())
      if (descifrar[i].charCodeAt() >= 33 && descifrar[i].charCodeAt() <= 64) {
        let simbolo = (descifrar[i].charCodeAt()-64 - offset) % 32 + 64;
        let codeNumber = String.fromCharCode(simbolo);
          descifrado += codeNumber;
          console.log(descifrado); //Muestra lo que hay en la variable en ese momento (relativo)
          console.log("Número y/o simbolo decodificado")
//123 al 254 ASCII  corresponde a carácteres como letras con acentos y carácteres llaves, entre otras cosas, por ejemplo: ñ{á}éçó
      } else if (descifrar[i].charCodeAt() >= 123 && descifrar[i].charCodeAt() <= 254) {
        let caracter = (descifrar[i].charCodeAt()- 254 - offset) % 132 + 254;
        let codeNumber = String.fromCharCode(caracter);
          descifrado += codeNumber;
          console.log("Carácter Especial decodificado")
//33 ASCII corresponde al "espacio"
      } else if (descifrar[i].charCodeAt() == 32) {
        let space = " ";
          descifrado += space;
          console.log("Espacio decodificado");
//65 al 97 ASCII corresponde a las mayúsculas
      } else if (descifrar[i].charCodeAt() >= 65 && descifrar[i].charCodeAt() <= 90) {
        let mayusculas = (descifrar[i].charCodeAt()- 90 - offset) % 26 + 90;
        let codeNumber = String.fromCharCode(mayusculas); //El String.fromCharCode() método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
          descifrado += codeNumber;
          console.log("Mayúscula decodificada");
          console.log(codeNumber);
//97 al 122 corresponde a las minúsculas
      } else if (descifrar[i].charCodeAt() >= 97 && descifrar[i].charCodeAt() <= 122) {
        let minusculas = (descifrar[i].charCodeAt() - 122 - offset) % 26 + 122;
        let codeNumber = String.fromCharCode(minusculas); //El String.fromCharCode() método estático que devuelve una cadena creada mediante el uso de una secuencia de valores Unicode especificada.
          descifrado += codeNumber;
          console.log("Minúscula decodificada");
      }
//Se finaliza el cifrado.
          console.log("Mission Complete!!"); //Por fin!!
      }
        return descifrado;
      }
//se cierra objeto cipher
    };
