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
        firstStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        secondStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        thirdStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        fourthStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        firstStrenthBar.classList.add("too-weak");

        sliderStrength.innerText = "TOO WEAK!";
      }
      if (this.slider.value > 5 && this.slider.value <= 9) {
        firstStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        secondStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        thirdStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        fourthStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        secondStrenthBar.classList.add("weak");
        firstStrenthBar.classList.add("weak");
        sliderStrength.innerText = "WEAK";
      }
      if (this.slider.value > 10 && this.slider.value <= 15) {
        firstStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        secondStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        thirdStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        fourthStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        firstStrenthBar.classList.add("medium");
        secondStrenthBar.classList.add("medium");
        thirdStrenthBar.classList.add("medium");
        sliderStrength.innerText = "MEDIUM";
      }
      if (this.slider.value > 15 && this.slider.value <= 20) {
        firstStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        secondStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        thirdStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        fourthStrenthBar.classList.remove(
          "too-weak",
          "weak",
          "medium",
          "strong"
        );
        firstStrenthBar.classList.add("strong");
        secondStrenthBar.classList.add("strong");
        thirdStrenthBar.classList.add("strong");
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
