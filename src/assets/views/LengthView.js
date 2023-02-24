import StrengthView from "./StrengthView";

const minimumPasswordLength = 1;
const maximumPasswordLength = 20;

class PasswordLengthView {
  constructor() {
    this.slider = document.querySelector(".character-length > .slider");
    this.strengthView = new StrengthView();
    this.passwordLengthValue = document.querySelector(
      ".character-length > #value"
    );
    // this.strengthBars = document.querySelectorAll(".strength-meter > div");
    this.setEvents();
    this.render();
  }

  getValue() {
    return this.sliderValue;
  }

  setEvents() {
    this.slider.addEventListener("input", (e) => {
      this.sliderValue = e.target.value;
      this.render(e.target.value);
    });
  }

  updateLengthPasswordValue() {
    this.passwordLengthValue.innerText = this.sliderValue;
  }

  updateSliderColor() {
    this.slider.style.backgroundSize =
      ((this.sliderValue - minimumPasswordLength) * 100) /
        (maximumPasswordLength - minimumPasswordLength) +
      "% 100%";
  }

  render(passwordLength) {
    this.sliderValue = passwordLength;
    this.updateLengthPasswordValue();
    this.updateSliderColor();
    this.strengthView.render(passwordLength);
  }
}

export default PasswordLengthView;
