document.getElementById('login-form').addEventListener('submit', function(event) {
    event.preventDefault();
});
const btnLogin = document.getElementById('id_button');
btnLogin.addEventListener('click', function() {
  window.location.href = 'https://da6zin.github.io/Fortes-Engenharia---Juliana/index.html#'; 
});


const forgotPasswordBtn = document.getElementById('forgotPassword');
const modal = document.getElementById('myModal');
const span = document.getElementsByClassName('close')[0];
forgotPasswordBtn.addEventListener('click', function() {
  modal.style.display = 'block';
});
span.addEventListener('click', function() {
  modal.style.display = 'none';
});
window.addEventListener('click', function(event) {
  if (event.target == modal) {
    modal.style.display = 'none';
  }
});
const submitEmailBtn = document.getElementById('submitEmail');
submitEmailBtn.addEventListener('click', function() {
  const email = document.getElementById('emailInput').value;
  alert(`Um email foi enviado para ${email} com instruções para recuperar sua senha.`);
  modal.style.display = 'none';
});