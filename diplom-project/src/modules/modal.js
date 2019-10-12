'use strict';
const modal = () => {
    const freeVisitOpen = document.querySelector('.open-popup'),
    freeVisitForm = document.querySelector('#free_visit_form'),
    callbackForm = document.querySelector('#callback_form'),
    callbackBtn = document.querySelector('.callback-btn'),
    overlay = document.querySelectorAll('.overlay'),
    closeForm = document.querySelectorAll('.close-form'),
    fixedGift = document.querySelector('.fixed-gift'),
    gift = document.querySelector('#gift'),
    popups = document.querySelectorAll('.popup'),
    clubSelect = document.querySelector('.club-select'),
    clubList = clubSelect.querySelector('ul'),
    headerMain = document.querySelector('.header-main');
    let statusMessage;
    const openModal = (form) => {
        form.style.display = 'block';
    };

    headerMain.addEventListener('click', (e) => {
        let target = e.target;
        if(target == freeVisitOpen){
            openModal(freeVisitForm);
            overlay.forEach((elem) => {
                elem.addEventListener('click', () => {
                    freeVisitForm.style.display = 'none';
                });
            });
            closeForm.forEach((elem) => {
                elem.addEventListener('click', () => {
                    freeVisitForm.style.display = 'none';  
                });
            });
        }
        
        if(target == callbackBtn){
            openModal(callbackForm);
            overlay.forEach((elem) => {
                elem.addEventListener('click', () => {
                    callbackForm.style.display = 'none';
                });
            });
            closeForm.forEach((elem) => {
                elem.addEventListener('click', () => {
                    callbackForm.style.display = 'none';
                });
            });
        }
    });

    if(fixedGift){
        fixedGift.addEventListener('click', () => {
            openModal(gift);
            overlay.forEach((elem) => {
                elem.addEventListener('click', () => {
                    gift.style.display = 'none';
                });
            });
            closeForm.forEach((elem) => {
                elem.addEventListener('click', () => {
                    gift.style.display = 'none';
                });
            });
            fixedGift.style.display = 'none';
            gift.querySelector('.close-btn').addEventListener('click', () => {
                gift.style.display = 'none';
            });
        });
    }
    clubSelect.addEventListener('click', () => {
        clubList.classList.toggle('d-block');
    });

    let form2 = document.getElementById('form2'),
        form1 = document.getElementById('form1');
        
    const sendForm = (form) => {
        const errorMessage = "Ошибка",
         loadMessage = "Загрузка...",
         successMessage = "Данные успешно отправлены!",
         agreeMessage = "Вы должны дать согласие на обработку данных";
        form.insertAdjacentHTML('beforeend', '<div class="form-texts"></div>');
        const statusMessage = form.querySelector('.form-texts');
        statusMessage.style.color = 'yellow';

         form.querySelector('button').addEventListener('click', () => {
            if (!form.querySelector('label').checked) { 
                statusMessage.innerText = agreeMessage;
             } 
         });

         let formContent = document.querySelector('#free_visit_form .form-content');
         let formContentClone = formContent.cloneNode(true); 

         form.addEventListener('submit', (event) => {
             event.preventDefault();
             const formData = new FormData(form);
             statusMessage.textContent = loadMessage;
            
             postData(formData)
             .then((response) => {
                 if (response.status !== 200) {
                     throw new Error('status network not 200');
                 }
                    statusMessage.classList.add('form-text');
                    statusMessage.textContent = successMessage;
                    const inputs = document.querySelectorAll('input');
                    inputs.forEach((elem) => elem.value = '');
                    form.querySelector('label').checked = false;
                    setTimeout(() => {
                        statusMessage.innerText = '';
                        statusMessage.classList.remove('form-text');
                        popups.forEach((item,i)=>{item.style.display = 'none';});
                    }, 2000);
                })
               
                .catch ((error) => {
                    statusMessage.textContent = errorMessage;
                    console.log(error);
                });
                 
        });
    
        const postData = (formData) => {
            return fetch('./server.php', {
                method: 'POST',
                headers: {
                    'Conent-Type': 'application/json'
                },
                body: formData
            });
        };      
    };
    
    sendForm(form1);
    sendForm(form2);
};
export default modal;