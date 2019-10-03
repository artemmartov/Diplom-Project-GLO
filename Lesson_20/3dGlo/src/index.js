'use strict';

import "@babel/polyfill";
import 'nodelist-foreach-polyfill';
import elementClosest from 'element-closest';
elementClosest(window);

import countTimer from './modules/countTimer';
import toggleMenu from './modules/toggleMenu';
import togglePopUp from './modules/togglePopUp';
import tabs from './modules/tabs';
import slider from './modules/slider';
import ourCommand from './modules/ourCommand';
import calculator from './modules/calculator';
import sendForm from './modules/sendForm';



    // таймер
    countTimer('21 september 2019');
    // меню
    toggleMenu();
    // popup
    togglePopUp();
    // табы
    tabs();
    // слайдер
    slider();
    // наша команда
    ourCommand();
    // калькулятор
    calculator(100);
    // send-ajax-form
    sendForm();