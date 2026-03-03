import { BasePage } from "./basePage";

export class RegisterPage extends BasePage {
    static get url() {
        return '/#/register';
    }

    static get emailInput() {
        return cy.get('#emailControl');
    }

    static get passwordInput() {
        return cy.get('#passwordControl');
    }

    static get repeatPasswordInput() {
        return cy.get('#repeatPasswordControl');
    }

    static get securityQuestionMenu() {
        return cy.get('[name="securityQuestion"]');
    }

    static get securityQuestionOptions() {
        return cy.get('[role="option"]');
    }

    static get securityAnswerInput() {
        return cy.get('#securityAnswerControl');
    }

    static get registerButton() {
        return cy.get('#registerButton');
    }
    

}