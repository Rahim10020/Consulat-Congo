// Countdown Timer
function updateCountdown() {
    const targetDate = new Date('2025-08-12');
    const now = new Date();
    const diff = targetDate - now;
    
    const days = Math.floor(diff / (1000 * 60 * 60 * 24));
    const hours = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
    const minutes = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
    const seconds = Math.floor((diff % (1000 * 60)) / 1000);
    
    document.getElementById('days').textContent = days.toString().padStart(2, '0');
    document.getElementById('hours').textContent = hours.toString().padStart(2, '0');
    document.getElementById('minutes').textContent = minutes.toString().padStart(2, '0');
    document.getElementById('seconds').textContent = seconds.toString().padStart(2, '0');
}

// Petite animation d’apparition
document.querySelectorAll(".countdown-item").forEach((item, index) => {
  item.style.opacity = 0;
  item.style.transform = "translateY(20px)";
  setTimeout(() => {
    item.style.transition = "all 0.6s ease";
    item.style.opacity = 1;
    item.style.transform = "translateY(0)";
  }, 200 * index);
});


// Registration Form Handling
document.getElementById('registrationForm')?.addEventListener('submit', function(e) {
    e.preventDefault();
    
    const formData = {
        fullName: document.getElementById('fullName').value,
        email: document.getElementById('email').value,
        phone: document.getElementById('phone').value,
        nationality: document.getElementById('nationality').value,
        occupation: document.getElementById('occupation').value,
        organization: document.getElementById('organization').value,
        events: Array.from(document.querySelectorAll('input[name="events"]:checked')).map(cb => cb.value),
        timestamp: new Date().toISOString()
    };
    
    let registrations = JSON.parse(localStorage.getItem('registrations') || '[]');
    registrations.push(formData);
    localStorage.setItem('registrations', JSON.stringify(registrations));
    
    document.getElementById('confirmationModal').classList.remove('hidden');
    document.getElementById('confirmationModal').classList.add('flex');
    this.reset();
});

// Smooth scrolling
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function(e) {
        e.preventDefault();
        const target = document.querySelector(this.getAttribute('href'));
        if (target) {
            window.scrollTo({
                top: target.offsetTop - 80,
                behavior: 'smooth'
            });
        }
    });
});

// Initialize
document.addEventListener('DOMContentLoaded', function() {
    updateCountdown();
    setInterval(updateCountdown, 1000);
});