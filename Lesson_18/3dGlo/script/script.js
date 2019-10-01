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

        setInterval(updateClock, 1000, '21 september 2019');
        updateClock();
        
    };
    countTimer('21 september 2019');
    
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
            } else if (target !== menu && menu.classList.contains('active-menu')){
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

    // наша команда
    const ourCommand = () => {
        let commandPhoto = document.querySelectorAll('.command__photo');        

        for (let i = 0; i < commandPhoto.length; i++){
            let src = commandPhoto[i].getAttribute('src');
            commandPhoto[i].addEventListener('mouseover', (event) => {
                event.target.src = event.target.dataset.img;
            });

            commandPhoto[i].addEventListener('mouseout', (event) => {
                event.target.src = src;
            });
        }
    
    };
    ourCommand();


    // калькулятор
    
    const calculator = (price = 100) => {

        const calcItem = document.querySelectorAll('.calc-item'),
            calcBlock = document.querySelector('.calc-block'),
            calcType = document.querySelector('.calc-type'),
            calcSquare = document.querySelector('.calc-square'),
            calcCount = document.querySelector('.calc-count'),
            calcDay = document.querySelector('.calc-day'),
            totalValue = document.getElementById('total');

        const countSum = () => {
            let total = 0,
                countValue = 1,
                dayValue = 1;
            const typeValue = calcType.options[calcType.selectedIndex].value;
            let squareValue = +calcSquare.value;

            if (calcCount.value > 1){
                countValue += (calcCount.value - 1) / 10;
            }

            if (calcDay.value && calcDay.value < 5){
                dayValue *= 2;
            } else if (calcDay.value && calcDay.value < 10){
                dayValue *= 1.5;
            } 

            if (typeValue && squareValue){
                total = price * typeValue * squareValue * countValue * dayValue;
            } else{
                total = 0;

            }

            totalValue.textContent = total; 

        };

        calcBlock.addEventListener('change', (event) => {
            let target = event.target;
            if (target.matches('.calc-type') || target.matches('.calc-square') || 
            target.matches('.calc-count') || target.matches('.calc-day')){
                countSum();
            }

        });

        calcItem.forEach((elem) => {
            elem.addEventListener('input', () => {
                elem.value = elem.value.replace(/\D/g, '');
            });

        });
        

    };
    calculator(100);

    // send-ajax-form

    const sendForm = () => {
        // валидация 

        document.addEventListener('input', () => {
            let target = event.target,
                phoneInputs = target.closest('.form-phone'),
                topInput = target.closest('#form2-name'),
                nameInputs = target.closest('.form-name'),
                messageInput = target.closest('.mess');
            if (phoneInputs){
                phoneInputs.value = phoneInputs.value.replace(/[^\d+]/g, '');
            }

            let cyrilic = (x) => {
                let input = x;
                input.value = input.value.replace(/[^А-яЯ-яЁё\s]/g, '');
            };

            if (nameInputs) {
                cyrilic(nameInputs);
            }
            if (topInput) {
                cyrilic(topInput);
            }
            if (messageInput) {
                cyrilic(messageInput);
            }
        });

        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо, мы скоро с вами свяжемся!';
    
        const form = document.getElementById('form1'),
            input = document.querySelectorAll('input');
            
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';

        document.addEventListener('submit', (event) => {
            let target = event.target,
                getForm = target.closest('form');
                getForm.appendChild(statusMessage);

            event.preventDefault();
            statusMessage.textContent = loadMessage;
            const formData = new FormData(getForm);
            let body = {};
            formData.forEach ((val, key) => {
                body[key] = val;
            });
            input.forEach((elem) => {
                elem.value = '';
            });
            postData(body, () => {
                statusMessage.textContent = successMessage;
            }, (error) => {
                statusMessage.textContent = errorMessage;
                console.error(error);
            });
        });

        const postData = (body) => {

            return new Promise((resolve, reject) => {
                const request = new XMLHttpRequest();
                request.addEventListener('readystatechange', () => {
                if (request.readyState !== 4){
                    return;
                }
                if (request.status === 200){
                    resolve();
                } else {
                    reject(request.status);
                }
            });

            request.open('POST', '/server.php');
            request.setRequestHeader('Content-Type', 'application/json');
            request.send(JSON.stringify(body));

            }); 
        };
        postData()
            .then(() => {
                statusMessage.textContent = successMessage;
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.log(error);
            });
        
    };
    
    sendForm();
        
});

// СЛАЙДЕР-КАРУСЕЛЬ

class SliderCarousel{
    constructor({
        main, 
        wrap, 
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 3,
        responsive = []
    }) {
        if (!main || !wrap){
            console.warn('slider-carousel: необходиом 2 свойства: "main" и "warn"!');
        }
        this.main = document.querySelector(main);
        this.wrap = document.querySelector(wrap);
        this.slides = document.querySelector(wrap).children;
        this.next = document.querySelector(next);
        this.prev = document.querySelector(prev);
        this.slidesToShow = slidesToShow;
        this.options = {
            position,
            infinity,
            widthSlide: Math.floor(100 / this.slidesToShow),
            maxPosition: this.slides.length - this.slidesToShow 
        }; 
        this.responsive = responsive;
    }

    init(){
        
        this.addGloClass();
        this.addStyle();

        if (this.prev && this.next){
            this.controlSlider();
        } else {
            this.addArrow();
            this.controlSlider();
        }

        if (this.responsive){
            this.responseInit();
        }
    }

    addGloClass() {
        this.main.classList.add('glo-slider');
        this.wrap.classList.add('glo-slider__wrap');
        for (const item of this.slides){
            item.classList.add('glo-slider__item');
        }
    }
    addStyle() {
        let style = document.getElementById('sliderCarousel-style');
        if (!style) {
        style = document.createElement('style');
        style.id = 'sliderCarousel-style';
        }

        style.textContent = `
        .glo-slider {
            overflow: hidden !important;
            
        }
        .glo-slider__wrap {
            display: flex !important;
            transition: transform 0.5s !important;
            will-change: transform !important;
          
        }
        .glo-slider__item {
            display: flex !important;
            align-items: center;
            justify-content: center;
            flex: 0 0 ${this.options.widthSlide}% !important;
            margin: auto 0 !important;
            
        }
        `;
        document.head.appendChild(style);
    }

    controlSlider(){
        this.next.addEventListener('click', this.nextSlider.bind(this));
        this.prev.addEventListener('click', this.prevSlider.bind(this));
    }

    prevSlider(){
        if (this.options.infinity || this.options.position > 0){
            --this.options.position;
            console.log(this.options.position);
            if (this.options.position < 0){
                this.options.position = this.options.maxPosition;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    nextSlider(){
        if (this.options.infinity || this.options.position < this.options.maxPosition){
            ++this.options.position;
            console.log(this.options.position);
            if (this.options.position > this.options.maxPosition){
                this.options.position = 0;
            }
            this.wrap.style.transform = `translateX(-${this.options.position * this.options.widthSlide}%)`;
        }
    }

    addArrow(){
        this.prev = document.createElement('button');
        this.next = document.createElement('button');

        this.prev.className = 'glo-slider__prev';
        this.next.className = 'glo-slider__next';

        this.main.appendChild(this.prev);
        this.main.appendChild(this.next);

        const style = document.createElement('style');
     
        style.textContent = `
        .glo-slider__prev,
        .glo-slider__next {
            margin: 0 10px;
            border: 20px solid transparent;
            background: transparent;
        }

        .glo-slider__next{
            border-left-color: #19b5fe;
        }

        .glo-slider__prev{
            border-right-color: #19b5fe;
        }

        .glo-slider__prev:hover,
        .glo-slider__next:hover,
        .glo-slider__prev:focus,
        .glo-slider__next:focus{
            background: transparent;
            outline: transparent;
        }
        `;

        document.head.appendChild(style);

    }
    responseInit(){
        const slidesToShowDefault = this.slidesToShow;
        const allResponse = this.responsive.map(item => item.breakpoint);
        const maxResponse = Math.max(...allResponse);

        const checkResponse = () =>  {
            const widthWindow = document.documentElement.clientWidth;
            if (widthWindow < maxResponse){
                for (let i = 0; i < allResponse.length; i++){
                    if (widthWindow < allResponse[i]){
                    this.slidesToShow = this.responsive[i].slidesToShow;
                    this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                    this.addStyle();
                    } 
                }
            }else {
                this.slidesToShow = slidesToShowDefault;
                this.options.widthSlide = Math.floor(100 / this.slidesToShow);
                this.addStyle();
            }
        };
        checkResponse();
        window.addEventListener('resize', checkResponse);

    }
}






    


