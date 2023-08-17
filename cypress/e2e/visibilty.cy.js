import VisibilityPage from "../page_objects/VisibilityPage";

describe("Visibility Test", () => {
  beforeEach(() => {
    VisibilityPage.visit();
  });

  it("User should check visibility of buttons after pressing Hide button", () => {
    const page = VisibilityPage;

    // Learn locators of all buttons
    const allButtons = [
      page.getHideButton(),
      page.getRemovedButton(),
      page.getZeroWidthButton(),
      page.getOverlappedButton(),
      page.getTransparentButton(),
      page.getInvisibleButton(),
      page.getNotDisplayedButton(),
      page.getOffScreenButton(),
    ];

    // Press Hide button
    page.clickHideButton();

    // Determine if other buttons are visible or not
    allButtons.forEach((button) => page.isVisible(button));
  });
});
