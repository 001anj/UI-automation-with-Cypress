import ProgressBarPage from "../page_objects/ProgressBarPage";

describe("Progress Bar Test", () => {
  const page = new ProgressBarPage();

  beforeEach(page.visit);

  it("User should stop at 75% progress", () => {
    const maxAttempts = 4;
    let attempts = 0;

    const waitForProgress = () => {
      page.progressBar().then(($progressBar) => {
        const progressValue = parseFloat($progressBar.attr("aria-valuenow"));
        if (progressValue < 75 && attempts < maxAttempts) {
          attempts++;
          page.startButton().click();
          waitForProgress();
        } else {
          // Check if the progress is at least 75%
          cy.wait(2000);
          page.progressBar().should("have.attr", "aria-valuenow", "75");

          // Stop the progress and verify
          page.stopButton().click({ force: true });
          page.progressBar().should("have.attr", "aria-valuenow", "75");
        }
      });
    };

    page.startButton().click();
    waitForProgress();
  });
});
