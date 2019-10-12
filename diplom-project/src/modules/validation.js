const validation = () => {
    let formPhone = document.getElementsByName('phone');
    formPhone.forEach((e) => {
        e.addEventListener('input', () => {
        e.value = e.value.replace(/[^0-9+]/, '');
        });
    });

    let formName = document.getElementsByName('name');
    formName.forEach((e) => {
        e.addEventListener('input', () => {
        e.value = e.value.replace(/[^А-Яа-яЁё ]/, '');
        });
    });
    
};

export default validation;