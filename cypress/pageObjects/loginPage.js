import { BasePage } from "./basePage";

export class LoginPage extends BasePage {
    static get url() {
        return '/#/login';
    }

    static get emailInput() {
        return cy.get('#email');
    }

    static get passwordInput() {
        return cy.get('#password');
    }

    static get loginButton() {
        return cy.get('#loginButton');
    }
    
    static get emailInput() {
        return cy.get('#email');
    }

    static get passwordInput() {
        return cy.get('#password');
    }

    static get notYetCustomerButton() {
        return cy.get('a[href="#/register"]');
    }

}