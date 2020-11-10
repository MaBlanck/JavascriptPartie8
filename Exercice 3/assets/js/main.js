let paragraphs = document.querySelectorAll('p');
window.addEventListener('scroll', hideAndSeek);
function hideAndSeek(i){
for(i = 0; i < paragraphs.length; i++){
    let paragraph = paragraphs[i];
    if(window.scrollY + (window.innerHeight - 200) > paragraph.offsetTop){
        paragraph.style.opacity = '1';
    } else {
    paragraph.style.opacity = '0';
    }
}};
