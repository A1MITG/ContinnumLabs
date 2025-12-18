// ========================================
// WHAT WE'VE BUILT - APP DATA & RENDERING
// ========================================

// Mock Data Array - Apps shipped by Continuum Labs
const appsData = [
    {
        id: 'vantage360',
        name: 'Vantage360',
        description: 'Executive-ready competitive intelligence dossiers on any company or product. Instant institutional-grade analysis for C-suite decisions.',
        category: 'Market Intelligence',
        shipped: 'December 2025',
        url: '#',
        status: 'live'
    },
    {
        id: 'taskflow',
        name: 'Taskflow',
        description: 'A focused task manager for knowledge workers. Protects deep work and manages context-heavy projects without clutter.',
        category: 'Productivity',
        shipped: 'November 2025',
        url: '#',
        status: 'live'
    },
    {
        id: 'briefcase',
        name: 'Briefcase',
        description: 'AI-assisted meeting notes that capture decisions, not transcripts. Summarizes what matters, skips what doesn\'t.',
        category: 'Productivity',
        shipped: 'October 2025',
        url: '#',
        status: 'experiment'
    }
];

// Render App Card
function renderAppCard(app) {
    return `
        <a href="${app.url}" class="app-card-link">
            <article class="app-card-item">
                <div class="app-card-visual">
                    <span class="app-card-logo">${app.name.substring(0, 2)}</span>
                </div>
                <div class="app-card-content">
                    <h2 class="app-card-name">${app.name}</h2>
                    <p class="app-card-description">${app.description}</p>
                    <div class="app-card-meta">
                        <span class="app-card-date">Shipped: ${app.shipped}</span>
                        ${app.category ? `<span class="app-card-category">${app.category}</span>` : ''}
                    </div>
                    <span class="app-card-action">→ View app</span>
                </div>
            </article>
        </a>
    `;
}

// Render All Apps to Grid
function renderAppGrid() {
    const grid = document.getElementById('app-grid');
    if (!grid) return;

    if (appsData.length === 0) {
        grid.innerHTML = '<p class="no-apps">No apps shipped yet. Check back soon.</p>';
        return;
    }

    grid.innerHTML = appsData.map(app => renderAppCard(app)).join('');
}

// Initialize on DOM Ready
document.addEventListener('DOMContentLoaded', () => {
    renderAppGrid();
});
