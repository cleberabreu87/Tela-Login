function login() {
  const usuario = document.getElementById("txtusuario").value;
  const senha = document.getElementById("txtsenha").value;
  if (!usuario || !senha) {
    alert("Por gentileza, preencher os campos!");
  } else {
    alert("Login Efetuado!");
  }
}
