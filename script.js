document.addEventListener('DOMContentLoaded', () => {

    // === WYBÓR JĘZYKA ===
    const langSwitcherPL = document.getElementById('lang-pl');
    const langSwitcherEN = document.getElementById('lang-en');

    const translatePage = (lang) => {
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                // Jeśli element to modal content, używamy innerHTML
                if (key === 'aboutContent') {
                    el.innerHTML = translations[lang][key];
                } else {
                    el.textContent = translations[lang][key];
                }
            }
        });
        document.documentElement.lang = lang;
        document.title = translations[lang].pageTitle;

        if (lang === 'pl') {
            langSwitcherPL.classList.add('active');
            langSwitcherEN.classList.remove('active');
        } else {
            langSwitcherEN.classList.add('active');
            langSwitcherPL.classList.remove('active');
        }
    };

    const getInitialLanguage = () => {
        const savedLang = localStorage.getItem('language');
        if (savedLang) return savedLang;
        const browserLang = navigator.language || navigator.userLanguage;
        return browserLang.startsWith('pl') ? 'pl' : 'en';
    };

    langSwitcherPL.addEventListener('click', () => {
        localStorage.setItem('language', 'pl');
        translatePage('pl');
        initializeWipeCountdown('pl');
    });

    langSwitcherEN.addEventListener('click', () => {
        localStorage.setItem('language', 'en');
        translatePage('en');
        initializeWipeCountdown('en');
    });

    // === MODALE ===

    // Modal Zasad
    const rulesModal = document.getElementById('rules-modal');
    const openRulesBtn = document.querySelector('a[href="#rules"]');
    const closeRulesBtn = document.getElementById('close-rules-modal-btn');
    const rulesList = document.getElementById('rules-list');

    const openRulesModal = () => {
        const currentLang = document.documentElement.lang;
        const rules = translations[currentLang].rules;
        rulesList.innerHTML = '';
        rules.forEach(ruleText => {
            const li = document.createElement('li');
            li.textContent = ruleText;
            rulesList.appendChild(li);
        });
        rulesModal.classList.remove('hidden');
    };
    const closeRulesModal = () => rulesModal.classList.add('hidden');

    openRulesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openRulesModal();
    });
    closeRulesBtn.addEventListener('click', closeRulesModal);

    // Modal "O Serwerze"
    const aboutModal = document.getElementById('about-modal');
    const openAboutBtn = document.querySelector('a[href="#about"]');
    const closeAboutBtn = document.getElementById('close-about-modal-btn');
    const aboutContent = document.getElementById('about-content');

    const openAboutModal = () => {
        const currentLang = document.documentElement.lang;
        aboutContent.innerHTML = translations[currentLang].aboutContent;
        aboutModal.classList.remove('hidden');
    };
    const closeAboutModal = () => aboutModal.classList.add('hidden');

    openAboutBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openAboutModal();
    });
    closeAboutBtn.addEventListener('click', closeAboutModal);

    // Zamykanie modali po kliknięciu na tło lub Esc
    document.addEventListener('click', (e) => {
        if (e.target === rulesModal) closeRulesModal();
        if (e.target === aboutModal) closeAboutModal();
    });
    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape") {
            if (!rulesModal.classList.contains('hidden')) closeRulesModal();
            if (!aboutModal.classList.contains('hidden')) closeAboutModal();
        }
    });

    // === INICJALIZACJA STRONY ===
    const initialLang = getInitialLanguage();
    translatePage(initialLang);
    initializeWipeCountdown(initialLang);

});
