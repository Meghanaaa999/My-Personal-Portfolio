// Smooth scroll for navigation
document.querySelectorAll('nav a[href^="#"]').forEach(link => {
    link.addEventListener('click', function (e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            target.scrollIntoView({ behavior: 'smooth' });
        }
    });
});

// Form validation and thank-you alert
document.getElementById('contactForm').addEventListener('submit', function (e) {
    e.preventDefault(); // prevent page reload

    const name = document.getElementById('name');
    const email = document.getElementById('email');
    const message = document.getElementById('message');

    if (!name.value.trim() || !email.value.trim() || !message.value.trim()) {
        alert("Please fill in all fields.");
        return;
    }

    if (!validateEmail(email.value)) {
        alert("Please enter a valid email address.");
        return;
    }

    // Success message
    alert("Thank you for your message, " + name.value + "! I'll get back to you soon.");

    // Reset form
    this.reset();
});

// Email validation function
function validateEmail(email) {
    const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
    return regex.test(email);
}

// Scroll to top button
const scrollBtn = document.createElement('button');
scrollBtn.innerText = '⬆ Top';
scrollBtn.id = 'scrollTopBtn';
document.body.appendChild(scrollBtn);

scrollBtn.style.position = 'fixed';
scrollBtn.style.bottom = '30px';
scrollBtn.style.right = '30px';
scrollBtn.style.padding = '10px';
scrollBtn.style.display = 'none';
scrollBtn.style.backgroundColor = '#6c63ff';
scrollBtn.style.color = '#fff';
scrollBtn.style.border = 'none';
scrollBtn.style.borderRadius = '5px';
scrollBtn.style.cursor = 'pointer';
scrollBtn.style.zIndex = '1000';

window.addEventListener('scroll', () => {
    scrollBtn.style.display = window.scrollY > 300 ? 'block' : 'none';
});

scrollBtn.addEventListener('click', () => {
    window.scrollTo({ top: 0, behavior: 'smooth' });
});

// Console branding
console.log("%cHello from Meghana's Portfolio!", "color: #6c63ff; font-size: 18px; font-weight: bold;");
