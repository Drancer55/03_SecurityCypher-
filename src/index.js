//Acceso de usuario
let user = prompt("Usuario: ");
let password = prompt ("Contraseña: ");

function acceso () {
    var userName = "'Antonio', 'Javier'";
    var passWord = "12345"
    if (user == userName && passWord == password){
        document.hidden = true;
        alert("Hola Bienvenido")
    } else {
        document.hidden = false
        alert("Acceso denegado")
    }
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

