
let task = function(a){
    if (typeof a === 'string') {
        let aNotSpace = a.trim();
        if (aNotSpace.length > 30) {
            console.log(aNotSpace.substring(0, 30)+'...');
        } else if (aNotSpace.length < 30) {
            console.log(aNotSpace);
        } 
    } else {
    alert('Не строка!');
    } 
}


task(65354);






