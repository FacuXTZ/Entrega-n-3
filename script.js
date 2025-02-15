document.addEventListener('DOMContentLoaded', function() {
    var bars = document.querySelector('.bars');
    var navBar = document.querySelector('.nav-bar');

    bars.onclick = function() {
        navBar.classList.toggle('active');
    };
});