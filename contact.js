window.onload = window.onresize = function() {
    var form = document.querySelector('#contact form');
    var maxWidth = window.innerWidth * 0.8; // Set max width to 80% of window width
    form.style.maxWidth = maxWidth + 'px';
};