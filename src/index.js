//Se declara alerta de bienvenida
alert("Hola, Bienvenido")

//Se declara una variable para ocultar el contenido de nuestra página
var ocultarMain = document.getElementById("ocultar"); //Se accede al Id desde JS
console.log(ocultarMain) //Se utiliza el console.log para confirmar el funcionamiento en el browser
ocultarMain.style.visibility = "hidden" //Se oculta main id(ocultar) desde JS
//Cuando el usuario ingrese la clave correcta se desactivara la propiedad hidden
let acceso = prompt("Ingresa tu clave")//se declara una variable para que el usuario ingrese su contraseña
console.log(acceso) //Confirmamos ue funcione desde el browser
//Se declara la clave correcta que el usuario deberá ingresar
let clave = "12345"
//Si el usuario ingresa la contraseña correcta se le concederá el acceso
if(acceso === clave){
    alert("Acceso Concedido")
//si la clave es correcta omitir el estilo hidden
ocultarMain.style.visibility = ""    
}else {
    alert("Accesdo denegado")// Si el usuario ingresa una clave incorrecta se alertará el acceso denegado
}

//Variables con los datos ingresados por el usuario
const texto = document.getElementById("cipher")
const llave = document.getElementById("chooseNumber")
console.log(texto);
console.log(llave);

//Arrow function de cifrado
const cifrado = () => {
let cifrar = texto.value;
let offset = parseInt(llave.value);
document.getElementById('encodeM').innerHTML = "Tu mensaje cifrado: " + cipher.encode(cifrar,offset); //Se escribe en el DOM con el ID
console.log(cipher.encode(cifrar,offset));
}

//Arrow function de decifrado
const decifrado = () => {
let textl = texto.value;
let offset = parseInt(llave.value);
document.getElementById('decodeM').innerHTML = "Tu mensaje descifrado: " + cipher.decode(textl,offset);
console.log(cipher.decode(textl,offset))
}

