const btn = document.querySelector('.btn');
const nav = document.querySelector('nav');

btn.addEventListener('click', () => {
    nav.classList.toggle('show');
    const isExpanded = nav.classList.contains('show');
    btn.setAttribute('aria-expanded', isExpanded);
});