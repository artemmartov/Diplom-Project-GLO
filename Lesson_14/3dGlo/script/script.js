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

        document.body.addEventListener('click', () => {
            let target = event.target;
            let btnMenu = target.closest('.menu');

            if(btnMenu){
                handlerMenu();
            } else if (target !== menu){
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
});
    

