const togglePopUp = () => {
    const popup = document.querySelector('.popup'),
    popupBtn = document.querySelectorAll('.popup-btn'),
    popUpContent = document.querySelector('.popup-content');

    let animPop,
    count = 0;
    popupBtn.forEach((elem) => {
        elem.addEventListener('click', () => {
            const popUpAnimation = () => {
                animPop = requestAnimationFrame(popUpAnimation);
                count++;
                if (count < 150){
                    popUpContent.style.left = count*5 + 'px';
                }else {
                    cancelAnimationFrame(animPop);
                }
            };
            animPop = requestAnimationFrame(popUpAnimation);
            
            popup.style.display = 'block';
            count = 0;
        });
    });

    popup.addEventListener('click', (event) => {
        let target = event.target;
        if(target.classList.contains('popup-close')){
            popup.style.display = 'none';
        } else {
            target = target.closest('.popup-content');
            if (!target){
                popup.style.display = 'none';
            }
        }

    });
};

export default togglePopUp;