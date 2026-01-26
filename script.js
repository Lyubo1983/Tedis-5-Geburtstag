// Countdown Timer  
function updateCountdown() {  
    const targetDate = new Date('2025-02-22T11:30:00').getTime();  
    const now = new Date().getTime();  
    const difference = targetDate - now;  
  
    if (difference > 0) {  
        const days = Math.floor(difference / (1000 * 60 * 60 * 24));  
        const hours = Math.floor((difference % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));  
        const minutes = Math.floor((difference % (1000 * 60 * 60)) / (1000 * 60));  
        const seconds = Math.floor((difference % (1000 * 60)) / 1000);  
  
        document.getElementById('countdown').innerHTML = `  
            <div class="countdown-item">  
                <span class="countdown-number">${days}</span>  
                <span class="countdown-label">Tage</span>  
            </div>  
            <div class="countdown-item">  
                <span class="countdown-number">${hours}</span>  
                <span class="countdown-label">Std</span>  
            </div>  
            <div class="countdown-item">  
                <span class="countdown-number">${minutes}</span>  
                <span class="countdown-label">Min</span>  
            </div>  
            <div class="countdown-item">  
                <span class="countdown-number">${seconds}</span>  
                <span class="countdown-label">Sek</span>  
            </div>  
        `;  
    } else {  
        document.getElementById('countdown').innerHTML = `  
            <div style="font-size: 2rem; color: white; text-align: center; padding: 20px;">  
                🎉 PARTY TIME! 🎉  
            </div>  
        `;  
    }  
}  
  
// Update countdown every second  
setInterval(updateCountdown, 1000);  
  
// Initial call  
updateCountdown();  
  
// Add smooth scroll behavior for better UX  
document.addEventListener('DOMContentLoaded', function() {  
    // Add entrance animations  
    const cards = document.querySelectorAll('.card');  
      
    const observer = new IntersectionObserver((entries) => {  
        entries.forEach(entry => {  
            if (entry.isIntersecting) {  
                entry.target.style.opacity = '1';  
                entry.target.style.transform = 'translateY(0)';  
            }  
        });  
    });  
  
    cards.forEach(card => {  
        card.style.opacity = '0';  
        card.style.transform = 'translateY(20px)';  
        card.style.transition = 'opacity 0.6s ease, transform 0.6s ease';  
        observer.observe(card);  
    });  
  
    // Fun click effects  
    document.querySelectorAll('.activity-bubble').forEach(bubble => {  
        bubble.addEventListener('click', function() {  
            this.style.transform = 'scale(0.95)';  
            setTimeout(() => {  
                this.style.transform = 'scale(1.05)';  
            }, 100);  
            setTimeout(() => {  
                this.style.transform = 'scale(1)';  
            }, 200);  
        });  
    });  
});  
  
// Add sparkle effect on scroll  
window.addEventListener('scroll', () => {  
    const stars = document.querySelector('.stars');  
    if (stars) {  
        stars.style.transform = `rotate(${window.scrollY * 0.1}deg)`;  
    }  
});  
  
// Add festive console message  
console.log(`  
🎉 WILLKOMMEN ZU TEDIS PARTY! 🎉  
      
    ⭐ Gebaut mit viel Liebe ⭐  
    🎈 Für einen besonderen Tag 🎈  
    🎂 Happy 5th Birthday Tedi! 🎂  
      
`);  
