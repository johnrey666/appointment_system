
function togglePassword() {
    var passwordInput = document.getElementById("password");
    var toggleButton = document.querySelector(".toggle-password");
    if (passwordInput.type === "password") {
        passwordInput.type = "text";
        toggleButton.src = "../../Images/show.png";
    } else {
        passwordInput.type = "password";
        toggleButton.src = "../../Images/hide.png";
    }
}
