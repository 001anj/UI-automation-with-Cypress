class SampleAppPage {
  visit() {
    cy.visit("/sampleapp");
  }

  // Method to fill in the form
  fillInForm(username, password) {
    cy.get('input[name="UserName"]').type(username);
    cy.get('input[name="Password"]').type(password);
  }

  // Method to submit the form
  submitForm() {
    cy.get("#login").click();
  }

  successfulMessage() {
    return cy.get("#loginstatus").invoke("text");
  }
}

export default new SampleAppPage();
