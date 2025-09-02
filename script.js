document.addEventListener('DOMContentLoaded', () => {

    // === TŁUMACZENIA ===
    const translations = {
        pl: {
            pageTitle: "ALT+F4 PvE — Buduj. Odkrywaj. Triumfujcie Razem.",
            navAbout: "O Serwerze",
            navRules: "Zasady",
            navEvents: "Wydarzenia",
            navGallery: "Galeria",
            connectButton: "Połącz z Serwerem",
            heroTitle: "Buduj. Odkrywaj.",
            heroSubtitle: "Triumfujcie Razem.",
            heroDescription: "Dołącz do społeczności, gdzie kreatywność i współpraca tworzą legendy. Na ALT+F4 PvE nie walczysz o przetrwanie – walczysz o chwałę.",
            statPlayers: "Graczy Online",
            statGameMode: "Tryb Gry",
            wipeLabelServer: "Do następnego: Wipe Serwera",
            wipeLabelForce: "Do następnego: Force Wipe",
            wipeInProgress: "WIPE W TOKU!",
            wipeRefresh: "Odśwież stronę",
            statAdmins: "Administratorzy",
            eventsTitleSpan: "Wydarzenia",
            eventsTitle: "Serwerowe",
            event1Title: "Raidowe Bazy NPC",
            event1Desc: "Sprawdź swoje umiejętności bojowe i fortyfikacyjne, odpierając fale wrogów atakujących specjalnie przygotowane bazy.",
            event2Title: "Wspólne Zrzuty",
            event2Desc: "Połącz siły z innymi graczami, aby przejąć kontrolę nad zablokowanymi skrzyniami, Bradleyem i Helikopterem Patrolowym.",
            event3Title: "Konkursy Budowlane",
            event3Desc: "Pokaż swój kunszt architektoniczny w cotygodniowych konkursach i wygrywaj unikalne nagrody za najbardziej kreatywne projekty.",
            galleryTitleSpan: "Galeria",
            galleryTitle: "Społeczności",
            galleryDesc: "Podziwiaj niesamowite konstrukcje stworzone przez naszych graczy.",
            footerText: "© 2025 ALT+F4 PvE. Serwer stworzony przez graczy, dla graczy.",
            rulesModalTitle: "Zasady Serwera",
            rulesModalFooter: "Nieznajomość zasad nie zwalnia z ich przestrzegania.",
            rules: [
                "Graczy nie da się zabić dzięki pluginom. Nie próbuj tego obchodzić- patrz punkt 4.",
                "Twój loot, twoja sprawa. Trzymaj bazę zamkniętą i zabezpieczoną- gramy vanilla.",
                "Bez griefingu. Nie blokuj baz, monumentów ani surowców.",
                "Zero cheatów i exploitów. Złapiemy Cię = perm wipe.",
                "Masz problem? Otwórz ticketa na Discordzie- admin odpisze."
            ],
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
            pageTitle: "ALT+F4 PvE — Build. Explore. Triumph Together.",
            navAbout: "About",
            navRules: "Rules",
            navEvents: "Events",
            navGallery: "Gallery",
            connectButton: "Connect to Server",
            heroTitle: "Build. Explore.",
            heroSubtitle: "Triumph Together.",
            heroDescription: "Join a community where creativity and cooperation forge legends. On ALT+F4 PvE, you don't fight to survive – you fight for glory.",
            statPlayers: "Players Online",
            statGameMode: "Game Mode",
            wipeLabelServer: "Next: Server Wipe",
            wipeLabelForce: "Next: Force Wipe",
            wipeInProgress: "WIPE IN PROGRESS!",
            wipeRefresh: "Refresh the page",
            statAdmins: "Administrators",
            eventsTitleSpan: "Server",
            eventsTitle: "Events",
            event1Title: "Raidable NPC Bases",
            event1Desc: "Test your combat and fortification skills by fending off waves of enemies attacking specially prepared bases.",
            event2Title: "Collaborative Drops",
            event2Desc: "Team up with other players to take control of locked crates, the Bradley APC, and the Patrol Helicopter.",
            event3Title: "Building Contests",
            event3Desc: "Show off your architectural skills in weekly contests and win unique prizes for the most creative designs.",
            galleryTitleSpan: "Community",
            galleryTitle: "Gallery",
            galleryDesc: "Admire the incredible structures created by our players.",
            footerText: "© 2025 ALT+F4 PvE. A server made by players, for players.",
            rulesModalTitle: "Server Rules",
            rulesModalFooter: "Not knowing the rules does not exempt you from them.",
            rules: [
                "Players are unkillable by plugins. Don’t try to bypass it- see rule 4.",
                "Your loot, your problem. Keep your base locked and secured- vanilla style.",
                "No griefing. Don’t block bases, monuments, or resources.",
                "No cheating, no exploits. Caught once = perm wipe.",
                "Got a problem? Open a ticket on Discord- an admin will respond."
            ],
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

    // === ELEMENTY HTML ===
    const langSwitcherPL = document.getElementById('lang-pl');
    const langSwitcherEN = document.getElementById('lang-en');
    const rulesModal = document.getElementById('rules-modal');
    const aboutModal = document.getElementById('about-modal');
    const closeRulesBtn = document.getElementById('close-rules-modal-btn');
    const closeAboutBtn = document.getElementById('close-about-modal-btn');
    const rulesList = document.getElementById('rules-list');
    const aboutContent = document.getElementById('about-content');

    let currentLang = 'pl';

    // === FUNKCJA TŁUMACZENIA ===
    function translatePage(lang) {
        currentLang = lang;
        document.querySelectorAll('[data-i18n-key]').forEach(el => {
            const key = el.getAttribute('data-i18n-key');
            if (key === 'aboutContent') {
                el.innerHTML = translations[lang][key];
            } else if (key === 'rulesModalTitle' || key === 'rulesModalFooter') {
                el.textContent = translations[lang][key];
            } else {
                el.textContent = translations[lang][key] || el.textContent;
            }
        });

        // Wstaw rules do listy
        if (rulesList) {
            rulesList.innerHTML = '';
            translations[lang].rules.forEach(rule => {
                const li = document.createElement('li');
                li.textContent = rule;
                rulesList.appendChild(li);
            });
        }

        document.title = translations[lang].pageTitle;
    }

    // === PRZEŁĄCZANIE JĘZYKA ===
    langSwitcherPL.addEventListener('click', () => translatePage('pl'));
    langSwitcherEN.addEventListener('click', () => translatePage('en'));

    // === MODALE ===
    function openModal(modal) {
        modal.classList.remove('hidden');
    }
    function closeModal(modal) {
        modal.classList.add('hidden');
    }

    // otwieranie modali (np. nav link) można dodać później
    closeRulesBtn.addEventListener('click', () => closeModal(rulesModal));
    closeAboutBtn.addEventListener('click', () => closeModal(aboutModal));

    // === STATYSTYKI (przykład statyczny) ===
    document.getElementById('players-online').textContent = "12";
    document.getElementById('admin-status').textContent = "Online";

    // === LICZNIK WIPE ===
    const nextWipeEl = document.getElementById('next-wipe');
    const wipeDate = new Date();
    wipeDate.setDate(wipeDate.getDate() + 7); // za 7 dni
    function updateWipeCountdown() {
        const now = new Date();
        const diff = wipeDate - now;
        if (diff <= 0) {
            nextWipeEl.textContent = translations[currentLang].wipeInProgress;
        } else {
            const days = Math.floor(diff / (1000*60*60*24));
            const hours = Math.floor((diff / (1000*60*60)) % 24);
            const minutes = Math.floor((diff / (1000*60)) % 60);
            nextWipeEl.textContent = `${days}d ${hours}h ${minutes}m`;
        }
    }
    updateWipeCountdown();
    setInterval(updateWipeCountdown, 60000);

    // === ANIMACJE PRZY SCROLLU ===
    const scrollElements = document.querySelectorAll('.animate-on-scroll');
    function handleScrollAnimation() {
        scrollElements.forEach(el => {
            const rect = el.getBoundingClientRect();
            if(rect.top < window.innerHeight - 100) {
                el.classList.add('visible');
            }
        });
    }
    window.addEventListener('scroll', handleScrollAnimation);
    handleScrollAnimation(); // od razu przy ładowaniu

    // === INICJALIZACJA ===
    translatePage(currentLang);

});
