const sendForm = () => {
    // валидация 

    document.addEventListener('input', () => {
        let target = event.target,
            phoneInputs = target.closest('.form-phone'),
            topInput = target.closest('#form2-name'),
            nameInputs = target.closest('.form-name'),
            messageInput = target.closest('.mess');
        if (phoneInputs){
            phoneInputs.value = phoneInputs.value.replace(/[^\d+]/g, '');
        }

        let cyrilic = (x) => {
            let input = x;
            input.value = input.value.replace(/[^А-яЯ-яЁё\s]/g, '');
        };

        if (nameInputs) {
            cyrilic(nameInputs);
        }
        if (topInput) {
            cyrilic(topInput);
        }
        if (messageInput) {
            cyrilic(messageInput);
        }
    });

    const errorMessage = 'Что-то пошло не так...',
        loadMessage = 'Загрузка...',
        successMessage = 'Спасибо, мы скоро с вами свяжемся!';

    const form = document.getElementById('form1'),
        input = document.querySelectorAll('input');
        
    const statusMessage = document.createElement('div');
    statusMessage.style.cssText = 'font-size: 2rem;';

    document.body.addEventListener('submit', (event) => {
        let target = event.target,
            getForm = target.closest('form');
            getForm.appendChild(statusMessage);

        event.preventDefault();
        statusMessage.textContent = loadMessage;
        const formData = new FormData(getForm);
        let body = {};
        formData.forEach ((val, key) => {
            body[key] = val;
        });
        input.forEach((elem) => {
            elem.value = '';
        });
        postData(body)
            .then((response) => {
                if (response.status !== 200) {
                    throw new Error('status network not 200');
                }
                statusMessage.textContent = successMessage;
                const formInputs = [...document.querySelectorAll('input')];
                formInputs.forEach(item => {
                    if (item.value !== '') {
                    item.value = '';
                    }
                });
            })
        .catch((error) => {
          statusMessage.textContent = errorMessage;
          console.error(error);
        });
    });

    const postData = (body) => {
        return fetch('./server.php', {
            method: 'POST',
            headers: {
                'Content-Type': 'application/json'
            },
            body: JSON.stringify(body)
        }); 
    };      
};

export default sendForm;