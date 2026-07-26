// Idea log expand/collapse (existing)
const ideas = document.querySelectorAll('.idea');
ideas.forEach(function (idea) {
    idea.addEventListener('click', function () {
        idea.classList.toggle('expanded');
    });
});

// Real project data — used to populate the modal
const projectData = {
    celonis: {
        title: "Decarbonizing travel",
        subtitle: "Celonis · process mining",
        body: "Process mining on trip records in Celonis, plus a supporting classifier flagging high-carbon trips.",
        stats: [
            { num: "87K+", label: "Trip records" },
            { num: "4", label: "Dashboard tabs" },
            { num: "12+", label: "Components" }
        ],
        chart: null
    },
    nhanes: {
        title: "NHANES age prediction",
        subtitle: "age_prediction.ipynb",
        body: "Senior vs adult classification on NHANES health survey data, using engineered glucose, BMI, and insulin features.",
        stats: [
            { num: "1,952", label: "Training rows" },
            { num: "19", label: "Engineered features" },
            { num: "3", label: "Models ensembled" }
        ],
        chart: null
    },
    conversion: {
        title: "Conversion prediction",
        subtitle: "conversion_model.ipynb",
        body: "F1 score across three models, on 10,000 training rows with class imbalance in the target.",
        stats: [
            { num: "10,000", label: "Training rows" },
            { num: "69.1%", label: "Not converted" },
            { num: "30.9%", label: "Converted" }
        ],
        chart: [
            { label: "Logistic Regression", value: 0.544 },
            { label: "XGBoost", value: 0.538 },
            { label: "Random Forest", value: 0.525 }
        ]
    }
};

// Modal elements
const modal = document.getElementById('project-modal');
const modalTitle = document.getElementById('modal-title');
const modalSubtitle = document.getElementById('modal-subtitle');
const modalBody = document.getElementById('modal-body');
const modalChart = document.getElementById('modal-chart');

// Open modal on project card click
document.querySelectorAll('.project-card').forEach(function (card) {
    card.addEventListener('click', function () {
        const key = card.getAttribute('data-project');
        const data = projectData[key];
        if (!data) return;

        modalTitle.textContent = data.title;
        modalSubtitle.textContent = data.subtitle;
        modalBody.textContent = data.body;

        modalChart.innerHTML = ''; // Clears the modal

        // --- NEW CLAUDE CODE: Stat tiles ---
        if (data.stats) {
            const statsGrid = document.createElement('div');
            statsGrid.className = 'modal-stats';

            data.stats.forEach(function (stat) {
                const tile = document.createElement('div');
                tile.className = 'modal-stat';

                const num = document.createElement('div');
                num.className = 'modal-stat-num';
                num.textContent = stat.num;

                const label = document.createElement('div');
                label.className = 'modal-stat-label';
                label.textContent = stat.label;

                tile.appendChild(num);
                tile.appendChild(label);
                statsGrid.appendChild(tile);
            });

            modalChart.appendChild(statsGrid);
        }
        // -----------------------------------

        // --- EXISTING CODE: Bar chart ---
        if (data.chart) {
            data.chart.forEach(function (item) {
                const row = document.createElement('div');
                row.className = 'chart-row';

                const label = document.createElement('span');
                label.className = 'chart-label';
                label.textContent = item.label;

                const barWrap = document.createElement('div');
                barWrap.className = 'chart-bar-wrap';

                const bar = document.createElement('div');
                bar.className = 'chart-bar';
                bar.style.width = (item.value * 100) + '%';
                barWrap.appendChild(bar);

                const val = document.createElement('span');
                val.className = 'chart-value';
                val.textContent = item.value.toFixed(3);

                row.appendChild(label);
                row.appendChild(barWrap);
                row.appendChild(val);
                modalChart.appendChild(row);
            });
        }
        // -----------------------------------

        modal.classList.add('open');
    });
});

// Close modal — X button
document.getElementById('modal-close').addEventListener('click', function () {
    modal.classList.remove('open');
});

// Close modal — click outside the content box
modal.addEventListener('click', function (e) {
    if (e.target === modal) {
        modal.classList.remove('open');
    }
});

// Theme toggle
const html = document.documentElement;
const themeToggle = document.getElementById('theme-toggle');

function applyTheme(theme) {
    if (theme === 'light') {
        html.setAttribute('data-theme', 'light');
        themeToggle.textContent = '☀️';
    } else {
        html.removeAttribute('data-theme');
        themeToggle.textContent = '🌙';
    }
}

const savedTheme = localStorage.getItem('theme') || 'dark';
applyTheme(savedTheme);

themeToggle.addEventListener('click', function () {
    const isLight = html.getAttribute('data-theme') === 'light';
    const next = isLight ? 'dark' : 'light';
    applyTheme(next);
    localStorage.setItem('theme', next);
});