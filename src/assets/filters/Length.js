class Length {
  constructor() {
    this.slider = document.querySelector(".character-length > .slider");
    this.sliderValue = document.querySelector(".character-length > #value");
  }

  sliderController() {
    this.sliderValue.innerHTML = this.slider.value;
    const sliderStrength = document.querySelector(".strength-meter > h3");

    const firstStrenthBar = document.getElementById("first-bar");
    const secondStrenthBar = document.getElementById("second-bar");
    const thirdStrenthBar = document.getElementById("third-bar");
    const fourthStrenthBar = document.getElementById("fourth-bar");

    this.slider.addEventListener("input", (e) => {
      this.sliderValue.innerHTML = e.target.value;
      if (this.slider.value < 5) {
        firstStrenthBar.classList.add("too-weak");
        secondStrenthBar.classList.remove("weak");
        thirdStrenthBar.classList.remove("medium");
        fourthStrenthBar.classList.remove("strong");
        sliderStrength.innerText = "TOO WEAK!";
      }
      if (this.slider.value > 5 && this.slider.value <= 9) {
        secondStrenthBar.classList.add("weak");
        firstStrenthBar.classList.add("too-weak");
        thirdStrenthBar.classList.remove("medium");
        fourthStrenthBar.classList.remove("strong");
        sliderStrength.innerText = "WEAK";
      }
      if (this.slider.value > 10 && this.slider.value <= 15) {
        thirdStrenthBar.classList.add("medium");
        fourthStrenthBar.classList.remove("strong");
        sliderStrength.innerText = "MEDIUM";
      }
      if (this.slider.value > 15 && this.slider.value <= 20) {
        fourthStrenthBar.classList.add("strong");
        sliderStrength.innerText = "STRONG";
      }
      this.handleInputChange(e);
    });
  }

  handleInputChange(e) {
    let target = e.target;
    if (e.target.type !== "range") {
      target = document.getElementById("range");
    }
    const min = target.min;
    const max = target.max;
    const val = target.value;

    target.style.backgroundSize = ((val - min) * 100) / (max - min) + "% 100%";
  }
}

export default Length;
