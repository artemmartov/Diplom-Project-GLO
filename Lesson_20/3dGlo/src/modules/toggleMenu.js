const toggleMenu = () => {
    const menu = document.querySelector('menu');
        
    const handlerMenu = () => {
        menu.classList.toggle('active-menu');
    };

    document.body.addEventListener('click', (event) => {
        let target = event.target;
        let btnMenu = target.closest('.menu');

        

        if(btnMenu){
            handlerMenu();
        } else if (target !== menu && menu.classList.contains('active-menu')){
            handlerMenu();
            
        }
    });
};

export default toggleMenu;