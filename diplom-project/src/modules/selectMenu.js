const selectMenu = () => {
    const formWrapper = document.querySelector('.form-wrapper'),
        clubSelect = document.querySelector('.club-select'),
        clubList = clubSelect.querySelector('.club-select ul');

    clubSelect.addEventListener('click', () => {
        if (!clubList.style.display || clubList.style.display === 'none'){
            clubList.style.display = 'block';
        } else {
            clubList.style.display = 'none';
        }
    });
};

export default selectMenu;