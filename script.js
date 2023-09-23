document.addEventListener("DOMContentLoaded", function () {
    const menuBar = document.querySelector("#menu-bar"); // Corrected the selector
    const navOption = document.querySelector(".nav-navber"); // Corrected the selector

    function toggleMobileMenu() {
        navOption.classList.toggle("show");
    }

    menuBar.addEventListener("click", toggleMobileMenu);
});

document.addEventListener("DOMContentLoaded", function () {
    const contactForm = document.getElementById("contact-form");

    function handleFormSubmit(event) {
        event.preventDefault();
        alert("Form submitted!");
        contactForm.reset();
    }

    contactForm.addEventListener("submit", handleFormSubmit);
});

document.getElementById("loginButton").addEventListener("click", function () {
    document.getElementById("loginPopupContainer").style.display = "block";
});

document.getElementById("closePopup").addEventListener("click", function () {
    document.getElementById("loginPopupContainer").style.display = "none";
});

document.getElementById("customerLoginButton").addEventListener("click", function () {
    // Add your functionality for the customer login button here
});

document.getElementById("providerLoginButton").addEventListener("click", function () {
    // Add your functionality for the provider login button here
});
