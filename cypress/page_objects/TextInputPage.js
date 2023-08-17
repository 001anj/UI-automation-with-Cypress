class TextInputPage {
  visit() {
    cy.visit("/textinput");
  }

  // Getters for the input field and the button
  getInputField() {
    return cy.get("#newButtonName");
  }

  getButton() {
    return cy.get("#updatingButton");
  }

  // Set text in the input field
  setText(text) {
    this.getInputField().clear().type(text);
  }

  // Click the button
  clickButton() {
    this.getButton().click();
  }

  // Get the button name
  getButtonName() {
    return this.getButton().invoke("text");
  }
}

export default new TextInputPage();
