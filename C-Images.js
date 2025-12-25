

document.querySelectorAll('.certificate').forEach(cert => {
    observer.observe(cert);
});


const certificates = document.querySelectorAll('.certificate img');
const modal = document.getElementById('certModal');
const modalImg = document.getElementById('modalImg');


certificates.forEach(img => {
    img.addEventListener('click', () => {
        modalImg.src = img.src;
        modal.classList.add('active');
    });
});


modal.addEventListener('click', (e) => {
    if (e.target !== modalImg) {
        modal.classList.remove('active');
    }
});
