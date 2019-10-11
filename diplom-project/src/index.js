'use strict';

import selectMenu from './modules/selectMenu';
import openPopUp from './modules/openPopUp';
import sendModalForm from './modules/sendModalForm';
import sendPageForm from './modules/sendPageForm';
import sliderFirst from './modules/sliderFirst';
import calculator from './modules/calculator';
import sliderSecond from './modules/sliderSecond';




sliderFirst();

sliderSecond();

openPopUp(document.querySelector('.fixed-gift'), document.getElementById('gift'),() =>{
    document.querySelector('.fixed-gift').style.display = 'none';
});
openPopUp(document.querySelector('.open-popup'), document.getElementById('free_visit_form'));
openPopUp(document.querySelector('.call .callback-btn'), document.getElementById('callback_form'));

selectMenu();

sendModalForm();

sendPageForm();

calculator();

    

