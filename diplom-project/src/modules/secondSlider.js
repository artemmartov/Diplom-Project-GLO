const secondSlider = () => {
    const slider = document.querySelector('.gallery-slider'),
        slide = slider.querySelectorAll('.slide');
        
    
    let currentSlide = 0,
        dotNew,
        dots,
        interval;

    slide[0].classList.add('slider-active');
    dots = document.createElement('ul');
    dots.classList.add('dots');
    slider.appendChild(dots);
    for(let i = 0; i < slide.length; i++){
        dotNew = document.createElement('li');
    dotNew.classList.add('dot-gallery');
    dots.appendChild(dotNew);
    }
    
    let dot = document.querySelectorAll('.dot-gallery');
    dot[0].classList.add('dot-gallery-active');
   
    const prevSlide = (elem, index, strClass) => {
           elem[index].classList.remove(strClass);
    };
    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'slider-active');
        
        prevSlide(dot, currentSlide, 'dot-gallery-active');
        currentSlide++;
        if(currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slider-active');
        nextSlide(dot, currentSlide, 'dot-gallery-active');
    };

    const startSlide = (time = 3000) => {
        interval = setInterval(autoPlaySlide, time);
    };

    const stopSlide = () => {
        clearInterval(interval);
    };
    slider.addEventListener('click', (event) => {
        event.preventDefault();

        let target = event.target;
        
         if(!target.matches('.gallery-btn, .dot-gallery')){
             return;
         }

        prevSlide(slide, currentSlide, 'slider-active');
        prevSlide(dot, currentSlide, 'dot-gallery-active');

        if(target.matches('#arrow-right')){
            currentSlide++;
        } else if(target.matches('#arrow-left')){
            currentSlide--;
        } else if( target.matches('.dot-gallery')){
            dot.forEach((elem, index) => {
                if(elem === target) {
                    currentSlide = index;
                }
            });
        }

        if(currentSlide >= slide.length) {
            currentSlide = 0;
        }

        if(currentSlide < 0){
            currentSlide = slide.length - 1;
        }
        nextSlide(slide, currentSlide, 'slider-active');
        nextSlide(dot, currentSlide, 'dot-gallery-active');
    });

    slider.addEventListener('mouseover', (event) => {
        if(event.target.matches('.gallery-btn') ||
        event.target.matches('.dot-gallery')){
            stopSlide();
        }
    });
    slider.addEventListener('mouseout', (event) => {
        if(event.target.matches('.gallery-btn') ||
        event.target.matches('.dot-gallery')){
            startSlide();
        }
    });
    startSlide(1000); 
};

export default secondSlider;