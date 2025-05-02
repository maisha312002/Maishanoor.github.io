document.addEventListener("DOMContentLoaded", function() {
    // Smooth Scrolling for navigation links
    document.querySelectorAll('nav ul li a').forEach(anchor => {
        anchor.addEventListener('click', function(event) {
            event.preventDefault();
            const targetId = this.getAttribute('href').substring(1);
            document.getElementById(targetId).scrollIntoView({
                behavior: 'smooth'
            });
        });
    });

    // Back-to-Top Button
    const backToTop = document.createElement('button');
    backToTop.innerText = '↑';
    backToTop.id = 'backToTop';
    document.body.appendChild(backToTop);

    backToTop.style.position = 'fixed';
    backToTop.style.bottom = '20px';
    backToTop.style.right = '20px';
    backToTop.style.padding = '10px 15px';
    backToTop.style.fontSize = '20px';
    backToTop.style.background = '#ff6b6b';
    backToTop.style.color = '#fff';
    backToTop.style.border = 'none';
    backToTop.style.cursor = 'pointer';
    backToTop.style.display = 'none';
    backToTop.style.borderRadius = '5px';

    window.addEventListener('scroll', function() {
        if (window.scrollY > 300) {
            backToTop.style.display = 'block';
        } else {
            backToTop.style.display = 'none';
        }
    });

    backToTop.addEventListener('click', function() {
        window.scrollTo({ top: 0, behavior: 'smooth' });
    });
});
