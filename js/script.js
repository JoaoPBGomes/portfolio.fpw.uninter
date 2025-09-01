// Destaca o link do menu da página atual
document.addEventListener("DOMContentLoaded", function() {
    const links = document.querySelectorAll("nav ul li a");
    const currentPage = window.location.pathname.split("/").pop();

    links.forEach(link => {
        const href = link.getAttribute("href");
        if (href === currentPage) {
            link.classList.add("active");
        }
    });

    // Formulário de contato
    const form = document.querySelector("form");
    if (form) {
        form.addEventListener("submit", function(e) {
            e.preventDefault();
            alert("Mensagem enviada com sucesso! Obrigado pelo contato.");
            form.reset();
        });
    }
});

// Abre modal
function abrirModal(id) {
  document.getElementById(id).style.display = "block";
}

function fecharModal(id) {
  document.getElementById(id).style.display = "none";
}

// Fecha modal ao clicar fora
window.onclick = function(event) {
  const modais = document.querySelectorAll(".modal");
  modais.forEach(modal => {
    if (event.target === modal) {
      modal.style.display = "none";
    }
  });
};