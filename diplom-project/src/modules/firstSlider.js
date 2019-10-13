const firstSlider = () => {
    let mainSlider = document.querySelector('.main-slider'),
        slides = mainSlider.querySelectorAll('.slide');
    
    let currentSlide = 0;
    
    const autoPlaySlide = () => {
        slides[currentSlide].style.display = 'none';
        currentSlide++;
        if (currentSlide >= slides.length){
            currentSlide = 0;
        }
        slides[currentSlide].style.display = 'flex';
        slides[currentSlide].style.opacity = '1';
    };
    
    const startSlide = () => {
        setInterval(autoPlaySlide, 5000);
    };
    startSlide()
};

export default firstSlider;