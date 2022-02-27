const funcionariosBTN = document.querySelector(".funcionariosBTN");
const registroBTN = document.querySelector(".registroBTN");
const folhaBTN = document.querySelector(".folhaBTN");

if (localStorage.getItem("token") == null) {
  window.location.href = "../index.html";
}

funcionariosBTN.addEventListener("click", (e) => {
  funcionariosBTN.setAttribute(
    "href",
    "../telas-compartilhadas/funcionarios/index.html"
  );
});

registroBTN.addEventListener("click", (e) => {
  registroBTN.setAttribute(
    "href",
    "../telas-compartilhadas/calendario/index.html"
  );
});

folhaBTN.addEventListener("click", (e) => {
  folhaBTN.setAttribute(
    "href",
    "../telas-compartilhadas/folha de pagamento/index.html"
  );
});