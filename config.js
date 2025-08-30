const btnHome = document.getElementById("button");

btnHome.addEventListener("click", () => {
  window.location.href = "index.html";
})


const form = document.getElementById("formContato");
const msg = document.getElementById("msg-sucesso");

form.addEventListener("submit", (e) => {
  e.preventDefault(); 

  const nome = document.getElementById("nome").value.trim();
  const email = document.getElementById("email").value.trim();
  const mensagem = document.getElementById("mensagem").value.trim();

  if (!nome || !email || !mensagem) {
    alert("Preencha todos os campos!");
    return;}
  msg.classList.remove("oculto");
  form.reset();
});