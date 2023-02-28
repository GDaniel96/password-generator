const sliderStrength = document.querySelector(".strength-meter > h3");

const strengthBars = document.querySelectorAll(".strength-bars > div");

function mapRange(value, low1, high1, low2, high2) {
  return Math.floor(low2 + ((high2 - low2) * (value - low1)) / (high1 - low1));
}

const classNames = ["too-weak", "weak", "medium", "strong"];

const labels = ["TOO-WEAK", "WEAK", "MEDIUM", "STRONG"];

class PasswordStrengthView {
  constructor() {
    this.strength = 0;
    this.label = "";
  }

  removeClassesFromElements() {
    strengthBars.forEach((element) => {
      element.classList.remove("weak", "medium", "strong");
    });
  }

  updateLabel(value) {
    sliderStrength.innerText = labels[value];
  }

  updateStrengthBar(value) {
    this.removeClassesFromElements();
    strengthBars.forEach((bar, index) => {
      if (index <= value) {
        bar.classList.add(classNames[value]);
      }
    });
  }

  render(sliderValue) {
    const remappedValue = mapRange(sliderValue, 1, 20, 0, 3);
    this.updateStrengthBar(remappedValue);
    this.updateLabel(remappedValue);
  }
}

export default PasswordStrengthView;
