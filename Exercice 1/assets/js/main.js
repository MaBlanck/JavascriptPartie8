let div = document.createElement('p');
    div.innerHTML = '<i class="fas fa-arrow-up fa-2x"></i>';
    document.body.appendChild(div);
    /* div.style.display = 'none'; */
    div.style.position = 'fixed';
    div.style.color = 'white';
    div.style.bottom = '0';
    div.style.right = '0';
    div.style.backgroundColor = 'black'
function scrollUp (){
window.scrollTo({
    top: 0,
    left: 0,
    behavior: 'smooth'
})};
div.addEventListener('click', scrollUp);
