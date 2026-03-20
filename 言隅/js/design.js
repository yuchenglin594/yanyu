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
    // 特色标签交互
    const featureTags = document.querySelectorAll('.feature-tag');
    featureTags.forEach(tag => {
        tag.addEventListener('mouseenter', () => {
            const icon = tag.querySelector('i');
            icon.style.transform = 'rotate(360deg) scale(1.2)';
            icon.style.transition = 'transform 0.5s ease';
        });
        tag.addEventListener('mouseleave', () => {
            const icon = tag.querySelector('i');
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