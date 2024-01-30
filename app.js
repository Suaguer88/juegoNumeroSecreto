let numeroAleatorio = 0;
let intentos = 0;
let numerosYaSorteados = [];
let numeroMaximo = 10;

function addText(elemento, texto){
    let elementoHtml = document.querySelector(elemento);
    elementoHtml.innerHTML = texto;
}

function verificarIntento(){
    let numeroUsuario = parseInt(document.getElementById('valorUsuario').value);
    console.warn(intentos);
    if (numeroUsuario === numeroAleatorio){
        addText('p', `Excelente... Has Acertado al número en ${intentos} ${intentos === 1 ? 'intento' : 'intentos'}`);
        document.getElementById('reiniciar').removeAttribute('disabled');
    } else {
        //El usuario no acertó
        if (numeroUsuario > numeroAleatorio){
            addText('p', 'PISTA: El número secreto es menor.')
        }else {

            if (numeroUsuario < numeroAleatorio){
                addText('p', 'PISTA: El número secreto es mayor.')
            }
            intentos +=1;
            limpiarCaja();
        }
        return;
    }

function limpiarCaja(){
    document.querySelector('#valorUsuario').value = '';
}

}

function generarAleatorio() {
    let numGenerado =  Math.floor(Math.random()*numeroMaximo)+1;

    if (numerosYaSorteados.length == numeroMaximo){
        addText('p', 'Ya se sortearon todos los números posibles')
    } else {

    }
    if (numerosYaSorteados.includes(numGenerado)){
        return generarAleatorio();
    } else {
        numerosYaSorteados.push(numGenerado);
        return numGenerado;
    }
}


function condicionesIniciales(){
    addText('h1', 'Juego del número secreto');
    addText('p', `Indica un número del 1 al ${numeroMaximo}`);
    numeroAleatorio = generarAleatorio();
    intentos = 1;
}

function reiniciarJuego(){
    //limpiar caja, resetear el juego borrando el # aleatorio generado
     //Iniciar el # de intentos
    limpiarCaja();
    condicionesIniciales();
    //Deshabilitar el botón de juego
    document.querySelector('#reiniciar').setAttribute('disabled', 'true');
}

condicionesIniciales();
