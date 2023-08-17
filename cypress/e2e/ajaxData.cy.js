import AjaxPage from "../page_objects/AjaxPage";

describe("AJAX Data test", () => {
  beforeEach(() => {
    AjaxPage.visit();
  });

  it("User should wait for label text to appear after clicking the button", () => {
    AjaxPage.waitForDataToAppear();
    AjaxPage.getLoadedLabel().should("be.visible");
  });
});
