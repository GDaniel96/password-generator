class PasswordDisplayView {
  constructor() {
    this.copyToClipboardButton = document.querySelector(
      ".copy-to-clipboard-button"
    );
    this.setEvents();
    this.value = "";
  }

  setEvents() {
    this.copyToClipboardButton.addEventListener("click", () => {
      this.copyPasswordToClipboard();
    });
  }

  copyPasswordToClipboard() {
    if (this.value === "") {
      alert("There is no password in the input field");
    } else {
      navigator.clipboard.writeText(this.value);
      alert("Copied to clipboard");
    }
  }
  render(password) {
    this.value = password;
    let generatedPassword = document.querySelector(".generated-password");
    generatedPassword.value = password;
  }
}

export default PasswordDisplayView;
