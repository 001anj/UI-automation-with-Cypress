import TextInputPage from "../page_objects/TextInputPage";

describe("Text Input Test", () => {
  beforeEach(() => {
    TextInputPage.visit();
  });

  it("should change the button name after entering text and clicking the button", () => {
    const defaultText =
      "Button That Should Change it's Name Based on Input Value";
    const newText = "Hello, Google!";

    // Set text in the input field
    TextInputPage.setText(newText);

    // Click the button
    TextInputPage.clickButton();

    // Assert that the button name has changed
    TextInputPage.getButtonName().should("not.contain", defaultText);
    TextInputPage.getButtonName().should("eq", `${newText}`);
  });
});
