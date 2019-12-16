describe("Mi primer test ", function() {
  it("paraversifunciona", function() {
    expect(true).to.equal(true);
  });

  it("navegemos de una categoria a una foto", function() {
    cy.visit("/pet/1");
    cy.get("article");
  });
});
