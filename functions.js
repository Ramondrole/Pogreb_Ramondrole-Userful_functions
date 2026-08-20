const functionsTranslations = {
    ru: {
        title: "Полезные функции",
        bypass: "Обходка",
        fractionCalc: "Калькулятор для дробей",
        calculator: "Калькулятор",
        systemsCalc: "Калькулятор систем",
        converter: "Конвертер величин",
        about: "Обо мне",
        games: "Наши игры",
        home: "На главную"
    },
    en: {
        title: "Useful Functions",
        bypass: "Bypass Tool",
        fractionCalc: "Fraction Calculator",
        calculator: "Calculator",
        systemsCalc: "Number Systems Calculator",
        converter: "Unit Converter",
        about: "About me",
        games: "Our games",
        home: "Home"
    },
    de: {
        title: "Nützliche Funktionen",
        bypass: "Umgehungstool",
        fractionCalc: "Bruchrechner",
        calculator: "Taschenrechner",
        systemsCalc: "Zahlensystem-Rechner",
        converter: "Einheitenumrechner",
        about: "Über mich",
        games: "Unsere Spiele",
        home: "Startseite"
    }
};

let currentLang = localStorage.getItem('functions_language') || 'ru';

function t(key) {
    return functionsTranslations[currentLang]?.[key] || functionsTranslations.ru[key];
}

function updateFunctionsUILanguage() {
    const elements = ['title'];
    elements.forEach(key => {
        const el = document.getElementById('pageTitle');
        if (el) el.textContent = t(key);
    });
    
    const langBtn = document.getElementById('langBtn');
    if (langBtn) {
        const flags = { ru: '🌐 RU', en: '🌐 EN', de: '🌐 DE' };
        langBtn.innerHTML = flags[currentLang];
    }
    
    document.querySelectorAll('.nav-links a').forEach((link, idx) => {
        const keys = ['about', 'games', 'home'];
        if (idx < keys.length) link.textContent = t(keys[idx]);
    });
    
    const cards = document.querySelectorAll('.function-card');
    const cardKeys = ['bypass', 'fractionCalc', 'calculator', 'systemsCalc', 'converter'];
    const descTranslations = {
        ru: {
            bypass: "Инструмент для обхода ограничений",
            fractionCalc: "Сложение, вычитание, умножение и деление дробей",
            calculator: "Обычный калькулятор для базовых операций",
            systemsCalc: "Перевод чисел между системами счисления",
            converter: "Перевод единиц измерения"
        },
        en: {
            bypass: "Tool to bypass restrictions",
            fractionCalc: "Add, subtract, multiply and divide fractions",
            calculator: "Basic calculator for simple operations",
            systemsCalc: "Convert numbers between number systems",
            converter: "Convert units of measurement"
        },
        de: {
            bypass: "Werkzeug zum Umgehen von Einschränkungen",
            fractionCalc: "Brüche addieren, subtrahieren, multiplizieren und dividieren",
            calculator: "Einfacher Taschenrechner für grundlegende Operationen",
            systemsCalc: "Zahlen zwischen Zahlensystemen umwandeln",
            converter: "Maßeinheiten umrechnen"
        }
    };
    
    cards.forEach((card, idx) => {
        if (idx < cardKeys.length) {
            const titleEl = card.querySelector('h3');
            const descEl = card.querySelector('p');
            if (titleEl) titleEl.textContent = t(cardKeys[idx]);
            if (descEl) {
                descEl.textContent = descTranslations[currentLang]?.[cardKeys[idx]] || descTranslations.ru[cardKeys[idx]];
            }
        }
    });
}

function changeLanguage(lang) {
    currentLang = lang;
    localStorage.setItem('functions_language', lang);
    updateFunctionsUILanguage();
}

document.querySelectorAll('.lang-dropdown a').forEach(item => {
    item.addEventListener('click', (e) => {
        e.preventDefault();
        const lang = item.getAttribute('data-lang');
        if (lang) changeLanguage(lang);
    });
});

updateFunctionsUILanguage();