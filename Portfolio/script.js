// Smooth scrolling for navbar links
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
// Scroll to top button
let scrollTopBtn = document.getElementById("scrollTopBtn");

window.onscroll = function() {
    scrollFunction();
};

function scrollFunction() {
    if (document.body.scrollTop > 100 || document.documentElement.scrollTop > 100) {
        scrollTopBtn.style.display = "block";
    } else {
        scrollTopBtn.style.display = "none";
    }
}

function scrollToTop() {
    window.scrollTo({
        top: 0,
        behavior: 'smooth'
    });
}

//Chatbot
function openChatbot() {
    // Add your chatbot functionality or trigger modal
    alert("Chatbot Opened!");
}



// Reinitialize AOS on new content or dynamically loaded sections
window.addEventListener('load', function() {
    AOS.init({
        duration: 1000,  // Animation duration
        offset: 200,     // Offset from the top
        easing: 'ease-in-out', // Animation easing
    });
});

