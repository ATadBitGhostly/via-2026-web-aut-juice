import { BasePage } from "./basePage";

export class BasketPage extends BasePage {
    static get url() {
        return '/#/basket';
    }  

    static get checkoutButton() {
        return cy.get('button#checkoutButton');
    }

}

export class SelectAddressPage extends BasePage {
    static get url() {
        return '/#/address/select';
    }

    static get addressCards() {
        return cy.get('mat-row[role="row"]');
    }

    static get continueButton() {
        return cy.get('button[aria-label="Proceed to payment selection"]');
    }

}

export class DeliveryMethodPage extends BasePage {
    static get url() {
        return '/#/delivery';
    }

    static get deliveryOptions() {
        return cy.get('mat-row[role="row"]');
    }

    static get continueButton() {
        return cy.get('button[aria-label="Proceed to delivery method selection"]');
    }

}

export class PaymentOptionsPage extends BasePage {
    static get url() {
        return '/#/payment/shop';
    }

    static get paymentOption() {
        return cy.get('mat-row[role="row"]');
    }

    static get paymentOptionRadiobutton() {
        return cy.get('input[type="radio"]');
    }

    static get continueButton() {
        return cy.get('button[aria-label="Proceed to review"]');
    }

}

export class OrderSummaryPage extends BasePage {
    static get url() {
        return '/#/order-summary';
    }

    static get checkoutButton() {
        return cy.get('#checkoutButton');
    }
}

export class OrderCompletionPage extends BasePage {
    static get url() {
        return '/#/order-completion';
    }

    static get thankYouMessage() {
        return cy.get('div.order-completion-header');
    }
}