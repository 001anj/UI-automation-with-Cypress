class VisibilityPage {
  visit() {
    cy.visit("/visibility");
  }

  getRemovedButton() {
    return cy.get("#removedButton");
  }

  getZeroWidthButton() {
    return cy.get("#zeroWidthButton");
  }

  getOverlappedButton() {
    return cy.get("#overlappedButton");
  }

  getTransparentButton() {
    return cy.get("#transparentButton");
  }

  getInvisibleButton() {
    return cy.get("#invisibleButton");
  }

  getNotDisplayedButton() {
    return cy.get("#notdisplayedButton");
  }

  getOffScreenButton() {
    return cy.get("#offscreenButton");
  }

  getHideButton() {
    return cy.get("#hideButton");
  }

  clickHideButton() {
    this.getHideButton().click();
  }

  // Additional methods to check specific visibility conditions can be added here
  isVisible(element) {
    return element.should("be.visible");
  }

  isHidden(element) {
    return element.should("not.be.visible");
  }
}

export default new VisibilityPage();
