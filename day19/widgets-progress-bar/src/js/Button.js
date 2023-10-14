export class Button {
    constructor() {
        this.element = document.createElement('button')
        this.buttonCreation();
    }

    buttonCreation() {
        this.element.classList = 'button';
        this.element.textContent = 'Change the color of the background';
        
    }


}

