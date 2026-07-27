// Theme toggle — runs on every page
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
    if (theme === 'light') {
        html.setAttribute('data-theme', 'light');
        if (themeToggle) themeToggle.textContent = '☀️';
    } else {
        html.removeAttribute('data-theme');
        if (themeToggle) themeToggle.textContent = '🌙';
    }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

if (themeToggle) {
    themeToggle.addEventListener('click', function () {
        const isLight = html.getAttribute('data-theme') === 'light';
        const next = isLight ? 'dark' : 'light';
        applyTheme(next);
        localStorage.setItem('theme', next);
    });
}

// Idea log expand/collapse — only does anything on ideas.html
const ideas = document.querySelectorAll('.idea');
ideas.forEach(function (idea) {
    idea.addEventListener('click', function () {
        idea.classList.toggle('expanded');
    });
});
// Project card expand/collapse — same pattern as ideas
const projectCards = document.querySelectorAll('.project-card');
projectCards.forEach(function (card) {
    card.addEventListener('click', function () {
        card.classList.toggle('expanded');
    });
});