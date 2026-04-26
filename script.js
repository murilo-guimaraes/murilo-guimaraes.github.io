const modeBtn = document.getElementById('mode-btn');
const icon = modeBtn.querySelector('i');
const html = document.documentElement;

// Verifica se o usuário já tinha uma preferência salva
if (localStorage.getItem('theme') === 'light') {
    html.classList.add('light-mode');
    icon.classList.replace('fa-moon', 'fa-sun');
}

modeBtn.addEventListener('click', () => {
    // Alterna a classe no HTML
    html.classList.toggle('light-mode');
    
    // Troca o ícone e salva a preferência
    if (html.classList.contains('light-mode')) {
        icon.classList.replace('fa-moon', 'fa-sun');
        localStorage.setItem('theme', 'light');
    } else {
        icon.classList.replace('fa-sun', 'fa-moon');
        localStorage.setItem('theme', 'dark');
    }
});