document.addEventListener("DOMContentLoaded", () => {
  const form = document.getElementById("form-contato");
  const aviso = document.getElementById("aviso");

  form.addEventListener("submit", function(event) {
    event.preventDefault();

    const nome = document.getElementById("nome").value.trim();
    const email = document.getElementById("email").value.trim();
    const mensagem = document.getElementById("mensagem").value.trim();



    aviso.textContent = `Obrigado, ${nome}! Sua mensagem foi enviada com sucesso.`;
    aviso.classList.remove("hidden");
    aviso.style.display = "block";

    form.reset();

    setTimeout(() => {
      aviso.classList.add("hidden");
      aviso.style.display = "none";
    }, 5000);
  });
});
