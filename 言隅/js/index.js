// 移动端菜单切换
const menuBtn = document.getElementById('menu-btn');
const mobileMenu = document.getElementById('mobile-menu');
menuBtn.addEventListener('click', () => {
    mobileMenu.classList.toggle('hidden');
    const icon = menuBtn.querySelector('i');
    icon.classList.toggle('fa-bars');
    icon.classList.toggle('fa-times');
});

// 平滑滚动锚点跳转
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
        const targetId = this.getAttribute('href');
        const targetElement = document.querySelector(targetId);
        if (targetElement) {
            targetElement.scrollIntoView({
                behavior: 'smooth',
                block: 'start'
            });
            mobileMenu.classList.add('hidden');
            const icon = menuBtn.querySelector('i');
            icon.classList.remove('fa-times');
            icon.classList.add('fa-bars');
        }
    });
});

// 滚动触发动画
const scrollAnimateElements = document.querySelectorAll('.scroll-animate');
const observerOptions = {
    root: null,
    rootMargin: '0px',
    threshold: 0.15
};
const observer = new IntersectionObserver((entries) => {
    entries.forEach(entry => {
        if (entry.isIntersecting) {
            entry.target.classList.add('active');
        }
    });
}, observerOptions);
scrollAnimateElements.forEach(element => {
    observer.observe(element);
});

// 扑克牌卡片悬停交互
const pokerCards = document.querySelectorAll('.poker-card');
let maxZIndex = 30;
const originalTransforms = {
    'card1': 'rotate(-2deg)',
    'card2': 'translateX(-50%)',
    'card3': 'rotate(2deg)'
};
pokerCards.forEach(card => {
    card.addEventListener('mouseenter', () => {
        maxZIndex++;
        card.style.zIndex = maxZIndex;
        card.style.transform = originalTransforms[card.id] + ' scale(1.05)';
        pokerCards.forEach(c => {
            if (c !== card) {
                c.style.filter = 'blur(4px)';
                c.style.opacity = '0.6';
            }
        });
    });
    
    card.addEventListener('mouseleave', () => {
        pokerCards.forEach(c => {
            c.style.filter = 'none';
            c.style.opacity = '1';
            c.style.transform = originalTransforms[c.id];
            c.style.zIndex = c.id === 'card2' ? '20' : '10';
        });
    });
});