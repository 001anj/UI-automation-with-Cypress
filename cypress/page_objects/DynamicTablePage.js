class DynamicTablePage {
  visit() {
    cy.visit("/dynamictable");
  }

  findRowContainingText(text) {
    return cy.contains('[role="cell"]', text).parent('[role="row"]');
  }

  getCpuLoadValue(row) {
    const cpuLoadCell = row.find('[role="cell"]').filter((index, cell) => {
      return (
        Cypress.$(cell).text().includes("%") ||
        Cypress.$(cell).text().includes("%")
      );
    });

    return parseFloat(cpuLoadCell.text());
  }

  getYellowLabelValue() {
    return cy
      .get("p.bg-warning")
      .invoke("text")
      .then((text) => {
        // Use regular expression to extract the value "2.9" from the text
        return parseFloat(text.match(/\d+\.\d+/)[0]);
      });
  }
}

export default new DynamicTablePage();
