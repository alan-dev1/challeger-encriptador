const textarea = document.querySelector(".text-area");
const mensagem = document.querySelector(".mensagem");


function btnEncriptar() {
    if (textarea.value.trim() == "") {
        alert("Erro: O campo de entrada está vazio. Por favor, digite um texto para encriptar.");
        return;
    }

    const textoEncriptado = encriptar(textarea.value);
    mensagem.value = textoEncriptado;
    textarea.value = "";
}

function encriptar(stringEncriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringEncriptada = stringEncriptada.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringEncriptada.includes(matrizCodigo[i][0])) {
            stringEncriptada = stringEncriptada.replaceAll(matrizCodigo[i][0], matrizCodigo[i][1]);
        }
    }
    return stringEncriptada;
}


function btnDesencriptar() {
    if (textarea.value.trim() == "") {
        alert("Erro: O campo de entrada está vazio. Por favor, digite um texto para desencriptar.");
        return;
    }

    const textoDesencriptado = desencriptar(textarea.value);
    mensagem.value = textoDesencriptado;
    textarea.value = "";
}


function desencriptar(stringDesencriptada) {
    let matrizCodigo = [["e", "enter"], ["i", "imes"], ["a", "ai"], ["o", "ober"], ["u", "ufat"]];
    stringDesencriptada = stringDesencriptada.toLowerCase();
    
    for (let i = 0; i < matrizCodigo.length; i++) {
        if (stringDesencriptada.includes(matrizCodigo[i][1])) {
            stringDesencriptada = stringDesencriptada.replaceAll(matrizCodigo[i][1], matrizCodigo[i][0]);
        }
    }
    return stringDesencriptada;
}

function copiarTexto() {
    if (mensagem.value.trim() === "") {
        alert("Erro: O campo de resultado está vazio. Não há texto para copiar.");
        return;
    }

    mensagem.select();
    document.execCommand("copy");
    alert("Texto copiado para a área de transferência!");
}

function colarTexto() {
    navigator.clipboard.readText().then((text) => {
        textarea.value = text;
    }).catch(err => {
        console.error('Erro ao tentar colar texto: ', err);
    });
}
