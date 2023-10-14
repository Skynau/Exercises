export class ProgressBar {
  constructor(value, maxValue, colorKnob) {
    this.value = value;
    this.gradient = 1;
    this.maxValue = maxValue;
    this.element = document.createElement('div');
    this.colorKnob = colorKnob;
    this.refreshElement();
  }

  refreshElement() {
    this.element.innerHTML = `
      <div class="label">
        ${this.value}/${this.maxValue}
      </div>
      <div class="progress">
         <div class="btn-minus"></div>
         <div class="bar">
           <div style="width: ${this.value / this.maxValue * 100}%" class="${this.colorKnob}"></div>
         </div>
         <div class="btn-plus"></div>
      </div>
    `;
    
    const plusBtn = this.element.querySelector('.btn-plus');
    plusBtn.addEventListener('click', () => {
      this.value = Math.min(this.maxValue, this.value + this.gradient);
      this.refreshElement();
    });

    const minusBtn = this.element.querySelector('.btn-minus');
    minusBtn.addEventListener('click', () => {
      this.value = Math.max(0, this.value - this.gradient);
      this.refreshElement();
    })
  }
}
