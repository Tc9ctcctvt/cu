document.addEventListener('DOMContentLoaded', function() {
    const confettiBtn = document.getElementById('confetti-btn');
    const birthdaySong = document.getElementById('birthday-song');
    const photo = document.getElementById('birthday-photo');
    
    // Efecto de confeti y música
    confettiBtn.addEventListener('click', function() {
        // Confeti
        confetti({
            particleCount: 150,
            spread: 70,
            origin: { y: 0.6 }
        });
        
        // Reproducir música
        if (birthdaySong.paused) {
            birthdaySong.play();
            confettiBtn.textContent = "¡Que viva la fiesta!";
        } else {
            birthdaySong.pause();
            birthdaySong.currentTime = 0;
            confettiBtn.textContent = "¡Haz click para celebrar!";
        }
    });
    
    // Efecto flotante para la foto
    photo.classList.add('floating');
    
    // Mensaje especial en la consola
    console.log("%c¡Feliz Cumpleaños Hermanitas!", "color: #d23369; font-size: 20px; font-weight: bold;");
    console.log("%cQue pasen un día maravilloso lleno de alegría y amor.", "color: #ff6b9d; font-size: 14px;");
});