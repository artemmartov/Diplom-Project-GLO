'use strict';
const sliderCarousel = () => {
    const wrap = document.querySelector('.services-slider'),
        main = document.querySelector('.slider-wrapper'),
        slides = wrap.querySelectorAll('.slide'),
        next = main.querySelector('.next'),
        prev = main.querySelector('.prev');
    let position = 0,
        infinity = true,
        slidesToShow = 5,
        responsive,
        widthSlide;
            
    const addClass = () => {
        wrap.classList.add('glo-slider');
        for (const item of slides) {
            item.classList.add('glo-slide-item');
        }
    };
    addClass();
    
    const response = () => {
        const slidesToShowDefault = slidesToShow;
        if(document.documentElement.clientWidth < 576){
            slidesToShow = 2;
            widthSlide = Math.floor(100 / slidesToShow);
            console.log(widthSlide);
        }
        if(document.documentElement.clientWidth < 786 && document.documentElement.clientWidth > 576){
            slidesToShow = 3;
            widthSlide = Math.floor(100 / slidesToShow);

        } else {
            widthSlide = Math.floor(100 / slidesToShow);
        }
        return slidesToShow;
    };
    response();

    const addStyle = () => {
        const style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        style.textContent = `
            .slider-wrapper{
                overflow: hidden;
                position: relative
            }
            .glo-slider{
                display: flex;
                transition: transform 0.5s;
                will-change: transform;
            }
            .glo-slide-item {
                margin: auto 0;
                flex: 0 0 ${widthSlide}%;
            }
        `;
        document.head.appendChild(style);
    };
    addStyle();

    const nextSLider = () => {
        if( infinity || position < slides.length - slidesToShow){
            ++position;
            if(position > slides.length - slidesToShow){
                position = 0;
            }
            wrap.style.transform = `translateX(-${position * widthSlide}%)`;
        }
    };
    const prevSlider = () => {
        if(infinity || position > 0){
            --position;
          if(position < 0){
              position = slides.length - slidesToShow;
          } 
        wrap.style.transform = `translateX(-${position * widthSlide}%)`;
        }
    };
    const controlSlider = () => {
        next.addEventListener('click', nextSLider);
        prev.addEventListener('click', prevSlider);
    };
    controlSlider();

   
};
   
export default sliderCarousel;