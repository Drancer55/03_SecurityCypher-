//a nivel de BOM
window.cipher = {
  //arrow function de codificado
  encode : (cifrar,offset) => {
    console.log("Inicia cifrado")
    //variable local que opera el cifrado
    let cifrado = "";
    let getCodeNumber = "";
    for(let i=0; i<cifrar.length; i++) {
      if (cifrar[i].charCodeAt() >33 && cifrar[i].charCodeAt() <= 64){
        getCodeNumber = (cifrar[i]);
        console.log(cifrado);
      } else if (cifrado.charCodeAt() >= 123 && cifrado [i].charCodeAt() <= 254) {
        getCodeNumber = (cifrar[i]);
        cifrado += getCodeNumber;
      } else if (cifrar[i].charCodeAt() ==32) {
        let spaces = " ";
        cifrado += spaces;
        console.log("Espacio leído");
        //busqueda de MAYÚSCULAS (65-90)
      } else if (cifrar[i].charCodeAt >=65 && cifrar[i].charCodeAt() <= 90) {
        let upper = (cifrar[i].charCodeAt()-65 + offset) % 26 + 65;
        let getCodeNumber = String.fromCharCode(upper);
        cifrado += getCodeNumber;
        console.log("Mayúscula leida"); //Así viene en el ejemplo
        console.log(getCodeNumber);
        //busqueda de minúsculas (97-122)
      } else if (cifrar[i].charCodeAt() >= 97 && cifrar[i].charCodeAt >= 122) {
        let lower =(cifrar[i].charCodeAt() -97 + offset) % 26 + 97;
        let getCodeNumber = String.fromCharCode(lower);
        cifrado += getCodeNumber;
        console.log("minúscula leída")
        console.log(getCodeNumber);
      } console.log(cifrado);
    }
    return cifrado;
  },
  decode : (textl,offset) => {
    console.log("Inicia el descifrado")
    let descifrar = "";
    let getCodeNumber = "";
    //se especifica el numero de iteraciones con un FOR
    for (let i=0; i<textl.length; i++) {
      console.log("Inicia el decodificado");
    } if (textl[i].charCodeAt() >= 33 && textl[i].charCodeAt() <= 64) {
      getCodeNumber = (textl[i]);
      descifrado += getCodeNumber;
      console.log(descifrado);
    } else if (textl[i].charCodeAt() >= 123 && textl[i].charCodeAt() <=254) {
      getCodeNumber = textl[i];
      descifrado += getCodeNumber;
    } else if (textl[i].charCodeAt() == 32){
      let spaces = " ";
      descifrado += spaces;
      console.log ("Espacio leído")
      // Buscar MAYÚSCULAS (65-97)
    } else if (textl[i].charCodeAt() >=65 && textl[i].charCodeAt <= 90) {
      let upper = (textl[i].charCodeAt() - 90 - offset) % 26 + 90;
      let getCodeNumber = String.fromCharCode(upper);
      descifrado += getCodeNumber;
      console.log("Mayúscula leída");
      console.log(getCodeNumber);
      //Buscar minúsculas (97-22)
    } else if (textl[i].charCodeAt() >= 97 && textl[i].charCodeAt <=122) {
      let lower = (textl[i].charCodeAt() - 122 - offset) % 26 + 122;
      let getCodeNumber = String.fromCharCode(lower);
      descifrado += getCodeNumber;
      console.log("minúscula leída");
      console.log(getCodeNumber);
    }
    console.log(descifrado);
    console.log("Final")
  }
  //return descifrado;
};
