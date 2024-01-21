document.getElementById('night-mode-toggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.style.backgroundColor = '#333';
        document.body.style.color = '#fff';
    } else {
        document.body.style.backgroundColor = '#f0f0f0';
        document.body.style.color = '#333';
    }
});

document.getElementById('large-text-toggle').addEventListener('change', function() {
    if (this.checked) {
        document.body.style.fontSize = '18px';
    } else {
        document.body.style.fontSize = '16px';
    }
});
