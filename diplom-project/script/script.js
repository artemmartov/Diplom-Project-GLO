document.addEventListener('DOMContentLoaded', () => {
    const toggle = () => {
        const formWrapper = document.querySelector('.form-wrapper'),
            clubSelect = document.querySelector('.club-select'),
            clubList = clubSelect.querySelector('ul');

        clubSelect.addEventListener('click', () => {
            if (!clubList.style.display || clubList.style.display === 'none'){
                clubList.style.display = 'block';
            } else {
                clubList.style.display = 'none';
            }
        });
    };
    toggle();
    
    
    const popUp = (popUpBtn = false, popUp, clickClose=false) => {
        if(popUpBtn === false){
            popUp.style.display = 'block';
        } else {
            popUpBtn.addEventListener('click', (event) => {
                popUp.style.display = 'block';
            });
        }
    
        popUp.addEventListener('click', (event) => {
            let target = event.target;
            if(target.matches('.overlay') || target.matches('.close_icon') || target.matches('.close-btn')){
                popUp.style.display = 'none';
                if(clickClose){
                    clickClose();
                }
            }
        });
    
    };
    popUp(document.querySelector('.fixed-gift'), document.getElementById('gift'),() =>{
        document.querySelector('.fixed-gift').style.display = 'none';
    });
    popUp(document.querySelector('.open-popup'), document.getElementById('free_visit_form'));
    popUp(document.querySelector('.call .callback-btn'), document.getElementById('callback_form'));


    // первый Слайдер
    const sliderFirst = () => {
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
        };
        
        const startSlide = () => {
            setInterval(autoPlaySlide, 3000);
        };
        startSlide();
       
    };

    sliderFirst();

    // Второй Слайдер

    const sliderSecond = () => {
        

    };

    // AJAX FORM Modal

    const sendForm = () => {
        const errorMessage = 'Что-то пошло не так...',
            loadMessage = 'Загрузка...',
            successMessage = 'Спасибо, мы скоро с вами свяжемся!';
    
        const form = document.getElementById('form2');
           
            
        const statusMessage = document.createElement('div');
        statusMessage.style.cssText = 'font-size: 2rem;';

        form.addEventListener('submit', (event) => {
            event.preventDefault();
            form.appendChild(statusMessage);

            const request = new XMLHttpRequest();
            request.open('POST', './server.php');
            request.setRequestHeader('Content-Type', 'multipart/form-data');

            const formData = new FormData(form);
            request.send(formData);
            
        });
    };
});

class SliderCarousel{
    constructor({
        main, 
        wrap, 
        next,
        prev,
        infinity = false,
        position = 0,
        slidesToShow = 2,
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
        document.body.appendChild(style);
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
        let services = document.getElementById('services');

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

        services.appendChild(style);

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