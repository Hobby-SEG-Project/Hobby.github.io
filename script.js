document.addEventListener('scroll', () => {
    const header = document.querySelector('header');
    if(window.scrollY > 300){
        header.classList.add('scrolled');
    }
    else{
        header.classList.remove('scrolled');
    }
});

const obs = new IntersectionObserver((entries) => {
    entries.forEach((entry) => {
        console.log(entry)
        if(entry.isIntersecting){
            entry.target.classList.add('show');
            observer.unobserve(entry.target);
        }
    })
})

const hidden = document.querySelectorAll('.content');
hidden.forEach((el) => obs.observe(el));