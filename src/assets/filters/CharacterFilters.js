import Length from "./Length";

class CharacterFilters {
  constructor() {
    this.passwordLengthClass = new Length();
  }

  verifyActiveFilters() {
    const uppercase = document.getElementById("uppercase");
    const lowercase = document.getElementById("lowercase");
    const numbers = document.getElementById("numbers");
    const symbols = document.getElementById("symbols");

    if (
      uppercase.checked === false &&
      lowercase.checked === false &&
      numbers.checked === false &&
      symbols.checked === false
    ) {
      alert("There are no filters active");
    } else {
      const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
      const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
      const numbersCharacters = "0123456789";
      const symbolsCharacters = "@#&(§!-)^$*%+=/?";

      let characters = "";
      let lengthOfPassword = this.passwordLengthClass.sliderValue.innerHTML;
      if (uppercase.checked === true) {
        characters += uppercaseCharacters;
      }
      if (lowercase.checked === true) {
        characters += lowercaseCharacters;
      }
      if (numbers.checked === true) {
        characters += numbersCharacters;
      }
      if (symbols.checked === true) {
        characters += symbolsCharacters;
      }

      let password = "";
      let passwordLength = lengthOfPassword;

      const array = new Uint32Array(lengthOfPassword);
      window.crypto.getRandomValues(array);
      for (let i = 0; i < passwordLength; i++) {
        password += characters[array[i] % characters.length];
      }

      let generatedPassword = document.querySelector(".generated-password");
      generatedPassword.value = password;
    }
  }
}

export default CharacterFilters;
