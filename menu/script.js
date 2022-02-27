const funcionariosBTN = document.querySelector(".funcionariosBTN");
const registroBTN = document.querySelector(".registroBTN");
const folhaBTN = document.querySelector(".folhaBTN");
const gestaoBTN = document.querySelector(".gestaoBTN");
const sairBTN = document.querySelector(".botaoSair");

function load() {

  folhaBTN.style.display = 'none';
  gestaoBTN.style.display = 'none';

  fetch("https://flash-point-app.herokuapp.com/api/usuario/me", {
    method: "Get",
    headers: {
        Accept: "application/json",
        Authorization: "Bearer " + localStorage.getItem("token"),
    },
  })
  .then((response) => response.json())
  .then((usuario) => {
      if (usuario.cargo == "ADMIN") {
        folhaBTN.style.display = 'block';
        gestaoBTN.style.display = 'block';
      } else if(usuario.cargo == "LIDER") {
        folhaBTN.style.display = 'block';
      }
  });
}

load();

if (localStorage.getItem("token") == null) {
  window.location.href = "../";
}

funcionariosBTN.addEventListener("click", (e) => {
  window.location.href = "funcionarios";
});

registroBTN.addEventListener("click", (e) => {
  window.location.href = "calendario";
});

folhaBTN.addEventListener("click", (e) => {
  window.location.href = "folha";
});

gestaoBTN.addEventListener("click", (e) => {
  window.location.href = "gestao_fiscal";
});

sairBTN.addEventListener("click", (e) => {
  window.location.href = "./..";
});
