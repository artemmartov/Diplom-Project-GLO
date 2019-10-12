'use strict';
const burgerMenu = () => {

    window.addEventListener('scroll', function() {
        if(window.pageYOffset > 200) {
           document.querySelector('nav').style.position = 'fixed';
           if('.fixed-gift' == true){
            document.querySelector('.fixed-gift').style.top = '95px';
           }
          
        } else {
            document.querySelector('nav').style.position = 'static';
            if('.fixed-gift' == true){
                document.querySelector('.fixed-gift').style.top = '15px';
            }
        
        }
    });

    const popupMenu = document.querySelector('.popup-menu'),
        menuButton = document.querySelector('.menu-button'),
        closeBtn = document.querySelector('.close-menu-btn img'),
        popupMenuUl = popupMenu.querySelector('ul');
    
    menuButton.addEventListener('click', () => {
        popupMenu.style.display = 'block';
    });
    popupMenu.addEventListener('click', () => {
           
        popupMenu.style.display = 'none';
        
    });
     
    let scroll = document.querySelectorAll('.scroll');
    scroll.forEach((item) => {
        item.scrollIntoView({ behavior: 'smooth' });
    });
       
};
export default burgerMenu;