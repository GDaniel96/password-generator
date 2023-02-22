const minimumPasswordLength = 1;
const maximumPasswordLength = 20;

class PasswordLengthView {
  constructor() {
    this.slider = document.querySelector(".character-length > .slider");

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
      // this.updatePasswordStrengthView();
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
  }
}

export default PasswordLengthView;
