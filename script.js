document.addEventListener('DOMContentLoaded', () => {

    // === SEKCJA TŁUMACZEŃ (I18N) ===
    const translations = {
        pl: {
            // Meta
            pageTitle: "ALT+F4 PvE — Buduj. Odkrywaj. Triumfujcie Razem.",
            // Nawigacja
            navAbout: "O Serwerze",
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
            rulesModalTitle: "Zasady Serwera",
            rulesModalFooter: "Nieznajomość zasad nie zwalnia z ich przestrzegania.",
            rules: [
                "Graczy nie da się zabić dzięki pluginom. Nie próbuj tego obchodzić- patrz punkt 4.",
                "Twój loot, twoja sprawa. Trzymaj bazę zamkniętą i zabezpieczoną- gramy vanilla.",
                "Bez griefingu. Nie blokuj baz, monumentów ani surowców.",
                "Zero cheatów i exploitów. Złapiemy Cię = perm wipe.",
                "Masz problem? Otwórz ticketa na Discordzie- admin odpisze."
            ],
            // Tłumaczenia - Modal "O serwerze"
            aboutModalTitle: "Co Nas Wyróżnia?",
            aboutContent: `
                <h3>🌳 Zaawansowany System Umiejętności (SkillTree)</h3>
                <p>Rozwijaj swoją postać w różnych dziedzinach, takich jak zbieractwo, walka i rzemiosło, aby stawać się silniejszym i odblokowywać nowe zdolności.</p>
                <h3>💥 Ekscytujące Eventy PvE</h3>
                <p>Dynamiczne wydarzenia pojawiają się na całej mapie, w tym Pociąg Pancerny, Konwój, Deszcze Meteorytów, Wraki Statków, a nawet Kosmiczne Zrzuty. Walcz z NPC i zdobywaj cenny loot!</p>
                <h3>🎯 Wyzwania dla Graczy</h3>
                <p><b>Raidowalne Bazy</b> – Atakuj bazy kontrolowane przez NPC o różnych poziomach trudności.<br><b>Rajdy NPC</b> – Uważaj! NPC mogą raidować bazy graczy, więc zawsze chroń swój dom.<br><b>Inteligentniejsze Boty</b> – Ulepszone NPC, które są twardsze i bardziej wymagające.</p>
                <h3>🎁 Nagrody i Udogodnienia (QoL)</h3>
                <p><b>Nagrody za Czas Gry</b> – Zdobywaj punkty podczas gry i wydawaj je w sklepie.<br><b>Zestawy Startowe</b> – Odbierz darmowe zestawy, aby szybko rozpocząć swoją przygodę.<br><b>Większe Stacki i Automatyzacja</b> – Ciesz się zwiększonymi stackami i automatycznym sortowaniem w piecach.</p>
                <h3>🎨 Wszystkie Skórki Odblokowane</h3>
                <p>Użyj komendy /skin, aby nałożyć dowolną skórkę na swoje przedmioty.</p>
                <h3>🔨 Narzędzie do Usuwania</h3>
                <p>Łatwo zarządzaj i przebudowuj swoją bazę.</p>
                <h3>✨ Unikalne Funkcje</h3>
                <p><b>Bazy Wodne</b> – Buduj swoją fortecę na otwartym morzu.<br><b>Uprawa Ganja</b> – Zostań rolnikiem i uprawiaj specjalne rośliny. 😉<br><b>Latający Dywan</b> – Zdobądź własny magiczny dywan i szybuj po niebie.<br><b>Własne Stacje Radiowe</b> – Odtwarzaj muzykę w swojej bazie lub pojeździe.</p>
            `
        },
        en: {
            // Meta
            pageTitle: "ALT+F4 PvE — Build. Explore. Triumph Together.",
            // Navigation
            navAbout: "About",
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
            rulesModalTitle: "Server Rules",
            rulesModalFooter: "Not knowing the rules does not exempt you from them.",
            rules: [
                "Players are unkillable by plugins. Don’t try to bypass it- see rule 4.",
                "Your loot, your problem. Keep your base locked and secured- vanilla style.",
                "No griefing. Don’t block bases, monuments, or resources.",
                "No cheating, no exploits. Caught once = perm wipe.",
                "Got a problem? Open a ticket on Discord- an admin will respond."
            ],
            // Tłumaczenia - Modal "O serwerze"
            aboutModalTitle: "What Makes Us Special?",
            aboutContent: `
                <h3>🌳 Advanced Skill System (SkillTree)</h3>
                <p>Level up your character in different areas such as gathering, combat, and crafting to grow stronger and unlock new abilities.</p>
                <h3>💥 Exciting PvE Events</h3>
                <p>Dynamic events spawn across the map, including the Armored Train, Convoy, Meteor Showers, Shipwrecks, and even Cosmic Drops. Fight NPCs and claim valuable loot!</p>
                <h3>🎯 Player Challenges</h3>
                <p><b>Raidable Bases</b> – Attack NPC-controlled bases with varying difficulty levels.<br><b>NPC Raids</b> – Beware! NPCs can raid player bases, so always protect your home.<br><b>Smarter Bots</b> – Upgraded NPCs that are tougher and more challenging.</p>
                <h3>🎁 Rewards & Quality of Life (QoL)</h3>
                <p><b>Playtime Rewards</b> – Earn points while playing and spend them in the shop.<br><b>Starter Kits</b> – Grab free kits to kickstart your adventure.<br><b>Bigger Stacks & Automation</b> – Enjoy increased stack sizes and automatic furnace splitting.</p>
                <h3>🎨 All Skins Unlocked</h3>
                <p>Use /skin to apply any skin to your items.</p>
                <h3>🔨 Remover Tool</h3>
                <p>Easily manage and redesign your base.</p>
                <h3>✨ Unique Features</h3>
                <p><b>Water Bases</b> – Build your fortress on the open sea.<br><b>Ganja Farming</b> – Become a farmer and grow special plants. 😉<br><b>Flying Carpet</b> – Get your own magic carpet and soar through the skies.<br><b>Custom Radio Stations</b> – Play music inside your base or vehicle.</p>
            `
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

    // === SEKCJA ANIMACJI ===
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) entry.target.classList.add('is-visible');
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
            if (!response.ok) throw new Error(`Network response was not ok: ${response.status}`);
            const data = await response.json();

            const playersOnlineEl = document.getElementById('players-online');
            if (data?.data?.attributes) {
                playersOnlineEl.textContent = `${data.data.attributes.players}/${data.data.attributes.maxPlayers}`;
            } else {
                throw new Error("Invalid API data structure for player count.");
            }

            const adminStatusEl = document.getElementById('admin-status');
            let isAdminOnline = false;
            if (data.included && data.included.length > 0) {
                const onlinePlayerSteamIDs = data.included.filter(item => item.type === 'player').map(player => player.attributes.id);
                isAdminOnline = adminSteamIDs.some(adminId => onlinePlayerSteamIDs.includes(adminId));
            }
            if (adminStatusEl) {
                const currentLang = document.documentElement.lang;
                adminStatusEl.textContent = isAdminOnline ? (currentLang === 'pl' ? "Dostępni" : "Available") : "Offline";
                adminStatusEl.classList.toggle('online', isAdminOnline);
                adminStatusEl.classList.toggle('offline', !isAdminOnline);
            }
        } catch (error) {
            console.error("Error fetching from BattleMetrics:", error);
            document.getElementById('players-online').textContent = "Offline";
            document.getElementById('admin-status').textContent = "Error";
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
            let year = now.getUTCFullYear(), month = now.getUTCMonth();
            const findFirstThursday = (y, m) => {
                const date = new Date(Date.UTC(y, m, 1, wipeTimeUTC.hour, wipeTimeUTC.minute, wipeTimeUTC.second));
                while (date.getUTCDay() !== 4) date.setUTCDate(date.getUTCDate() + 1);
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
            while (anchorDate < now) anchorDate.setUTCDate(anchorDate.getUTCDate() + 14);
            return anchorDate;
        };

        updateCountdown();
        countdownInterval = setInterval(updateCountdown, 1000);
    }
    
    // === LOGIKA OKIEN MODALNYCH ===
    // 1. Modal Zasad
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

    // 2. Modal "O Serwerze"
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

    // Zamykanie obu modali po kliknięciu na tło lub klawiszem Escape
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
    // Inicjalizacja strony
    const initialLang = getInitialLanguage();
    translatePage(initialLang);
    initializeWipeCountdown(initialLang);
});
