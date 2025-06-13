// No JavaScript needed for now

// Page Navigation
function navigateToProjects() {
    const homePage = document.getElementById('home');
    const projectsPage = document.getElementById('projects');
    
    // Add slide-out animation to home page
    homePage.classList.add('slide-out');
    
    // After animation, hide home and show projects
    setTimeout(() => {
        homePage.classList.remove('active', 'slide-out');
        projectsPage.classList.add('active');
    }, 500);
}

function navigateToHome() {
    const homePage = document.getElementById('home');
    const projectsPage = document.getElementById('projects');
    
    // Add slide-out animation to projects page
    projectsPage.classList.add('slide-out');
    
    // After animation, hide projects and show home
    setTimeout(() => {
        projectsPage.classList.remove('active', 'slide-out');
        homePage.classList.add('active');
    }, 500);
}

// Add keyboard navigation
document.addEventListener('keydown', (e) => {
    if (e.key === 'Escape') {
        const projectsPage = document.getElementById('projects');
        if (projectsPage.classList.contains('active')) {
            navigateToHome();
        }
    }
});

// Intersection Observer for project cards
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.1
};

const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.style.animationDelay = `${entry.target.dataset.index * 0.1}s`;
            entry.target.classList.add('visible');
            observer.unobserve(entry.target); // Stop observing once animated
        }
    });
}, observerOptions);

// Observe all project cards
document.querySelectorAll('.project-card').forEach((card, index) => {
    card.dataset.index = index;
    observer.observe(card);
});

// Smooth scroll for the scroll button
document.querySelector('.scroll-btn').addEventListener('click', (e) => {
    e.preventDefault();
    const projectsSection = document.querySelector('#projects');
    projectsSection.scrollIntoView({ behavior: 'smooth' });
});