const sliderSecond = (minWidth = 223) => {
    const gallerySlaider = document.querySelector('.galleru-slider'),
        slide = gallerySlaider.querySelectorAll('.slide');

    slide.forEach((elem) => {
        elem.style.display = 'none';
    });

    slide[0].style.display = 'flex';
    let currentSlide = 0,
        interval;

    const prevSlide = (elem, index, strClass) => {
        elem[index].classList.remove(strClass);
        elem[index].style.display = 'none';
    };

    const nextSlide = (elem, index, strClass) => {
        elem[index].classList.add(strClass);
        elem[index].style.display = 'flex';
    };

    const autoPlaySlide = () => {
        prevSlide(slide, currentSlide, 'slide');
        currentSlide++;

        if (currentSlide >= slide.length){
            currentSlide = 0;
        }
        nextSlide(slide, currentSlide, 'slide');
    };

    const startSlide = (time=3000) => {
        interval = setInterval(autoPlaySlide, time);
    };
    startSlide();
};
export default sliderSecond;