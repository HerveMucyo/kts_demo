document.addEventListener('DOMContentLoaded', function() {
    const loginBtn = document.getElementById('loginBtn');
    const signupBtn = document.getElementById('signupBtn');
    const forgotPasswordLink = document.getElementById('forgotPasswordLink');
    const mobileLoginBtn = document.getElementById('mobileLoginBtn');
    const mobileSignupBtn = document.getElementById('mobileSignupBtn');
    const loginForm = document.getElementById('loginForm');
    const signupForm = document.getElementById('signupForm');
    const forgotPasswordForm = document.getElementById('forgotPasswordForm');
    const heroSection = document.querySelector('.hero');
    const homeIcon = document.querySelector('.fa-home');

    // Function to hide all forms
    function hideAllForms() {
        loginForm.style.display = 'none';
        signupForm.style.display = 'none';
        forgotPasswordForm.style.display = 'none';
    }

    // Initially hide all forms
    hideAllForms();

    loginBtn.addEventListener('click', function() {
        hideAllForms();
        loginForm.style.display = 'block';
        heroSection.style.display = 'none'; // Hide hero section when login button is clicked
    });

    signupBtn.addEventListener('click', function() {
        hideAllForms();
        signupForm.style.display = 'block';
        heroSection.style.display = 'none'; // Hide hero section when signup button is clicked
    });

    forgotPasswordLink.addEventListener('click', function(event) {
        event.preventDefault(); // Prevent default link behavior
        hideAllForms();
        forgotPasswordForm.style.display = 'block';
        heroSection.style.display = 'none'; // Hide hero section when forgot password link is clicked
    });

    mobileLoginBtn.addEventListener('click', function() {
        hideAllForms();
        loginForm.style.display = 'block';
        heroSection.style.display = 'none'; // Hide hero section when mobile login button is clicked
    });

    mobileSignupBtn.addEventListener('click', function() {
        hideAllForms();
        signupForm.style.display = 'block';
        heroSection.style.display = 'none'; // Hide hero section when mobile signup button is clicked
    });

    // Event listener for clicking on the home icon
    homeIcon.addEventListener('click', function() {
        hideAllForms();
        heroSection.style.display = 'block'; // Display hero section when home icon is clicked
    });
});