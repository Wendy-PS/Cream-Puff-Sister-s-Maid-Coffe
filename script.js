function aplicarMascaraTelefone(valor) {
    // Remove tudo que não for númeroooo
    valor = valor.replace(/\D/g, "");

    if (valor === "") {
        return "";
    }
    // Aplica a máscara conforme o tamanho, ou seja, como telefones tem 10 digitos, aplica no tamanho de 10
    if (valor.length > 10) {
        // Formato: (99) 99999-9999
        valor = valor.replace(/^(\d{2})(\d{5})(\d{4}).*/, "($1) $2-$3");
    } else if (valor.length > 5) {
        // Formato: (99) 9999-9999
        valor = valor.replace(/^(\d{2})(\d{4})(\d{0,4}).*/, "($1) $2-$3");
    } else if (valor.length > 2) {
        // Formato: (99) 9999
        valor = valor.replace(/^(\d{2})(\d{0,5})/, "($1) $2");
    } else {
        // Apenas abre parênteses
        valor = valor.replace(/^(\d*)/, "($1");
    }

    return valor;

}

// Captura o evento de digitação
document.getElementById("cadastroZap").addEventListener("input", function(e) {
    e.target.value = aplicarMascaraTelefone(e.target.value);
});

document.getElementById("contatoTelefone").addEventListener("input", function(e) {
    e.target.value = aplicarMascaraTelefone(e.target.value);
});





// Função para aplicar máscara no nomezinho
function mascaraNome(valor) {
    // Remove tudo que não for letra dessa joça
    valor = valor.replace(/[^A-Za-zÀ-ÖØ-öø-ÿ\s]/g, "");

    // Remove espaços duplicados
    valor = valor.replace(/\s{2,}/g, " ");

    // Capitaliza cada palavra
    valor = valor.replace(/\b\w/g, function(letra) {
        return letra.toUpperCase();
    });

    return valor;
}

// Aplica a máscara enquanto o usuário digita
document.getElementById("contatoNome").addEventListener("input", function(e) {
    const cursorPos = e.target.selectionStart; // Guarda posição do cursor
    e.target.value = mascaraNome(e.target.value);
    e.target.setSelectionRange(cursorPos, cursorPos); // Mantém posição do cursor
});

document.getElementById("cadastroNome").addEventListener("input", function(e) {
    const cursorPos = e.target.selectionStart; // Guarda posição do cursor
    e.target.value = mascaraNome(e.target.value);
    e.target.setSelectionRange(cursorPos, cursorPos); // Mantém posição do cursor
});