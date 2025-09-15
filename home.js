document.addEventListener('DOMContentLoaded', () => {

    const hamburger = document.querySelector('.hamburger');
    const navMenu = document.querySelector('.nav-menu');
    const navRight = document.querySelector('.nav-right');

    hamburger.addEventListener('click', () => {
        navMenu.classList.toggle('active');
        navRight.classList.toggle('active');
    });

    document.querySelectorAll('.nav-link, .login-link').forEach(link => {
        link.addEventListener('click', () => {
            navMenu.classList.remove('active');
            navRight.classList.remove('active');
        });
    });

    document.querySelectorAll('a[href^="#"]').forEach(anchor => {
        anchor.addEventListener('click', (e) => {
            e.preventDefault();
            const targetId = anchor.getAttribute('href').substring(1);
            const targetElement = document.getElementById(targetId);
            if (targetElement) {
                targetElement.scrollIntoView({ behavior: 'smooth' });

                setTimeout(() => {
                    targetElement.classList.add('visible');
                }, 100);
            }
        });
    });

    const sections = document.querySelectorAll('section[data-animate]');
    const observer = new IntersectionObserver((entries) => {
        entries.forEach(entry => {
            if (entry.isIntersecting) {
                entry.target.classList.add('visible');
                observer.unobserve(entry.target);
            }
        });
    }, {
        threshold: 0.1
    });

    sections.forEach(section => {
        observer.observe(section);
    });
});

document.addEventListener('DOMContentLoaded', function() {
    const banner = document.getElementById('giveawayBanner');
    const scrollingContent = document.querySelector('.scrolling-content');
    
    if (banner && scrollingContent) {

        const bannerText = `
            <span class="banner-text">
                Giveaway on our Discord Server 
                <span class="banner-emoji">🎉</span>
            </span>
        `;

        for (let i = 0; i < 10; i++) {
            scrollingContent.insertAdjacentHTML('beforeend', bannerText);
        }

        banner.addEventListener('click', function() {
            window.open('https://discord.gg/snowsvc', '_blank');
        });
    }
});