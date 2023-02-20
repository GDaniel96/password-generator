import CharacterFilters from "../filters/CharacterFilters";
import Events from "../events/Events";
import Length from "../filters/Length";

class PasswordView {
  constructor() {
    this.filtersFromCharactersClass = new CharacterFilters();
    this.lengthFilterFromClass = new Length();
    this.eventHandlerFromClass = new Events();
  }

  render() {
    this.eventHandlerFromClass.copyToClipboardEvent();
  }
}

export default PasswordView;
