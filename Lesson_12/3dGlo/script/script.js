window.addEventListener('DOMContentLoaded', function(){
    'use strict';
    function countTimer(deadline){
        let timerHours = document.querySelector('#timer-hours'),
            timerMinutes = document.querySelector('#timer-minutes'),
            timerSeconds = document.querySelector('#timer-seconds');

        function plusZero(a) {
            if (a > 10){
                a = '0' + a;
                return a;
            }
                
        }

        function getTimeRemaining(){
            let dateStop = new Date(deadline).getTime(),
            dateNow = new Date().getTime(),
            timeRemaining = (dateStop - dateNow) / 1000;
            let seconds = Math.floor(timeRemaining % 60);
            plusZero(seconds);
            let minutes = Math.floor((timeRemaining / 60) % 60);
            plusZero(minutes);
            let hours = Math.floor(timeRemaining / 60 / 60);
            plusZero(hours);
            return { timeRemaining, hours, minutes, seconds };
            
        }
        
        function updateClock(){
            let timer = getTimeRemaining();
        
            timerHours.textContent = timer.hours;
            timerMinutes.textContent = timer.minutes;
            timerSeconds.textContent = timer.seconds;
            
            if(timer.timeRemaining <= 0){
                timerHours.textContent = '00';
                timerMinutes.textContent = '00';
                timerSeconds.textContent = '00';
                clearInterval(updateClock);
            }
        }
        setInterval(updateClock, 1000, '14 september 2019');

        updateClock();
        

    }
    countTimer('14 september 2019');
});
    





    // setInterval(countTimer, 1000, '14 september 2019');