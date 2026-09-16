// Fitur Sederhana: Dark Mode Toggle
const darkToggle = document.getElementById('darkToggle');

darkToggle.addEventListener('click', () => {
    document.body.classList.toggle('dark-theme');
    
    if (document.body.classList.contains('dark-theme')) {
        document.body.style.backgroundColor = '#121212';
        document.body.style.color = '#ffffff';
    } else {
        document.body.style.backgroundColor = '#f4f6f9';
        document.body.style.color = '#333333';
    }
});