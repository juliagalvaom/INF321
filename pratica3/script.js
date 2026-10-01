// ===========================
// 1. Botão "Comprar"
// ===========================
const botoesComprar = document.querySelectorAll(".btn-comprar");
const mensagemCarrinho = document.getElementById("mensagem-carrinho");

botoesComprar.forEach(function (botao) {
    botao.addEventListener("click", function () {
        // Exibe a mensagem usando classList
        mensagemCarrinho.classList.remove("escondido");

        // Some com a mensagem depois de 2 segundos
        setTimeout(function () {
            mensagemCarrinho.classList.add("escondido");
        }, 2000);
    });
});

// ===========================
// 2. Campo de busca
// ===========================
const campoBusca = document.getElementById("campo-busca");
const botaoBuscar = document.getElementById("btn-buscar");
const cards = document.querySelectorAll(".card");

botaoBuscar.addEventListener("click", function () {
    const termo = campoBusca.value.toLowerCase();

    cards.forEach(function (card) {
        const nomeProduto = card.querySelector("h3").textContent.toLowerCase();

        if (nomeProduto.includes(termo)) {
            card.classList.remove("escondido");
        } else {
            card.classList.add("escondido");
        }
    });
});

// ===========================
// 3. Validação do formulário
// ===========================
const formContato = document.getElementById("form-contato");
const campoNome = document.getElementById("nome");
const campoEmail = document.getElementById("email");
const campoMensagem = document.getElementById("mensagem");
const mensagemSucessoForm = document.getElementById("mensagem-sucesso-form");

formContato.addEventListener("submit", function (evento) {
    evento.preventDefault(); // Evita o envio real do formulário

    let formularioValido = true;

    formularioValido = validarCampo(campoNome, "erro-nome") && formularioValido;
    formularioValido = validarCampo(campoEmail, "erro-email") && formularioValido;
    formularioValido = validarCampo(campoMensagem, "erro-mensagem") && formularioValido;

    if (formularioValido) {
        mensagemSucessoForm.classList.remove("escondido");
        formContato.reset();
    } else {
        mensagemSucessoForm.classList.add("escondido");
    }
});

// Função usada para validar cada campo e alternar suas classes CSS
function validarCampo(campo, idErro) {
    const erro = document.getElementById(idErro);

    if (campo.value.trim() === "") {
        campo.classList.add("invalido");
        erro.classList.remove("escondido");
        return false;
    } else {
        campo.classList.remove("invalido");
        erro.classList.add("escondido");
        return true;
    }
}
