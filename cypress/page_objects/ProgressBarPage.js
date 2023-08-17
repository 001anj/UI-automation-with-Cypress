// cypress/page_objects/UITestingPlaygroundPage.js
class ProgressBarPage {
  visit() {
    cy.visit("/progressbar");
  }

  startButton() {
    return cy.get("#startButton");
  }

  stopButton() {
    return cy.get("#stopButton");
  }

  progressBar() {
    return cy.get("#progressBar");
  }
}

export default ProgressBarPage;
