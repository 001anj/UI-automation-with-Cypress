class AjaxPage {
  visit() {
    cy.visit("/ajax");
  }

  getLoadDataButton() {
    return cy.get("#ajaxButton");
  }

  waitForDataToAppear() {
    return cy
      .get("#ajaxButton")
      .click()
      .then(() => {
        cy.get(".bg-success", { timeout: 16000 }).should("be.visible");
      });
  }

  getLoadedLabel() {
    return cy.get(".bg-success");
  }

  clickLoadedLabelText() {
    this.getLoadedLabel().click();
  }
}

export default new AjaxPage();
