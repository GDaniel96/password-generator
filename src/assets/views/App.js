import PasswordDisplayView from "./DisplayView";
import PasswordLengthView from "./LengthView";
import FiltersView from "./FiltersView";

const uppercaseCharacters = "ABCDEFGHIJKLMNOPQRSTUVWXYZ";
const lowercaseCharacters = "abcdefghijklmnopqrstuvwxyz";
const numbersCharacters = "0123456789";
const symbolsCharacters = "@#&(§!-)^$*%+=/?";

class App {
  constructor() {
    this.displayView = new PasswordDisplayView();
    this.lengthView = new PasswordLengthView();
    this.filtersView = new FiltersView();
    this.charactersHaystack = "";
    this.password = "";
    this.passwordLength = 10;

    this.setEvents();
  }

  setEvents() {
    const generatePasswordButton = document.querySelector(
      ".generate-password-button"
    );

    generatePasswordButton.addEventListener("click", () => {
      this.generatePassword();
    });
  }

  generatePassword() {
    const activeFilters = this.filtersView.getActiveFilters();
    if (
      !activeFilters.lowercaseFilter &&
      !activeFilters.uppercaseFilter &&
      !activeFilters.numbersFilter &&
      !activeFilters.symbolsFilter
    ) {
      alert("There are no filters active");
      return;
    }

    this.populateCharacterHaystack(activeFilters);

    let lengthOfPassword = this.lengthView.getValue();

    this.password = this.getRandomPassword(lengthOfPassword);
    this.updateLengthOfPassword();
    this.render();
  }

  getRandomPassword(lengthOfPassword) {
    const array = new Uint32Array(lengthOfPassword);

    window.crypto.getRandomValues(array);
    let password = "";
    for (let i = 0; i < lengthOfPassword; i++) {
      const characterIndex = array[i] % this.charactersHaystack.length;
      password += this.charactersHaystack[characterIndex];
    }
    return password;
  }

  populateCharacterHaystack(activeFilters) {
    this.charactersHaystack = "";
    if (activeFilters.lowercaseFilter === true) {
      this.charactersHaystack += lowercaseCharacters;
    }
    if (activeFilters.uppercaseFilter === true) {
      this.charactersHaystack += uppercaseCharacters;
    }
    if (activeFilters.numbersFilter === true) {
      this.charactersHaystack += numbersCharacters;
    }
    if (activeFilters.symbolsFilter === true) {
      this.charactersHaystack += symbolsCharacters;
    }
  }

  updateLengthOfPassword() {
    this.passwordLength = this.lengthView.getValue();
    return this.passwordLength;
  }

  render() {
    this.displayView.render(this.password);
    this.lengthView.render(this.passwordLength);
  }
}

export default App;
