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
        const btnMenu = document.querySelector('.menu'),
            menu = document.querySelector('menu'),
            closeBtn = document.querySelector('.close-btn'),
            menuItems = menu.querySelectorAll('ul>li');

        const handlerMenu = () => {
            menu.classList.toggle('active-menu');
        };

        btnMenu.addEventListener('click', handlerMenu);
        closeBtn.addEventListener('click', handlerMenu);

        menuItems.forEach((elem) => elem.addEventListener('click', handlerMenu));


    };

    toggleMenu();

    // popup

    const togglePopUp = () => {
        const popup = document.querySelector('.popup'),
        popupBtn = document.querySelectorAll('.popup-btn'),
        popUpClose = document.querySelector('.popup-close'),
        popUpContent = document.querySelector('.popup-content');

        let animPop,
        count = 0;
        

        popupBtn.forEach((elem) => {
            elem.addEventListener('click', () => {
                if (width > 400){
                const popUpAnimation = () => {
                    animPop = requestAnimationFrame(popUpAnimation);
                    count++;
                    if (count < 500){
                        popUpContent.style.left = count + 'px';
                    }else {
                        cancelAnimationFrame(animPop);
                    }
                };
                animPop = requestAnimationFrame(popUpAnimation);
                }
                popup.style.display = 'block';

            });
            

        });

        
        
        
        popUpClose.addEventListener('click', () => {
            popup.style.display = 'none';
        });




    };
    togglePopUp();
});
    

