
const loginForm = document.getElementById("login-form");
const loginButton = document.getElementById("login-form-submit");
const loginErrorMsg = document.getElementById("login-error-msg");

loginButton.addEventListener("click", (e) => {
    e.preventDefault();
    const username = loginForm.username.value;
    const password = loginForm.password.value;

    if (username === "user" && password === "cwdhs") {
        location.reload();
        window.location = "index.html";
    } else {
        loginErrorMsg.style.opacity = 1;
        setTimeout(function(){
        loginErrorMsg.style.opacity = 0;
      }, 2000);
    }
})
