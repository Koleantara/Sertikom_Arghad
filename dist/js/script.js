const navbar = document.querySelector(".navbar");

window.addEventListener("scroll" ,() => {
    const posisi = window.scrollY > 0;
    navbar.classList.toggle("Scrolling-active", posisi);
});
        const form = document.getElementById('myform');
            // const username = document.getElementById('username');
        const email = document.getElementById('email');
        // const password = document.getElementById('password');

        // const username_error = document.getElementById('username_error');
        const email_error = document.getElementById('email_error');
        // const password_error = document.getElementById('password_error');
    
        form.addEventListener('submit', function(event) {
            event.preventDefault();
            let isValid = true;

            // Clear previous error messages
            // username_error.textContent = '';
            email_error.textContent = '';
            // Validate Username
            // if (username.value.trim().length < 3) {
            //     username_error.textContent = 'Username must be at least 3 characters long.';
            //     isValid = false;
            // }

            // Validate Email
            const emailPattern = /^[^ ]+@[^ ]+\.[a-z]{2,3}$/;
            if (email.value.match(emailPattern)) {
                email_error.textContent = 'Please enter a valid email address.';
                isValid = false;
            }

            // Validate Password
            // if (password.value.length < 6) {
            //     password_error.textContent = 'Password must be at least 6 characters long.';
            //     isValid = false;
            // }

            // If any validation fails, prevent form submission
            if (!isValid) {
            }
        });