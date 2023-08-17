import SampleAppPage from "../page_objects/SampleAppPage";

describe("Sample App Form Test", () => {
  beforeEach(() => {
    SampleAppPage.visit();
  });

  it("should fill in and submit the form with valid credentials", () => {
    const page = SampleAppPage;
    const username = "cypress";
    const password = "pwd";

    // Fill in the form with valid credentials
    page.fillInForm(username, password);

    // Submit the form
    page.submitForm();
    page.successfulMessage().should("contain", `Welcome, ${username}!`);
  });
});
