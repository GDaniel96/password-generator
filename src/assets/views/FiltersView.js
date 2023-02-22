class FiltersView {
  constructor() {
    this.uppercaseFilter = document.getElementById("uppercase");
    this.lowercaseFilter = document.getElementById("lowercase");
    this.numbersFilter = document.getElementById("numbers");
    this.symbolsFilter = document.getElementById("symbols");

    this.uppercaseFilterActive = false;
    this.lowercaseFilterActive = false;
    this.numbersFilterActive = false;
    this.symbolsFilterActive = false;

    this.setEvents();
  }

  setEvents() {
    this.uppercaseFilter.addEventListener("change", (e) => {
      this.uppercaseFilterActive = e.target.checked;
    });
    this.lowercaseFilter.addEventListener("change", (e) => {
      this.lowercaseFilterActive = e.target.checked;
    });
    this.numbersFilter.addEventListener("change", (e) => {
      this.numbersFilterActive = e.target.checked;
    });
    this.symbolsFilter.addEventListener("change", (e) => {
      this.symbolsFilterActive = e.target.checked;
    });
  }

  getActiveFilters() {
    return {
      uppercaseFilter: this.uppercaseFilterActive,
      lowercaseFilter: this.lowercaseFilterActive,
      numbersFilter: this.numbersFilterActive,
      symbolsFilter: this.symbolsFilterActive,
    };
  }

  render() {}
}

export default FiltersView;
