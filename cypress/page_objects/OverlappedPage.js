class OverlappedPage {
  visit() {
    cy.visit("/overlapped");
  }

  getNameInput() {
    return cy.get("#name");
  }

  enterName(name) {
    this.getNameInput().scrollIntoView().type(name);
  }

  getNameInputValue() {
    return this.getNameInput().invoke("val");
  }
}

export default new OverlappedPage();
