'use strict';

import modal from './modules/modal.js';
import forms from './modules/forms.js';
import calculator from './modules/calculator.js';
import sliderCarousel from './modules/sliderCarousel.js';
import scrollUp from './modules/scrollUp.js/index.js';
import validation from './modules/validation';
import firstSlider from './modules/firstSlider.js/index.js';
import burgerMenu from './modules/burgerMenu.js';
import secondSlider from './modules/secondSlider.js/index.js';


burgerMenu();
scrollUp();
modal();
forms(); 
firstSlider();
secondSlider();
sliderCarousel();
calculator();
validation();