export class BasePage {
    static visit() {
        cy.visit(this.url);
    }

}