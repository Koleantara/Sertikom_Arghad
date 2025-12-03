const navbar = document.querySelector(".navbar");
window.addEventListener("scroll" ,() => {
    const posisi = window.scrollY > 0;
    navbar.classList.toggle("Scrolling-active", posisi);
});

const form = document.getElementById('myform');
        const nama = document.getElementById('nama');
        const email = document.getElementById('email');
        const subjek = document.getElementById('subjek');

        const nama_error = document.getElementById('nama_error');
        const email_error = document.getElementById('email_error');
        const subjek_error = document.getElementById('subjek_error');
            form.addEventListener('submit', function(event) {
                event.preventDefault();
                let isValid = true;

            nama_error.textContent = '';
            email_error.textContent = '';
            subjek_error.textContent = '';

            if (nama.value.trim().length < 3) {
                nama_error.textContent = 'tolong isi nama anda.';
                isValid = false;
            }

            // Validate Email
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (email.value.match(emailPattern)) {
                email_error.textContent = 'email anda salah format.';
                isValid = false;
            }

            // Validate subjek
            if (subjek.value.length < 6) {
                subjek_error.textContent = 'subjek tolong diisi.';
                isValid = false;
            }

            // If any validation fails, prevent form submission
            if (!isValid) {
            }
        });
