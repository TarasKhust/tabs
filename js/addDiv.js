'use strict';
class Options {
    constructor (height, width, bg, fontSize, textAlign, className, text) {
        this.height = height;
        this.width = width;
        this.bg = bg;
        this.fontSize = fontSize;
        this.textAlign = textAlign;
        this.className = className;
        this.text = text;

    }

    createAnItemOnThePage () {
        let inBody = document.querySelector('body');
        let fragment = document.createDocumentFragment();
        let div = document.createElement('div');
        fragment.appendChild(div);
        inBody.appendChild(fragment);
        div.style.height = this.bg;
        div.style.width = this.width;
        div.style.backgroundColor = this.bg;
        div.style.fontSize = this.fontSize;
        div.style.textAlign = this.textAlign;
        div.className = this.className;
        div.textContent = this.text;
    }

    createDiv() {
        let elem = document.createElement('div');
        document.body.appendChild(elem);
        elem.className = this.className;
        elem.textContent = this.text;
        let param = `height:${this.height}px; width:${this.width}px; background-color:${this.bg}; font-size:${this.fontSize}px; text-align:${this.textAlign}`;
        elem.style.cssText = param;
    }

}

let classStyle = {
    height: '10px',
    width: '20px',
    bg: 'red',
    fontSize: '16px',
    textAlign: 'center',
    className: 'Welcome',
    text: 'olala'
};

const newDiv = new Options(300, 350, 'red', 16, 'center', 'Welcome1', 'China');
const newDiv1 = new Options('10px', '10px', 'red', '6px', 'center', 'Welcome3', 'China');

newDiv.createAnItemOnThePage.call(classStyle);
newDiv.createAnItemOnThePage();
newDiv1.createAnItemOnThePage();
newDiv.createDiv();