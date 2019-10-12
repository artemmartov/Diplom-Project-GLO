const scrollUp = () => {
    const btnToTop = document.getElementById('totop');
    btnToTop.style.display = 'none';
   
    window.onscroll = function() {
        
        let scroll = window.pageYOffset || document.documentElement.scrollTop;
        if (scroll < 748){
            btnToTop.style.display = 'none';
        }else if (scroll > 748){
            btnToTop.style.display = 'block';
        }        
    }; 
};

export default scrollUp;
