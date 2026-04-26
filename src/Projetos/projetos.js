document.addEventListener('DOMContentLoaded', () => {
    // --- 1. LÓGICA DE TEMA (SINCRONIZADA COM SCRIPT.JS) ---
    const themeBtn = document.getElementById('theme-toggle'); // ID do botão no HTML
    const html = document.documentElement;
    
    // Verifica preferência salva ao carregar
    if (localStorage.getItem('theme') === 'light') {
        html.classList.add('light-mode');
        updateThemeIcon(true);
    }

    themeBtn.addEventListener('click', () => {
        html.classList.toggle('light-mode');
        const isLight = html.classList.contains('light-mode');
        localStorage.setItem('theme', isLight ? 'light' : 'dark');
        updateThemeIcon(isLight);
    });

    function updateThemeIcon(isLight) {
        const icon = themeBtn.querySelector('i');
        if (isLight) {
            icon.classList.replace('fa-moon', 'fa-sun');
        } else {
            icon.classList.replace('fa-sun', 'fa-moon');
        }
    }

// --- 2. PROGRESSO ACADÊMICO (CORRIGIDO) ---
    const progressBar = document.getElementById('progressBar');
    const textPercentEl = document.getElementById('time-percent');
    const countEl = document.getElementById('project-count');

    // Datas exatas conforme sua memória: 09/02/2026 até 01/06/2028
    // Lembrete: No JS, Janeiro é 0, Fevereiro é 1, Junho é 5.
    const dataInicio = new Date(2026, 1, 9); 
    const dataFim = new Date(2028, 5, 1);
    const hoje = new Date();

    function updateAcademicProgress() {
        const totalJornada = dataFim - dataInicio;
        const decorrido = hoje - dataInicio;
        
        // Se 'decorrido' for negativo (antes de fev/2026), a % deve ser 0.
        // Se for maior que o total, deve ser 100.
        let percentual = Math.floor((decorrido / totalJornada) * 100);
        
        // Ajuste de segurança para não dar número negativo nem passar de 100
        if (percentual < 0) percentual = 0;
        if (percentual > 100) percentual = 100;

        if (progressBar && textPercentEl) {
            // Resetamos para 0 antes de animar (evita o bug de "voltar")
            progressBar.style.width = '0%';
            
            setTimeout(() => {
                progressBar.style.width = percentual + '%';
                textPercentEl.innerText = percentual + '%';
            }, 300);
        }

        // Contador de documentos (Exemplo: busca total de cards na página)
        if (countEl) {
            const totalDocs = document.querySelectorAll('.research-card').length;
            countEl.innerText = totalDocs;
        }
    }

    // --- 3. SISTEMA DE BUSCA E FILTROS ---
    const searchInput = document.getElementById('searchInput');
    const filterTags = document.querySelectorAll('.filter-tag');
    const researchCards = document.querySelectorAll('.research-card');

    function filterContent() {
        const query = searchInput.value.toLowerCase();
        const activeFilter = document.querySelector('.filter-tag.active').getAttribute('data-filter');

        researchCards.forEach(card => {
            const title = card.querySelector('.research-title').innerText.toLowerCase();
            const tags = card.querySelector('.research-tags').innerText.toLowerCase();
            const category = card.getAttribute('data-category');

            const matchesSearch = title.includes(query) || tags.includes(query);
            const matchesFilter = activeFilter === 'all' || category === activeFilter;

            if (matchesSearch && matchesFilter) {
                card.style.display = 'flex';
                card.style.opacity = '1';
                card.style.transform = 'translateY(0)';
            } else {
                card.style.display = 'none';
                card.style.opacity = '0';
            }
        });
    }

    // Eventos para filtros
    filterTags.forEach(tag => {
        tag.addEventListener('click', () => {
            filterTags.forEach(t => t.classList.remove('active'));
            tag.classList.add('active');
            filterContent();
        });
    });

    // Evento para busca
    if (searchInput) {
        searchInput.addEventListener('input', filterContent);
    }

    // Inicialização
    updateAcademicProgress();
});