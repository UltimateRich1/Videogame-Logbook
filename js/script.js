const signIn = document.getElementById("sign-in-btn");
const signUp = document.getElementById("sign-up-btn");

signIn.addEventListener("click", redirectToSignInPage);
signUp.addEventListener("click", redirectToSignUpPage);

function redirectToSignInPage() {
  window.location.href = "/html/sign-in.html";
}
function redirectToSignUpPage() {
  window.location.href = "/html/sign-up.html";
}
