import OverlappedPage from "../page_objects/OverlappedPage";

describe("Overlapped Element Test", () => {
  beforeEach(() => {
    OverlappedPage.visit();
  });

  it("User should enter and verify the text in the Name input field", () => {
    const recordedText = "Cypress is a good framework";
    OverlappedPage.enterName(recordedText);
    OverlappedPage.getNameInputValue().should("eq", recordedText);
  });
});
