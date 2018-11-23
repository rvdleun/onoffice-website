const menu = document.querySelector('.menu');
document.addEventListener('scroll', (e) => {
    const top = document.documentElement.scrollTop;
    if (top > 200) {
        menu.classList.add('scrolled');
    } else {
        menu.classList.remove('scrolled');
    }
});

document.querySelectorAll('a[href^="#"]').forEach(anchor => {
    anchor.addEventListener('click', function (e) {
        e.preventDefault();

        document.querySelector(this.getAttribute('href')).scrollIntoView({
            behavior: 'smooth'
        });
    });
});
