window.addEventListener('DOMContentLoaded', () => {
    'use strict';
    // таймер
    const width= document.documentElement.clientWidth;
    const countTimer = (deadline) => {
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        const getTimeRemaining = () => {
            let dateStop = new Date(deadline).getTime(),
                dateNow = new Date().getTime(),
                timeRemaining = (dateStop - dateNow) / 1000,
                seconds = Math.floor(timeRemaining % 60),
                minutes = Math.floor((timeRemaining / 60) % 60),
                hours = Math.floor(timeRemaining / 60 / 60);
            return {timeRemaining, hours, minutes, seconds};
    
        };

        const plusZero = (a) => {
            if (a < 10){
                a = '0' + a;
            }
            return a;

        };

        const updateClock = () => {
            let timer = getTimeRemaining();
        
            timerHours.textContent = plusZero(timer.hours);
            timerMinutes.textContent = plusZero(timer.minutes);
            timerSeconds.textContent = plusZero(timer.seconds);
            
            if(timer.timeRemaining <= 0){
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(updateClock);
            }
        };

        setInterval(updateClock, 1000, '14 september 2019');
        updateClock();
        
    };
    countTimer('14 september 2019');
    
    // меню
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
            } else if (target !== menu && menu.style.transform && menu.style.transform === `translate(0)`){
                handlerMenu();
            }
        });
        
        

    };

    toggleMenu();

    // popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popUpContent = document.querySelector('.popup-content');

        let animPop,
        count = 0;
        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                if (width > 400){
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
                }
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
    togglePopUp();

    // табы

    const tabs = () => {
        const tabHeader = document.querySelector('.service-header'),
            tab = tabHeader.querySelectorAll('.service-header-tab'),
            tabContent = document.querySelectorAll('.service-tab');

        const toggleTabContent = (index) => {
            for (let i = 0; i < tabContent.length; i++){
                if (index === i){
                    tab[i].classList.add('active');
                    tabContent[i].classList.remove('d-none');
                } else {
                    tab[i].classList.remove('active');
                    tabContent[i].classList.add('d-none');
                }
            }

        };

        tabHeader.addEventListener('click', (event) => {
            let target = event.target;
                target = target.closest('.service-header-tab');

            if (target){
                tab.forEach((item, i) => {

                    if (item === target){
                        toggleTabContent(i);
                    }
                });
            }
            

        });


    };
    tabs();

    // слайдер

    const slider = () => {
        const slide = document.querySelectorAll('.portfolio-item'),
            btn = document.querySelectorAll('.portfolio-btn'),
            slider = document.querySelector('.portfolio-content'),
            portfolioDots = document.querySelector('.portfolio-dots');

        let currentSlide = 0,
            interval;
        

        const addDots = () => {
            for(let i = 0; i <= slide.length - 1; i++) {
                let dots = document.createElement('li');
                dots.classList.add('dot');
                if (i === 0) {
                        dots.classList.add('dot-active');
            }
                portfolioDots.appendChild(dots);
            }
            
        };
        addDots();
        const dot = document.querySelectorAll('.dot');

        const prevSlide = (elem, index, strClass) => {
            elem[index].classList.remove(strClass);
            
        };

        const nextSlide = (elem, index, strClass) => {
            elem[index].classList.add(strClass);
        };


        const autoPlaySlide = () => {
            console.log(dot);
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');
            currentSlide++;
            if (currentSlide >= slide.length){
                currentSlide = 0;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');


        };

        const startSlide = (time=3000) => {
            interval = setInterval(autoPlaySlide, time);

        };

        const stopSlide = () => {
            clearInterval(interval);

        };

        slider.addEventListener('click', (event) => {
            event.preventDefault();
            let target = event.target;

            if (!target.matches('.portfolio-btn', 'dot')){
                return;
            }
            prevSlide(slide, currentSlide, 'portfolio-item-active');
            prevSlide(dot, currentSlide, 'dot-active');


            if (target.matches('#arrow-right')){
                currentSlide++;

            } else if (target.matches('#arrow-left')){
                currentSlide--;

            } else if (target.matches('dot')){
                dot.forEach((elem, index) => {
                    if (elem === target){
                        currentSlide = index;
                    }

                });
            }
            
            if (currentSlide >= slide.length){
                currentSlide = 0;
            } 
            if (currentSlide < 0){
                currentSlide = slide.length - 1;
            }
            nextSlide(slide, currentSlide, 'portfolio-item-active');
            nextSlide(dot, currentSlide, 'dot-active');


        });
        slider.addEventListener('mouseover', (event) =>{
            if (event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')){
                stopSlide();
            }

        });

        slider.addEventListener('mouseout', (event) =>{
            if (event.target.matches('.portfolio-btn') || 
            event.target.matches('.dot')){
                startSlide();
            }
            

        });

        
        



        startSlide(1500);
        
        

    };
    slider();
});
    


// for(let i = 0; i < slide.length; i++) {
//     let dot = document.createElement('li');
//     dot.classList.add('dot');
//     if (currentSlide === i) {
//             dot.classList.add('dot-active');
// }
//     dots.appendChild(dot);
// }