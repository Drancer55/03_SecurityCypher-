//Se declara alerta de bienvenida
alert("Hola, bienvenid@")

//Se declara una variable para ocultar el contenido de nuestra página
var ocultarMain = document.getElementById("ocultar"); //Se accede al Id desde JS
console.log(ocultarMain) //Se utiliza el console.log para confirmar el funcionamiento en el browser
ocultarMain.style.visibility = "hidden" //Se oculta main id(ocultar) desde JS
    //Cuando el usuario ingrese la clave correcta se desactivara la propiedad hidden
let acceso = prompt("Por favor, ingresa tu clave de acceso") //se declara una variable para que el usuario ingrese su contraseña
console.log(acceso) //Confirmamos que funcione desde el browser
    //Se declara la clave correcta que el usuario deberá ingresar
let clave = "12345"
//Si el usuario ingresa la contraseña correcta se le concederá el acceso
if(acceso === clave){
    alert("Acceso Concedido")
//si la clave es correcta omitir el estilo hidden
ocultarMain.style.visibility = ""
}else {
    alert("Acceso denegado")// Si el usuario ingresa una clave incorrecta se alertará el acceso denegado
}
//<Codificar \ Decodificar mensajes>
//Codificar
//Estos datos se asignan a las variables "text" y "llave" mediante los input en HTML con los que el usuario interatua en la UI
let text = document.getElementById("toCipher"); //string
let llave = document.getElementById("chooseNumber"); //number
console.log(text);
//se declara la function para cifrar el texto ingresado
var cifra = () => {
        let cifrar = text.value; //string
        let offset = parseInt(llave.value); //number
        //se establece conexión con el ID del div en html para imprimr en pantalla el mensaje a cifrar
        document.getElementById('encodeM').innerHTML = "Tu mensaje cifrado es: " + cipher.encode(cifrar, offset);
    }
    //Se declara la arrow function de la acción descifrar:
var descifra = () => {
    let descifrar = text.value;
    let offset = parseInt(llave.value);
    //Se establece conexión con el ID del div en html para imprimr en pantalla el mensaje a descifrar
    document.getElementById('decodeM').innerHTML = "Tu mensaje descifrado es:  \n " + cipher.decode(descifrar, offset);
    console.log(cipher.decode(descifrar, offset));
}
