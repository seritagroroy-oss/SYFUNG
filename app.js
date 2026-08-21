// ==========================================================================
// Initial Data & State
// ==========================================================================
let links = typeof SYFUNG_LINKS !== 'undefined' ? SYFUNG_LINKS : [];

let currentCategory = 'all';
let searchQuery = '';
let currentSort = 'date-desc';
let activeQuickTag = null;

// ==========================================================================
// DOM Elements
// ==========================================================================
const linksGrid = document.getElementById('links-grid');
const linksCount = document.getElementById('links-count');
const currentCategoryTitle = document.getElementById('current-category-title');



const searchInput = document.getElementById('search-input');
const categoryItems = document.querySelectorAll('.category-item');

const themeToggleBtn = document.getElementById('theme-toggle');
const htmlElement = document.documentElement;

// New elements
const sortSelect = document.getElementById('sort-select');
const quickTags = document.querySelectorAll('.quick-tag');
const searchInfo = document.getElementById('search-info');
const hamburgerBtn = document.getElementById('hamburger-btn');
const sidebar = document.querySelector('.sidebar');
const sidebarOverlay = document.getElementById('sidebar-overlay');
const scrollTopBtn = document.getElementById('scroll-top-btn');

// ==========================================================================
// Initialization
// ==========================================================================
function init() {
    initTheme();
    renderLinks();
    setupEventListeners();
}

// ==========================================================================
// Theme Management
// ==========================================================================
function initTheme() {
    const savedTheme = localStorage.getItem('nexus_theme') || 'light';
    htmlElement.setAttribute('data-theme', savedTheme);
    updateThemeToggleUI(savedTheme);
}

function toggleTheme() {
    const currentTheme = htmlElement.getAttribute('data-theme');
    const newTheme = currentTheme === 'dark' ? 'light' : 'dark';

    htmlElement.setAttribute('data-theme', newTheme);
    localStorage.setItem('nexus_theme', newTheme);
    updateThemeToggleUI(newTheme);
}

function updateThemeToggleUI(theme) {
    const icon = themeToggleBtn.querySelector('i');
    const text = themeToggleBtn.querySelector('span');

    if (theme === 'dark') {
        icon.className = 'ph ph-sun';
        if (text) text.textContent = 'Thème Clair';
    } else {
        icon.className = 'ph ph-moon';
        if (text) text.textContent = 'Thème Sombre';
    }
}

// ==========================================================================
// Rendering
// ==========================================================================
function getFaviconUrl(link) {
    // Si un icône personnalisé est défini directement dans data.js, on l'utilise
    if (link.icon) return link.icon;
    try {
        const urlObj = new URL(link.url);
        // gstatic faviconV2 est plus fiable que l'ancienne API Google
        return `https://t2.gstatic.com/faviconV2?client=SOCIAL&type=FAVICON&fallback_opts=TYPE,SIZE,URL&url=${encodeURIComponent(link.url)}&size=64`;
    } catch (e) {
        return null;
    }
}

function generateAvatar(title) {
    const colors = ['#6366f1','#8b5cf6','#ec4899','#f59e0b','#10b981','#3b82f6','#ef4444','#14b8a6'];
    const letter = title.charAt(0).toUpperCase();
    const color = colors[letter.charCodeAt(0) % colors.length];
    const canvas = document.createElement('canvas');
    canvas.width = 64; canvas.height = 64;
    const ctx = canvas.getContext('2d');
    ctx.fillStyle = color;
    ctx.beginPath();
    ctx.roundRect(0, 0, 64, 64, 16);
    ctx.fill();
    ctx.fillStyle = '#ffffff';
    ctx.font = 'bold 32px Inter, sans-serif';
    ctx.textAlign = 'center';
    ctx.textBaseline = 'middle';
    ctx.fillText(letter, 32, 34);
    return canvas.toDataURL();
}

function highlightText(text, query) {
    if (!query) return text;
    const regex = new RegExp(`(${query})`, 'gi');
    return text.replace(regex, '<mark class="search-highlight">$1</mark>');
}

function renderLinks() {
    linksGrid.innerHTML = '';

    // Filter
    let filtered = links;

    if (currentCategory !== 'all') {
        const parentCategories = ['IA', 'DEV', 'JEUX', 'MONTAGE', 'DESIGN', 'MARKETING', 'FORMATION', 'EBOOK', 'FILMS', 'CYBERSÉCURITÉ', 'DIVERS', 'WINDOWS', 'API'];
        if (parentCategories.includes(currentCategory)) {
            filtered = filtered.filter(link => link.category.startsWith(currentCategory));
        } else {
            filtered = filtered.filter(link => link.category === currentCategory);
        }
    }

    if (activeQuickTag) {
        filtered = filtered.filter(link => link.category.includes(activeQuickTag));
    }

    if (searchQuery) {
        const query = searchQuery.toLowerCase();
        filtered = filtered.filter(link =>
            link.title.toLowerCase().includes(query) ||
            (link.description && link.description.toLowerCase().includes(query)) ||
            link.url.toLowerCase().includes(query)
        );
        if (searchInfo) {
            searchInfo.innerHTML = `Recherche pour "<mark>${searchQuery}</mark>" — ${filtered.length} résultat(s)`;
            searchInfo.style.display = 'block';
        }
    } else {
        if (searchInfo) {
            searchInfo.style.display = 'none';
            searchInfo.innerHTML = '';
        }
    }

    // Sort
    filtered.sort((a, b) => {
        if (currentSort === 'date-desc') {
            return new Date(b.date || '2020-01-01') - new Date(a.date || '2020-01-01');
        } else if (currentSort === 'date-asc') {
            return new Date(a.date || '2020-01-01') - new Date(b.date || '2020-01-01');
        } else if (currentSort === 'name-asc') {
            return a.title.localeCompare(b.title);
        } else if (currentSort === 'name-desc') {
            return b.title.localeCompare(a.title);
        }
        return 0;
    });

    // Update UI
    linksCount.textContent = filtered.length;

    filtered.forEach((link, index) => {
        const card = document.createElement('article');
        card.className = 'link-card';
        card.style.animationDelay = `${index * 0.03}s`;

        const iconUrl = getFaviconUrl(link);
        const avatarSrc = generateAvatar(link.title);
        
        const titleHtml = highlightText(link.title, searchQuery);
        const descHtml = highlightText(link.description || link.url, searchQuery);

        card.innerHTML = `
            <div class="card-header">
                <div class="card-icon">
                    <img src="${iconUrl}" alt="${link.title} icon" 
                         onerror="this.src='${avatarSrc}'">
                </div>
                <span class="card-category">${link.category}</span>
            </div>
            <div class="card-info">
                <h3 class="card-title" title="${link.title}">${titleHtml}</h3>
                <p class="card-desc" title="${link.description || link.url}">${descHtml}</p>
            </div>
            <div class="card-actions">
                <a href="${link.url}" target="_blank" rel="noopener noreferrer">
                    Visiter <i class="ph ph-arrow-up-right"></i>
                </a>
            </div>
        `;

        linksGrid.appendChild(card);
    });
}


// ==========================================================================
// Event Listeners
// ==========================================================================
function setupEventListeners() {
    // Theme toggle
    themeToggleBtn.addEventListener('click', toggleTheme);

    // Mobile Sidebar
    if (hamburgerBtn && sidebar && sidebarOverlay) {
        hamburgerBtn.addEventListener('click', () => {
            sidebar.classList.add('mobile-open');
            sidebarOverlay.classList.add('active');
        });
        
        sidebarOverlay.addEventListener('click', () => {
            sidebar.classList.remove('mobile-open');
            sidebarOverlay.classList.remove('active');
        });
    }

    // Scroll To Top
    if (scrollTopBtn) {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 300) {
                scrollTopBtn.classList.add('visible');
            } else {
                scrollTopBtn.classList.remove('visible');
            }
        });
        scrollTopBtn.addEventListener('click', () => {
            window.scrollTo({ top: 0, behavior: 'smooth' });
        });
    }

    // Sort
    if (sortSelect) {
        sortSelect.addEventListener('change', (e) => {
            currentSort = e.target.value;
            renderLinks();
        });
    }

    // Quick Tags
    if (quickTags) {
        quickTags.forEach(tag => {
            tag.addEventListener('click', (e) => {
                const isAlreadyActive = e.target.classList.contains('active');
                quickTags.forEach(t => t.classList.remove('active'));
                
                if (isAlreadyActive) {
                    activeQuickTag = null;
                } else {
                    e.target.classList.add('active');
                    activeQuickTag = e.target.dataset.filter;
                    // Reset category
                    currentCategory = 'all';
                    categoryItems.forEach(i => i.classList.remove('active'));
                    document.querySelector('.category-item[data-category="all"]').classList.add('active');
                    currentCategoryTitle.textContent = 'Tous les liens';
                }
                renderLinks();
            });
        });
    }

    // Search
    searchInput.addEventListener('input', (e) => {
        searchQuery = e.target.value;
        renderLinks();
    });

    // Categories filtering
    categoryItems.forEach(item => {
        item.addEventListener('click', (e) => {
            const parentCats = ['IA', 'DEV', 'JEUX', 'MONTAGE', 'DESIGN', 'MARKETING', 'FORMATION', 'EBOOK', 'FILMS', 'CYBERSÉCURITÉ', 'DIVERS'];
            if (parentCats.includes(item.getAttribute('data-category'))) {
                if (e.target.classList.contains('submenu-toggle')) {
                    item.classList.toggle('expanded');
                    const submenu = item.nextElementSibling;
                    if (submenu) submenu.classList.toggle('open');
                    return; // Ne pas filtrer si on a juste cliqué sur la flèche
                } else {
                    item.classList.add('expanded');
                    const submenu = item.nextElementSibling;
                    if (submenu) submenu.classList.add('open');
                }
            }
            
            // Update active class
            categoryItems.forEach(i => i.classList.remove('active'));
            item.classList.add('active');

            // Update filter
            currentCategory = item.getAttribute('data-category');

            // Update title
            let categoryName = item.textContent.trim();
            const titleMap = {
                'IA': 'Toutes les IA',
                'DEV': 'Outils pour les Dev',
                'JEUX': 'Tous les Jeux',
                'MONTAGE': 'Tout le Montage Vidéo',
                'DESIGN': 'Ressources Design',
                'MARKETING': 'Outils Marketing',
                'FORMATION': 'Cours & Formations',
                'EBOOK': 'Livres & Ebooks',
                'FILMS': 'Films & Animation',
                'CYBERSÉCURITÉ': 'Cybersécurité',
                'DIVERS': 'Outils Divers'
            };
            
            if (titleMap[currentCategory]) {
                categoryName = titleMap[currentCategory];
            }
            
            currentCategoryTitle.textContent = currentCategory === 'all' ? 'Tous les liens' : categoryName;

            // Close sidebar on mobile
            if (window.innerWidth <= 768 && sidebar) {
                sidebar.classList.remove('mobile-open');
                if (sidebarOverlay) sidebarOverlay.classList.remove('active');
            }

            // Reset quick tags
            if (quickTags) {
                quickTags.forEach(t => t.classList.remove('active'));
                activeQuickTag = null;
            }

            renderLinks();
        });
    });
}

// Start app
init();

// ==========================================================================
// About Modal
// ==========================================================================
const aboutModal = document.getElementById('about-modal');
const aboutBtn = document.getElementById('about-btn');
const closeAboutBtn = document.getElementById('close-about');

aboutBtn.addEventListener('click', () => {
    aboutModal.classList.remove('hidden');
});

closeAboutBtn.addEventListener('click', () => {
    aboutModal.classList.add('hidden');
});

aboutModal.addEventListener('click', (e) => {
    if (e.target === aboutModal) {
        aboutModal.classList.add('hidden');
    }
});

// ==========================================================================
// Support Modal
// ==========================================================================
const supportModal = document.getElementById('support-modal');
const supportBtn = document.getElementById('support-btn');
const closeSupportBtn = document.getElementById('close-support');

supportBtn.addEventListener('click', () => {
    supportModal.classList.remove('hidden');
});

closeSupportBtn.addEventListener('click', () => {
    supportModal.classList.add('hidden');
});

supportModal.addEventListener('click', (e) => {
    if (e.target === supportModal) {
        supportModal.classList.add('hidden');
    }
});

// Afficher automatiquement à chaque visite
setTimeout(() => {
    supportModal.classList.remove('hidden');
}, 800); // petit délai pour laisser la page se charger d'abord

window.copyNumber = function(number, btn) {
    navigator.clipboard.writeText(number).then(() => {
        const icon = btn.querySelector('i');
        icon.className = 'ph ph-check';
        btn.classList.add('copied');
        setTimeout(() => {
            icon.className = 'ph ph-copy';
            btn.classList.remove('copied');
        }, 2000);
    });
};

// ==========================================================================
// Cookie Consent
// ==========================================================================
const cookieConsent = document.getElementById('cookie-consent');
const cookieAccept = document.getElementById('cookie-accept');
const cookieReject = document.getElementById('cookie-reject');
const cookieSettings = document.getElementById('cookie-settings');

if (!localStorage.getItem('syfung_cookies_accepted')) {
    setTimeout(() => {
        cookieConsent.classList.add('show');
    }, 2000); // Apparaît après 2 secondes
}

const closeCookies = () => {
    cookieConsent.classList.remove('show');
    localStorage.setItem('syfung_cookies_accepted', 'true');
};

cookieAccept.addEventListener('click', closeCookies);
cookieReject.addEventListener('click', closeCookies);
cookieSettings.addEventListener('click', closeCookies);
