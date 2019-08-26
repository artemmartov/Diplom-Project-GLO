let lang = 'ru';
if (lang == 'ru'){
    console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
} else if (lang == 'en'){
    //console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
}


switch (lang){
    case 'ru':
        console.log('Понедельник, Вторник, Среда, Четверг, Пятница, Суббота, Воскресенье');
        break;
    case 'en': 
        console.log('Monday, Tuesday, Wednesday, Thursday, Friday, Saturday, Sunday');
        break;
}


let arr = {
'ru': ['Понедельник', 'Вторник', 'Среда', 'Четверг', 'Пятница', 'Суббота', 'Воскресенье'],
'en': ['Monday', 'Tuesday', 'Wednesday', 'Thursday', 'Friday', 'Saturday', 'Sunday']
};
console.log(arr[lang]);


let namePerson = 'Петя';
let result = namePerson === 'Артем' ? console.log('Директор') : (namePerson === 'Максим' ? console.log('Преподаватель') : console.log('Студент')); 