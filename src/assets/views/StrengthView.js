const sliderStrength = document.querySelector(".strength-meter > h3");
const firstStrenthBar = document.getElementById("first-bar");
const secondStrenthBar = document.getElementById("second-bar");
const thirdStrenthBar = document.getElementById("third-bar");
const fourthStrenthBar = document.getElementById("fourth-bar");

class PasswordStrengthView {
  constructor() {}

  render(sliderValue) {
    if (sliderValue < 5) {
      firstStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      secondStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      thirdStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      fourthStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      firstStrenthBar.classList.add("too-weak");

      sliderStrength.innerText = "TOO WEAK!";
    }
    if (sliderValue > 5 && sliderValue <= 9) {
      firstStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      secondStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      thirdStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      fourthStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      secondStrenthBar.classList.add("weak");
      firstStrenthBar.classList.add("weak");
      sliderStrength.innerText = "WEAK";
    }
    if (sliderValue > 10 && sliderValue <= 15) {
      firstStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      secondStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      thirdStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      fourthStrenthBar.classList.remove("too-weak", "weak", "medium", "strong");
      firstStrenthBar.classList.add("medium");
      secondStrenthBar.classList.add("medium");
      thirdStrenthBar.classList.add("medium");
      sliderStrength.innerText = "MEDIUM";
    }
    if (sliderValue > 15 && sliderValue <= 20) {
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
  }
}

export default PasswordStrengthView;
