document.addEventListener('DOMContentLoaded', () => {
    const images = document.querySelectorAll('.gallery-item');
    for(let i = 0; i < images.length; i++){
        if(i % 2 == 0){
            images[i].classList.add('left-rotate');
        }
        else {
            images[i].classList.add('right-rotate');
        }
    }
});