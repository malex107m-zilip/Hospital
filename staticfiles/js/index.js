const menuToggle = document.getElementById('mobile-menu');
const navLinks = document.querySelector('.nav-links');

menuToggle.addEventListener('click', () => {
    navLinks.classList.toggle('active');
});


document.querySelectorAll('.nav-links a').forEach(link => {
    link.addEventListener('click', () => {
        navLinks.classList.remove('active');
    });
});

window.addEventListener('scroll', () => {
    const navbar = document.querySelector('.navbar');
    if (window.scrollY > 50) {
        navbar.style.boxShadow = "0 2px 10px rgba(0,0,0,0.1)";
    } else {
        navbar.style.boxShadow = "none";
    }
});


const followBtn = document.getElementById('followBtn');
followBtn.addEventListener('click', function () {
    if (this.innerText === "Join") {
        this.innerText = "Joined";
        this.style.backgroundColor = "#2c3e50";
    } else {
        this.innerText = "Join";
        this.style.backgroundColor = "var(--accent-color)";
    }
});
