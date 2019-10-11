import openPopUp from './openPopUp';
import {clearInput, phoneValidation, cyrillic, phoneChecking} from './validationForm';

const sendPageForm = (form, check=false) => {
    const   modalHead = document.querySelector('#thanks h4'),
            modalText = document.querySelector('#thanks p'),
            errorMessage = 'Что-то пошло не так...',
            successMessage = 'Сообщение отправлено!';

    const inputs = form.querySelectorAll('input');

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-type': 'application/json'
            },
            body: JSON.stringify(body),
        });
    };

    const validBan = () => {
        form.addEventListener('keydown', (event) => {
            const target = event.target;
            if(target.matches('input[name=name]')){
                if(cyrillic(event.key) !== true){
                    event.preventDefault();
                    return false;
                }
            }
            if(target.matches('input[name=phone]')){
                if(phoneChecking(event.key) !== true){
                    event.preventDefault();
                    return false;
                }
            }
        });
    };
    validBan();

    form.addEventListener('submit', (event) => {
        event.preventDefault();
        const formData = new FormData(form);
        let body = {};
        if(check){
            if(!check.checked){
                alert('Подтвердите согласие на обработку персональных данных!');
            } else {
                console.log('Проверка пройдена');
            }
        } else {
            console.log('Проверка не пройдена');
        }


        formData.forEach((val, key) => {
            body[key] = val;
        });
        if (body.phone){
            if(!phoneValidation(body.phone)){
                alert('Телефон введен неправильно!');
                return false;
            }
            console.log('Отлично!');
        }

        postData(body)
            .then((response)=>{
                if(response.status !== 200){
                    modalHead.textContent = `Произошла ошибка`;
                    modalText.innerHTML = `
                        Ваша заявка не отправлена.
                    `;
                    openPopUp(false, document.getElementById('thanks'));
                    return false;
                }
                modalHead.textContent = `Спасибо!`;
                modalText.innerHTML = 'Ваша заявка отправлена! Мы свяжемся с вами в ближайшее время.';

                openPopUp(false, document.getElementById('thanks'));
                clearInput(inputs);
            })
            .catch((error) => {
                modalHead.textContent = `Произошла ошибка`;
                modalText.innerHTML = `
                        Ваша заявка не отправлена.
                    `;
                openPopUp(false, document.getElementById('thanks'));
                clearInput(inputs);
            });
    });

};

export default sendPageForm;