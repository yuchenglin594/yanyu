// 页面加载动画
document.addEventListener('DOMContentLoaded', () => {
    initPageAnimations();
    initInteractiveEffects();
});

function initPageAnimations() {
    // 图片延迟加载动画
    const image = document.querySelector('.main-image');
    setTimeout(() => {
        image.style.opacity = '1';
    }, 300);
}

function initInteractiveEffects() {
    // 商品卡片交互
    const productCards = document.querySelectorAll('.product-card');
    productCards.forEach(card => {
        card.addEventListener('mouseenter', () => {
            const icon = card.querySelector('.product-icon');
            icon.style.transform = 'rotate(15deg) scale(1.1)';
            icon.style.transition = 'transform 0.5s ease';
        });
        card.addEventListener('mouseleave', () => {
            const icon = card.querySelector('.product-icon');
            icon.style.transform = '';
        });
    });

    // 导航按钮点击效果
    const navButtons = document.querySelectorAll('.nav-btn, .back-link');
    navButtons.forEach(btn => {
        btn.addEventListener('click', (e) => {
            if (btn.tagName === 'BUTTON') {
                e.preventDefault();
            }
            btn.style.transform = 'scale(0.95)';
            setTimeout(() => {
                btn.style.transform = '';
            }, 150);
        });
    });
}

// 平滑滚动（禁用默认锚点跳转）
document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();
    });
});