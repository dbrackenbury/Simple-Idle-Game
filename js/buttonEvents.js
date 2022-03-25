const idleButton1 = document.getElementById('idleButton1');
const idleButton2 = document.getElementById('idleButton2');

/* Idle Upgrade Buttons */
/* i = milliseconds per tick ( 1000 = 1 second ) */
idleButton1.addEventListener('click', function() {
    idleCostCheck(100, 1000)
})

idleButton2.addEventListener('click', function() {
    idleCostCheck(1000, 100)
})

