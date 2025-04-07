/* Hermano del Cesar */

function formSubmit() {
    let modo = document.getElementById("cifrar-modo").value;
    let clave = parseInt(document.getElementById("cifrar-clave").value, 10);
    let entrada = document.getElementById("cifrar-entrada").value;
    let salida = document.getElementById("cifrar-salida");

    if (isNaN(clave)) {
        console.error("Clave inválida.");
        return;
    }

    if (modo === "Encriptar") {
        salida.innerText = encriptar(clave, entrada);
    } else if (modo === "Desencriptar") {
        salida.innerText = desencriptar(clave, entrada);
    } else {
        console.error("Modo inválido.");
    }
}

function encriptar(clave, entrada) {
    let cifrado = "";
    const maxCharCode = 65535;

    for (let i = 0; i < entrada.length; i++) {
        let code = entrada.charCodeAt(i);
        code = (code + clave) % (maxCharCode + 1); 
        cifrado += code.toString().padStart(5, '0');
    }

    return cifrado;
}

function desencriptar(clave, cifrado) {
    let salida = "";
    const maxCharCode = 65535;

    for (let i = 0; i < cifrado.length; i += 5) {
        let code = parseInt(cifrado.substring(i, i + 5), 10);
        code = (code - clave + (maxCharCode + 1)) % (maxCharCode + 1);
        salida += String.fromCharCode(code);
    }

    return salida;
}
