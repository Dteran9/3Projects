const closedMariposa = document.querySelector('.closed');
const openFairy = document.querySelector('.open');

//Add event listener
closedMariposa.addEventListener('click', () => {
    if(openFairy.classList.contains('.open')) {
        openFairy.classList.add('active');
        closedMariposa.classList.remove('.active');
    }
});

openFairy.addEventListener('click', () => {
    if(closedMariposa.classList.contains('closed')) {
        closedMariposa.classList.add('active');
        openFairy.classList.remove('active');
    }
});