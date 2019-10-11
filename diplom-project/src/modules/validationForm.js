export const clearInput = (inputs) => {
    inputs.forEach((val, key) => {
        if(val.type === 'text' || val.type === 'tel')
            val.value = '';
    });
};

export const cyrillic = (str) => {
    let regexp = /[a-яА-Я,\s]/i;
    regexp = /[А-яё/B]/i;
    if(regexp.test(str) || str == ' '){
        return true;
    } else {
        return false;
    }
};

export const phoneValidation = (str) => {
    const regex = /^((8|\+7)[\-]?)?(\(?\d{3}\)?[\-]?)?[\d\-]{7,18}$/;
    const subst = "+$1 ($2) $3-$4-$5";
    return regex.test(str);
};

export const mailValidation = (str) => {
    const re = /^[\w]{1}[\w-\.]*@[\w-]+\.[a-z]{2,4}$/i;
    return re.test(str);
};

export const phoneChecking = (phone) => {
    let regexp = /[0-9/B]/i;
    if(regexp.test(phone))
        return true;
    else
        return false;
};
