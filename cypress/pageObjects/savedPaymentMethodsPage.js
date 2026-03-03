import { BasePage } from "./basePage";

export class SavedPaymentMethodsPage extends BasePage {
    static get url() {
        return '';
    }

    static get addNewCardButton() {
        return cy.get('div mat-expansion-panel');
    }

    static get inputName() {
        return cy.get('#mat-input-2');
    }

    static get inputCardNum() {
        return cy.get('#mat-input-3');
    }

    static get inputMonth() {
        return cy.get('select#mat-input-4');
    }

    static get inputYear() {
        return cy.get('select#mat-input-5');
    }

    static get submitButton() {
        return cy.get('button#submitButton');
    }

    static get confirmAddition() {
        return cy.get('mat-row');
    }

    static get confirmAdditionCard() {
        return cy.get('mat-cell.mat-column-Number');
    }
}