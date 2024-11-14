document.addEventListener("DOMContentLoaded", function() {
    const passos = document.querySelectorAll(".passo");
    const botoesProximo = document.querySelectorAll(".btn-proximo");

    botoesProximo.forEach(botao => {
        botao.addEventListener("click", function() {
            const passoAtual = this.closest(".passo");
            const proximoPasso = document.getElementById(`passo-${this.dataset.proximo}`);
            
            passoAtual.classList.remove("ativo");
            proximoPasso.classList.add("ativo");
        });
    });
});