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

export default countTimer;