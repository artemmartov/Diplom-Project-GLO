'use strict';

import selectMenu from './modules/selectMenu';
import openPopUp from './modules/openPopUp';
import sendModalForm from './modules/sendModalForm';
import sendPageForm from './modules/sendPageForm';
import sliderFirst from './modules/sliderFirst';
import calculator from './modules/calculator';
import sliderSecond from './modules/sliderSecond';
import SliderCarousel from './modules/sliderCarousel';


window.addEventListener('DOMContentLoaded', function(){

sliderFirst();

sliderSecond();

openPopUp(document.querySelector('.fixed-gift'), document.getElementById('gift'),() =>{
    document.querySelector('.fixed-gift').style.display = 'none';
});
openPopUp(document.querySelector('.open-popup'), document.getElementById('free_visit_form'));
openPopUp(document.querySelector('.call .callback-btn'), document.getElementById('callback_form'));

selectMenu();

sendModalForm(document.getElementById('form1'));
sendModalForm(document.getElementById('form2'));


// sendPageForm(document.getElementById('form1'));
// sendPageForm(document.getElementById('form2'));

calculator();

const carousel = new SliderCarousel({
    main: '.wrapper',
    wrap: '.services-slider',
    
    slidesToShow: 4,
    infinity: true,
    responsive: [{
        breakpoint: 1024,
        slidesToShow: 3
 
    },
    {
        breakpoint: 768,
        slidesToShow: 2
 
    },
    {
        breakpoint: 576,
        slidesToShow: 1
 
    }
    ]
});
carousel.init();
    
});