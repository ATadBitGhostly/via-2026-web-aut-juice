import { BasePage } from "./basePage";

export class HomePage extends BasePage {
    static get url() {
        return '/#/';
    }

    static get dismissButton() {
        return cy.get('[aria-label="Close Welcome Banner"]');
    }

    static get meWantItButton() {
        return cy.get('[aria-label="dismiss cookie message"]');
    }

    static get accountButton() {
        return cy.get('#navbarAccount');
    }

    static get loginButton() {
        return cy.get('#navbarLoginButton');
    }

    static get userAccountButton() {
        return cy.get('button[aria-label="Go to user profile"]');
    }

    static get searchIcon() {
        return cy.get('#searchQuery');
    }

    static get searchInput() {
        return cy.get('#mat-input-1');
    }

    static get productCards() {
        return cy.get('mat-card');
    }

    static get productCardsMenu() {
        return cy.get('mat-dialog-content');
    }
    
    static get productMenuCloseButton() {
        return cy.get('button[aria-label="Close Dialog"]');
    }

    static get reviewExpandButton() {
        return cy.get('[aria-label="Expand for Reviews"]');
    }

    static get reviewInput() {
        return cy.get('[aria-label="Text field to review a product"]');
    }

    static get reviewSubmitButton() {
        return cy.get('#submitButton');
    }

    static get itemsPerPageMenu() {
        return cy.get('mat-mdc-paginator-touch-target');
    }

    static get itemsPerPageMenuOptions() {
        return cy.get('mat-option');
    }
}