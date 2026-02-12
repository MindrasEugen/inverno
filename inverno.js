const snowContainer = document.querySelector('.snow');

    function createSnowflake() {
        const snowflake = document.createElement('div');
        snowflake.classList.add('snowflake');
        snowflake.textContent = '❄';

        // Posizione orizzontale casuale
        snowflake.style.left = Math.random() * 100 + 'vw';

        // Dimensione casuale
        const size = Math.random() * 12 + 8;
        snowflake.style.fontSize = size + 'px';

        // Durata caduta casuale
        snowflake.style.animationDuration = (Math.random() * 4 + 4) + 's';

        // Oscillazione (vento) casuale
        snowflake.style.animationDelay = Math.random() * 2 + 's';
        snowflake.style.setProperty('--drift', Math.random() * 80 + 'px');

        // Aggiungi fiocco
        snowContainer.appendChild(snowflake);

        // Rimuovi dopo la caduta
        setTimeout(() => {
            snowflake.remove();
        }, 9000);
    }

    // Neve più fitta: un fiocco ogni 80 ms
    setInterval(createSnowflake, 40);