import DynamicTablePage from "../page_objects/DynamicTablePage";

describe("Dynamic Table Test", () => {
  beforeEach(() => {
    DynamicTablePage.visit();
  });

  it("User should compare the CPU load value with the value in the yellow label", () => {
    // Find the row containing "Chrome"
    DynamicTablePage.findRowContainingText("Chrome").then((chromeRow) => {
      // Get the CPU load value from the row
      const cpuLoadValue = DynamicTablePage.getCpuLoadValue(chromeRow);

      // Get the value from the yellow label
      DynamicTablePage.getYellowLabelValue().then((yellowLabelValue) => {
        // Assert that the extracted value is close to the CPU load value
        expect(yellowLabelValue).to.deep.equal(cpuLoadValue);
      });
    });
  });
});
