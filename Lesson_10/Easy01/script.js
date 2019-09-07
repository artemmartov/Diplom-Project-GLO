'use strict';

let DomElement = function(selector, height=80, width=80, bg='green', fontSize='26px'){
    this.selector = selector;
    this.height = height;
    this.width = width;
    this.bg = bg;
    this.fontSize = fontSize;
    this.valid = function(a='введите'){
        if (this.selector.charAt(0) === '.'){
            let div  = document.createElement('div');
            div.textContent = a;
            div.style.cssText = `height: ${this.height};
            width: ${this.width};
            background-color: ${this.bg}; 
            font-size: ${this.fontSize};
            `;
            document.body.appendChild(div);
        } else if (this.selector.charAt(0) === '#'){
            let p  = document.createElement('p');
            p.textContent = a;
            p.style.cssText = `height: ${this.height};
            width: ${this.width};
            background-color: ${this.bg}; 
            font-size: ${this.fontSize}`;
            document.body.appendChild(p);

        }
    };
};
    
let DomElement1 = new DomElement('.','50px', '50px', 'green', '16px');
let DomElement2 = new DomElement('#','100px', '70px', 'red', '30px');
console.log(DomElement1);
DomElement1.valid();
DomElement2.valid();


