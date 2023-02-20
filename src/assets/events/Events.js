import CharacterFilters from "../filters/CharacterFilters";

class Events {
  constructor() {}

  setEvents() {
    const copyToClipboard = document.getElementById("copy-to-clipboard");
    const characterFilters = new CharacterFilters();
    const generatePasswordButton = document.querySelector(
      ".generate-password-button"
    );
    const passwordGenetared = document.querySelector(".generated-password");

    generatePasswordButton.addEventListener("click", () => {
      characterFilters.verifyActiveFilters();
    });

    copyToClipboard.addEventListener("click", () => {
      if (passwordGenetared.value === "") {
        alert("There is no password in the input field");
      } else {
        passwordGenetared.select();
        passwordGenetared.setSelectionRange(0, 99999);

        navigator.clipboard.writeText(passwordGenetared.value);

        alert("Copied to clipboard");
      }
    });
  }
}

export default Events;
