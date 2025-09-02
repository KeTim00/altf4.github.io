document.addEventListener('DOMContentLoaded', () => {

    // === SEKCJA TŁUMACZEŃ (I18N) ===
    const translations = {
        pl: {
            // Meta
            pageTitle: "ALT+F4 PvE — Buduj. Odkrywaj. Triumfujcie Razem.",
            // Nawigacja
            navRules: "Zasady",
            navEvents: "Wydarzenia",
            navGallery: "Galeria",
            connectButton: "Połącz z Serwerem",
            // Hero
            heroTitle: "Buduj. Odkrywaj.",
            heroSubtitle: "Triumfujcie Razem.",
            heroDescription: "Dołącz do społeczności, gdzie kreatywność i współpraca tworzą legendy. Na ALT+F4 PvE nie walczysz o przetrwanie – walczysz o chwałę.",
            // Pasek statystyk
            statPlayers: "Graczy Online",
            statGameMode: "Tryb Gry",
            wipeLabel: "Do Następnego Wipe",
            wipeLabelServer: "Do następnego: Wipe Serwera",
            wipeLabelForce: "Do następnego: Force Wipe",
            wipeInProgress: "WIPE W TOKU!",
            wipeRefresh: "Odśwież stronę",
            statAdmins: "Administratorzy",
            // Wydarzenia
            eventsTitleSpan: "Wydarzenia",
            eventsTitle: "Serwerowe",
            event1Title: "Raidowe Bazy NPC",
            event1Desc: "Sprawdź swoje umiejętności bojowe i fortyfikacyjne, odpierając fale wrogów atakujących specjalnie przygotowane bazy.",
            event2Title: "Wspólne Zrzuty",
            event2Desc: "Połącz siły z innymi graczami, aby przejąć kontrolę nad zablokowanymi skrzyniami, Bradleyem i Helikopterem Patrolowym.",
            event3Title: "Konkursy Budowlane",
            event3Desc: "Pokaż swój kunszt architektoniczny w cotygodniowych konkursach i wygrywaj unikalne nagrody za najbardziej kreatywne projekty.",
            // Galeria
            galleryTitleSpan: "Galeria",
            galleryTitle: "Społeczności",
            galleryDesc: "Podziwiaj niesamowite konstrukcje stworzone przez naszych graczy.",
            // Stopka
            
            footerText: "© 2025 ALT+F4 PvE. Serwer stworzony przez graczy, dla graczy.",
            // Modal zasad
                     rulesModalTitle: "Prawa Dżungli",
                    rulesModalFooter: "Łamanie zasad to nie exploit, to styl życia. Po prostu nie daj się złapać, cwelu.",
                rules: [
                    "Jesteś nieśmiertelny? Cudownie. Twoja baza już nie jest. Nie próbuj być mądrzejszy ode mnie.",
                    "Twój loot to nasz loot. Zamknij bazę lepiej niż swoją dupę, bo ją okradniemy. Vanilla, co nie?",
                    "Griefing to nasz narodowy sport. Zablokujesz monument? Zabetonujemy ci spawn. Zagrajmy.",
                    "Cheaty? Eksploity? To nie cheat, to 'nieudokumentowana funkcja'. Złapiemy cię = dostaniesz medal za kreatywność (i perma).",
                    "Masz problem? Płaczesz? Otwórz ticketa, a nasz admin (jeśli w ogóle istnieje) może cię wyśmieje za tydzień."
                        ]
        },
        en: {
            // Meta
            pageTitle: "ALT+F4 PvE — Build. Explore. Triumph Together.",
            // Navigation
            navRules: "Rules",
            navEvents: "Events",
            navGallery: "Gallery",
            connectButton: "Connect to Server",
            // Hero
            heroTitle: "Build. Explore.",
            heroSubtitle: "Triumph Together.",
            heroDescription: "Join a community where creativity and cooperation forge legends. On ALT+F4 PvE, you don't fight to survive – you fight for glory.",
            // Stats Bar
            statPlayers: "Players Online",
            statGameMode: "Game Mode",
            wipeLabel: "Until Next Wipe",
            wipeLabelServer: "Next: Server Wipe",
            wipeLabelForce: "Next: Force Wipe",
            wipeInProgress: "WIPE IN PROGRESS!",
            wipeRefresh: "Refresh the page",
            statAdmins: "Administrators",
            // Events
            eventsTitleSpan: "Server",
            eventsTitle: "Events",
            event1Title: "Raidable NPC Bases",
            event1Desc: "Test your combat and fortification skills by fending off waves of enemies attacking specially prepared bases.",
            event2Title: "Collaborative Drops",
            event2Desc: "Team up with other players to take control of locked crates, the Bradley APC, and the Patrol Helicopter.",
            event3Title: "Building Contests",
            event3Desc: "Show off your architectural skills in weekly contests and win unique prizes for the most creative designs.",
            // Gallery
            galleryTitleSpan: "Community",
            galleryTitle: "Gallery",
            galleryDesc: "Admire the incredible structures created by our players.",
            // Footer
            footerText: "© 2025 ALT+F4 PvE. A server made by players, for players.",
            // Rules Modal
            rulesModalTitle: "Law of the Land (Read It And Weep)",
            rulesModalFooter: "Breaking rules isn't an exploit, it's a lifestyle. Just don't get caught, you mug.",
            rules: [
                "You're unkillable? Wonderful. Your base isn't. Don't try to be smarter than me.",
                "Your loot is our loot. Lock your base tighter than your asshole, or we'll rob you blind. Vanilla, innit?",
                "Griefing is our national sport. Block a monument? We'll concrete your spawn. Let's play.",
                "Cheats? Exploits? It's not a cheat, it's an 'undocumented feature'. Get caught = get a medal for creativity (and a perma).",
                "Got a problem? Crying? Open a ticket and our admin (if he even exists) might laugh at you in a week."
            ]
        }
    };

    const langSwitcherPL = document.getElementById('lang-pl');
    const langSwitcherEN = document.getElementById('lang-en');

    const translatePage = (lang) => {
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (translations[lang] && translations[lang][key]) {
                el.textContent = translations[lang][key];
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
        if (savedLang) {
            return savedLang;
        }
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

    // === SEKCJA ANIMACJI ===
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('is-visible');
            }
        });
    }, { threshold: 0.1 });
    document.querySelectorAll('.animate-on-scroll').forEach(el => observer.observe(el));

    // === SEKCJA STATYSTYK SERWERA ===
    const adminSteamIDs = ['76561198000000001', '76561198000000002'];
    async function updateServerStats() {
        const serverId = "35518748";
        const apiUrl = `https://api.battlemetrics.com/servers/${serverId}?include=player`;
        try {
            const response = await fetch(apiUrl);
            if (!response.ok) throw new Error(`Błąd sieci: ${response.status}`);
            const data = await response.json();
            if (data && data.data && data.data.attributes) {
                const players = data.data.attributes.players;
                const maxPlayers = data.data.attributes.maxPlayers;
                const playersOnlineEl = document.getElementById('players-online');
                if (playersOnlineEl) playersOnlineEl.textContent = `${players}/${maxPlayers}`;
            } else {
                throw new Error("Otrzymano nieprawidłowy format danych z API.");
            }
            const adminStatusEl = document.getElementById('admin-status');
            let isAdminOnline = false;
            if (data.included && data.included.length > 0) {
                const onlinePlayerSteamIDs = data.included.filter(item => item.type === 'player').map(player => player.attributes.id);
                isAdminOnline = adminSteamIDs.some(adminId => onlinePlayerSteamIDs.includes(adminId));
            }
            if (adminStatusEl) {
                const currentLang = document.documentElement.lang || 'pl';
                adminStatusEl.textContent = isAdminOnline ? (currentLang === 'pl' ? "Dostępni" : "Available") : "Offline";
                adminStatusEl.classList.toggle('online', isAdminOnline);
                adminStatusEl.classList.toggle('offline', !isAdminOnline);
            }
        } catch (error) {
            console.error("Błąd podczas pobierania danych z BattleMetrics:", error);
            document.getElementById('players-online').textContent = "Offline";
            document.getElementById('admin-status').textContent = "Błąd";
        }
    }
    updateServerStats();
    setInterval(updateServerStats, 60000);

    // === ZAAWANSOWANA SEKCJA LICZNIKA WIPE ===
    let countdownInterval;
    function initializeWipeCountdown(lang) {
        if (countdownInterval) clearInterval(countdownInterval);

        const wipeElement = document.getElementById('next-wipe');
        const wipeTypeElement = document.getElementById('wipe-type-label');

        const updateCountdown = () => {
            const now = new Date();
            const nextForceWipe = getNextForceWipe(now);
            const nextBiWeeklyWipe = getNextBiWeeklyWipe(now);
            let finalWipeDate, wipeTypeKey;

            if (nextForceWipe < nextBiWeeklyWipe) {
                finalWipeDate = nextForceWipe;
                wipeTypeKey = 'wipeLabelForce';
            } else {
                finalWipeDate = nextBiWeeklyWipe;
                wipeTypeKey = 'wipeLabelServer';
            }
            
            const diff = finalWipeDate - now;

            if (diff <= 0) {
                wipeElement.textContent = translations[lang].wipeInProgress;
                wipeTypeElement.textContent = translations[lang].wipeRefresh;
                clearInterval(countdownInterval);
                return;
            }

            const d = Math.floor(diff / (1000 * 60 * 60 * 24));
            const h = Math.floor((diff % (1000 * 60 * 60 * 24)) / (1000 * 60 * 60));
            const m = Math.floor((diff % (1000 * 60 * 60)) / (1000 * 60));
            const s = Math.floor((diff % (1000 * 60)) / 1000);

            wipeElement.textContent = `${d} ${lang === 'pl' ? 'dni' : 'days'} ${h}h ${m}m ${s}s`;
            wipeTypeElement.textContent = translations[lang][wipeTypeKey];
        };

        const getNextForceWipe = (now) => {
            const wipeTimeUTC = { hour: 18, minute: 0, second: 0 };
            let year = now.getUTCFullYear();
            let month = now.getUTCMonth();
            const findFirstThursday = (y, m) => {
                const date = new Date(Date.UTC(y, m, 1, wipeTimeUTC.hour, wipeTimeUTC.minute, wipeTimeUTC.second));
                while (date.getUTCDay() !== 4) { date.setUTCDate(date.getUTCDate() + 1); }
                return date;
            };
            let forceWipeDate = findFirstThursday(year, month);
            if (forceWipeDate < now) {
                month++;
                if (month > 11) { month = 0; year++; }
                forceWipeDate = findFirstThursday(year, month);
            }
            return forceWipeDate;
        };
        const getNextBiWeeklyWipe = (now) => {
            const anchorDate = getNextForceWipe(new Date('2025-01-01T00:00:00Z'));
            while (anchorDate < now) {
                anchorDate.setUTCDate(anchorDate.getUTCDate() + 14);
            }
            return anchorDate;
        };

        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }
    
    // === LOGIKA OKNA MODALNEGO ZASAD ===
    const rulesModal = document.getElementById('rules-modal');
    const openRulesBtn = document.querySelector('a[href="#rules"]');
    const closeRulesBtn = document.getElementById('close-modal-btn');
    const rulesList = document.getElementById('rules-list');

    const openModal = () => {
        const currentLang = document.documentElement.lang || 'pl';
        const rules = translations[currentLang].rules;
        
        rulesList.innerHTML = '';
        rules.forEach(ruleText => {
            const li = document.createElement('li');
            li.textContent = ruleText;
            rulesList.appendChild(li);
        });
        rulesModal.classList.remove('hidden');
    };

    const closeModal = () => {
        rulesModal.classList.add('hidden');
    };

    openRulesBtn.addEventListener('click', (e) => {
        e.preventDefault();
        openModal();
    });

    closeRulesBtn.addEventListener('click', closeModal);

    rulesModal.addEventListener('click', (e) => {
        if (e.target === rulesModal) {
            closeModal();
        }
    });

    document.addEventListener('keydown', (e) => {
        if (e.key === "Escape" && !rulesModal.classList.contains('hidden')) {
            closeModal();
        }
    });

    // Inicjalizacja strony
    const initialLang = getInitialLanguage();
    translatePage(initialLang);
    initializeWipeCountdown(initialLang);
});


