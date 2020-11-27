it("loads", () => {
    cy.visit("/");
    cy.get(".app").should("have.length", 1).contains("redux");
});
