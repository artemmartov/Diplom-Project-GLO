import {clearInput, phoneValidation, cyrillic, phoneChecking} from './validationForm';
const sendModalForm = (form, check=false) => {
    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Сообщение отправлено!';

    const inputs = form.querySelectorAll('input');
    const statusMessage = document.createElement('div');

    statusMessage.style.cssText = 'font-size: 2rem;';

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
        form.appendChild(statusMessage);
        const formData = new FormData(form);
        let body = {};
        if(check){
            if(!check.checked){
                alert('Подтвердите согласие на обработку персональных данных!');
            } else {
                console.log('Проверка пройдена');
            }
        } else {
            console.log('проверка не пройдена');
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
       
        statusMessage.textContent = loadMessage;
  
        postData(body)
            .then((response)=>{
                if(response.status !== 200){
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                clearInput(inputs);
            })
            .catch((error) => {
                statusMessage.textContent = errorMessage;
                console.error();
            });
    });
};

export default sendModalForm;