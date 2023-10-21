const circle = document.querySelector('#circle')

circle.addEventListener('mousecenter', () => {
    if(!circle.classList.contains('hover')) {
        circle.classList.add('hover');
    }
});

circle.addEventListener('mouseLeave', () => {
    if(circle.classList.contains('hover')) {
        circle.classList.remove('hover');
    }
});