function validarInput() {
    const inputValue = message.value;

    // Expresión regular para permitir solo letras minúsculas y espacios
    const regex = /^[a-z0-9\s]*$/;

    if (!regex.test(inputValue)) {
        warningMessage.textContent = "No se aceptan mayúsculas ni caracteres especiales.";
        // Limpiar el contenido que no cumple con la validación
        message.value = "";
    }else{
        warningMessage.textContent = ""; // Limpiar el mensaje de advertencia si la entrada es válida
    }
}

function encriptar() {
    //let mensaje = document.getElementById('message').value;******este si sirve el cifrado
    // Lógica de encriptación aquí (asegurarse de no aceptar mayúsculas ni caracteres especiales)
    //document.getElementById('output').value = mensaje;
    let mensaje = document.getElementById('message').value;
    // Agregar la letra "a" a cada letra en el mensaje
    let mensajeEncriptado = mensaje.split('').map(char => char === ' ' ? char : char + 'a').join('');
    document.getElementById('output').value = mensajeEncriptado;

    // Habilitar el botón de descifrar y deshabilitar el de cifrar
    document.getElementById('cifrarBtn').disabled = true;
    document.getElementById('descifrarBtn').disabled = false;
}

function descifrar() {
    //let mensajeEncriptado = document.getElementById('output').value;
    // Lógica de descifrado aquí (asegurarse de no aceptar mayúsculas ni caracteres especiales)
    //document.getElementById('message').value = mensajeEncriptado;
    
    let mensajeCopiado = document.getElementById('output').value;
    
    // Quitar la letra "a" solo si la palabra termina con "a" y no es una sola "a"
    let mensajeDescifrado = mensajeCopiado.split(' ').map(word => {
        if (word.length > 1 && word.endsWith('a')) {
            return word.slice(0, -1);
        }
        return word;
    }).join(' ');


    // Mostrar el mensaje descifrado en el área de salida
    document.getElementById('output').value = mensajeDescifrado;

    // Habilitar el botón de cifrar y deshabilitar el de descifrar
    document.getElementById('cifrarBtn').disabled = false;
    document.getElementById('descifrarBtn').disabled = true;
}

function copiar() {
    let resultado = document.getElementById('output');
    resultado.select();
    document.execCommand('copy');
    //alert('Texto copiado al portapapeles');

    // Mostrar el mensaje de alerta solo al hacer clic en el botón Copiar
    let alertMessage = document.getElementById('alertMessage');
    alertMessage.style.display = 'block';

    // Ocultar el mensaje después de 3 segundos
    setTimeout(function() {
        alertMessage.style.display = 'none';
    }, 3000);

    // Limpiar el contenido del textarea 'message'
    document.getElementById('message').value = '';

    // Visualizar el texto copiado en el área de salida
    document.getElementById('output').value = resultado.value;

    // Deshabilitar el botón de cifrar y habilitar el de descifrar después de copiar
    document.getElementById('cifrarBtn').disabled = false;
    document.getElementById('descifrarBtn').disabled = true;
}
