document.addEventListener("DOMContentLoaded", function () {
    document.getElementById("paginaSecundaria").style.display = "none";
});

//substitui o formulário pelo segundo frame 
document.addEventListener("DOMContentLoaded", () => {
    const form = document.querySelector(".form_calculadora");
    const button = form.querySelector("button");

    button.addEventListener("click", (event) => {
        event.preventDefault(); // Evita o envio padrão do formulário

        // Substituir o conteúdo do formulário por uma nova mensagem
        form.innerHTML = `<div class="newwindow" style="height: 381px;">
            <p style="font-size: 1.2rem; font-weight: bold; color: #333; margin-bottom: 20px;">
                Custo de Rotatividade Anual:
            </p>
            <h3 style="font-size: 2rem; font-weight: bold; color: #D61CED; margin-bottom: 20px;">
                R$ XX.XXX,XX
            </h3>
            <p style="margin-top:90px; font-size: 1rem; color: #555; margin-bottom: 20px;">
                Acesse o relatório completo, entenda quais são seus custos e veja como diminuir a sua perda de dinheiro hoje mesmo!
            </p>
            <button id="relatorio-button" style="padding: 12px; background-color: #723056; color: #fff; border: none; border-radius: 40px; font-size: 1rem; cursor: pointer; text-transform: uppercase; font-weight: bold; transition: background-color 0.3s, transform 0.2s; margin-top: 50px;">
                Acessar relatório gratuito
            </button></div>
        `;

        // Adicionar funcionalidade ao botão de acessar relatório
        const relatorioButton = document.querySelector("#relatorio-button");
        relatorioButton.addEventListener("click", () => {
            document.getElementById('paginaInicial').style.display = 'none';
            document.getElementById('paginaSecundaria').style.display = 'block';
        });
    });
});

//animação para os elementos aparecerem na tela
document.addEventListener("DOMContentLoaded", () => {
    const elements = document.querySelectorAll(".slide-from-left, .slide-from-right, #slide-from-bottom, .slide-from-top");

    const observer = new IntersectionObserver((entries) => {
        entries.forEach((entry) => {
            if (entry.isIntersecting) {
                // Adiciona a classe 'visible' quando o elemento está visível
                entry.target.classList.add("visible");
            } else {
                // Remove a classe 'visible' quando o elemento não está visível
                entry.target.classList.remove("visible");
            }
        });
    }, {
        threshold: 0.1, // Ativa quando 10% do elemento está visível
    });

    // Observa cada elemento individualmente
    elements.forEach((element) => observer.observe(element));
});
