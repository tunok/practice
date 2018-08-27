class Options {
    constructor(height, width, bg, fontSize, textAlign) {
        this.height = height+'px';
        this.width = width+'px';
        this.bg = bg;
        this.fontSize = fontSize+'px';
        this.textAlign = textAlign;
    }
    createDiv() {
        let createdDiv = document.createElement('div');
        createdDiv.style.cssText = `height: ${this.height}; width: ${this.width}; background: ${this.bg}; fontSize: ${this.fontSize}; textAlign: ${this.textAlign}`;
        document.body.appendChild(createdDiv);
    };
}
let newDiv = new Options(100, 100, 'green', 16, 'center');
console.log(newDiv.createDiv());