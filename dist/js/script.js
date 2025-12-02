const navbar = document.querySelector(".navbar");

window.addEventListener("scroll" ,() => {
    const posisi = window.scrollY > 0;
    navbar.classList.toggle("Scrolling-active", posisi);
});
const form = document.getElementById("myForm");
const emailInput = document.getElementById("email");
const emailError = document.getElementById("email_error");

form.addEventListener("submit", function (event){
        event.preventDefault();
        let isValid = true;

        emailError.textContent = "";

        const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
        if (emailInput.value.trim() === "") {
          emailError.textContent = "Email tidak boleh kosong !";
          isValid = false;
        } else if (!emailInput.value.match(emailPattern)) {
          emailError.textContent = "Format email tidak valid!";
          isValid = false;
        }

        if (isValid) {
            }
});
