const fs = require('fs');
const { JSDOM } = require('jsdom');

const html = fs.readFileSync('index.html', 'utf8');

// Use a regex that isn't prone to catastrophic backtracking or just use DOM parser
const dom = new JSDOM(html, { runScripts: "outside-only" });

const { window } = dom;
const document = window.document;

// Setup functions
const originalNavigate = (viewId) => {
    document.querySelectorAll('.view-section').forEach(section => {
        section.classList.remove('view-active');
    });

    document.getElementById('view-' + viewId).classList.add('view-active');

    document.querySelectorAll('.nav-btn').forEach(btn => {
        if(btn.dataset.target === viewId) {
            btn.classList.add('text-[#C5A059]');
            btn.classList.remove('text-slate-300');
        } else {
            btn.classList.remove('text-[#C5A059]');
            btn.classList.add('text-slate-300');
        }
    });

    const menu = document.getElementById('mobile-menu');
    const icon = document.getElementById('mobile-icon');
    if (!menu.classList.contains('translate-x-full')) {
        menu.classList.add('translate-x-full');
        icon.classList.remove('fa-xmark');
        icon.classList.add('fa-bars');
    }
};

const cachedSections = document.querySelectorAll('.view-section');
const cachedNavBtns = document.querySelectorAll('.nav-btn');
const cachedMenu = document.getElementById('mobile-menu');
const cachedIcon = document.getElementById('mobile-icon');

const optimizedNavigate = (viewId) => {
    cachedSections.forEach(section => {
        section.classList.remove('view-active');
    });

    document.getElementById('view-' + viewId).classList.add('view-active');

    cachedNavBtns.forEach(btn => {
        if(btn.dataset.target === viewId) {
            btn.classList.add('text-[#C5A059]');
            btn.classList.remove('text-slate-300');
        } else {
            btn.classList.remove('text-[#C5A059]');
            btn.classList.add('text-slate-300');
        }
    });

    if (!cachedMenu.classList.contains('translate-x-full')) {
        cachedMenu.classList.add('translate-x-full');
        cachedIcon.classList.remove('fa-xmark');
        cachedIcon.classList.add('fa-bars');
    }
};

// Benchmark Original
let start = performance.now();
for (let i = 0; i < 50000; i++) {
    originalNavigate('equipo');
    originalNavigate('home');
}
let end = performance.now();
console.log("Original: ", end - start, "ms");

// Benchmark Optimized
start = performance.now();
for (let i = 0; i < 50000; i++) {
    optimizedNavigate('equipo');
    optimizedNavigate('home');
}
end = performance.now();
console.log("Optimized: ", end - start, "ms");
