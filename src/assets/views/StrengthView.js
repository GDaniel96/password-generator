const sliderStrength = document.querySelector(".strength-meter > h3");
const firstStrenthBar = document.getElementById("first-bar");
const secondStrenthBar = document.getElementById("second-bar");
const thirdStrenthBar = document.getElementById("third-bar");
const fourthStrenthBar = document.getElementById("fourth-bar");

const strengthBars = document.querySelectorAll(".strength-bars");

console.log(strengthBars[0].children);
console.log(strengthBars);

class PasswordStrengthView {
  constructor() {}

  strengthTooWeak() {
    firstStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    secondStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    thirdStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    fourthStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    firstStrenthBar.classList.add("too-weak");

    sliderStrength.innerText = "TOO WEAK!";
  }

  weakStrength() {
    firstStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    secondStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    thirdStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    fourthStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    secondStrenthBar.classList.add("weak");
    firstStrenthBar.classList.add("weak");

    sliderStrength.innerText = "WEAK";
  }

  mediumStrength() {
    firstStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    secondStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    thirdStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    fourthStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    firstStrenthBar.classList.add("medium");
    secondStrenthBar.classList.add("medium");
    thirdStrenthBar.classList.add("medium");

    sliderStrength.innerText = "MEDIUM";
  }

  strongStrength() {
    firstStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    secondStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    thirdStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    fourthStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
    firstStrenthBar.classList.add("strong");
    secondStrenthBar.classList.add("strong");
    thirdStrenthBar.classList.add("strong");
    fourthStrenthBar.classList.add("strong");

    sliderStrength.innerText = "STRONG";
  }

  render(sliderValue) {
    if (sliderValue < 5) {
      this.strengthTooWeak();
    }
    if (sliderValue > 5 && sliderValue <= 9) {
      this.weakStrength();
    }
    if (sliderValue > 10 && sliderValue <= 15) {
      this.mediumStrength();
    }
    if (sliderValue > 15 && sliderValue <= 20) {
      this.strongStrength();
    }
  }
}

export default PasswordStrengthView;
