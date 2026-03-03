import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import { RegisterPage } from "../pageObjects/registerPage";
import { BasketPage, SelectAddressPage, DeliveryMethodPage, PaymentOptionsPage, OrderSummaryPage, OrderCompletionPage } from "../pageObjects/paymentOptionPages";
import { SavedAddressesPage, CreateAddressPage } from "../pageObjects/addressRelatedPages";
import { SavedPaymentMethodsPage } from "../pageObjects/savedPaymentMethodsPage"


describe("Juice-shop scenarios", () => {
  context("Without auto login", () => {
    beforeEach(() => {
      HomePage.visit();
      HomePage.dismissButton.click();
      HomePage.meWantItButton.click();
    });

    it("Login", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Click Login button
      HomePage.loginButton.click();
      // Set email value to "demo"
      LoginPage.emailInput.type("demo");
      // Set password value to "demo"
      LoginPage.passwordInput.type("demo");
      // Click Log in
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that "demo" account name appears in the menu section
      HomePage.userAccountButton.should("contain", "demo");
    });

    it("Registration", () => {
      // Click Account button
      HomePage.accountButton.click();
      // Login button
      HomePage.loginButton.click();
      // Click "Not yet a customer?"
      LoginPage.notYetCustomerButton.click();
      // Find - how to generate random number in JS
      // Use that number to genarate unique email address, e.g.: email_7584@ebox.com
      // Save that email address to some variable
      const email = `email_${Math.floor(Math.random() * 10000)}@ebox.com`;
      const password = "randomPassword0_+";
      // Fill in password field and repeat password field with same password
      RegisterPage.emailInput.type(email);
      RegisterPage.passwordInput.type(password);
      RegisterPage.repeatPasswordInput.type(password);
      // Click on Security Question menu
      RegisterPage.securityQuestionMenu.click();
      // Select  "Name of your favorite pet?"
      RegisterPage.securityQuestionOptions.contains("Name of your favorite pet?").click();
      // Fill in answer
      RegisterPage.securityAnswerInput.type("Katerina");
      // Click Register button
      RegisterPage.registerButton.click();
      // Set email value to previously created email
      LoginPage.emailInput.type(email);
      // Set password value to previously used password value
      LoginPage.passwordInput.type(password);
      // Click login button
      LoginPage.loginButton.click();
      // Click Account button
      HomePage.accountButton.click();
      // Validate that account name (with previously created email address) appears in the menu section
      HomePage.userAccountButton.should("contain", email);
    });
  });

  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    it("Search and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Lemon
      HomePage.searchInput.type("Lemon{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCards.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."
      HomePage.productCardsMenu.contains("Sour but full of vitamins.").should("be.visible");
    });

      // Create scenario - Search 500ml and validate Lemon, while having multiple cards
    it("Search 500ml and validate Lemon", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchInput.type("500ml{enter}");
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCards.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."  
      HomePage.productCardsMenu.contains("Sour but full of vitamins.").should("be.visible");
    });

    // Create scenario - Search 500ml and validate cards
    it("Search 500ml and validate cards", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for 500ml
      HomePage.searchInput.type("500ml{enter}");
      // Select a product card - Eggfruit Juice (500ml)
      HomePage.productCards.contains("Eggfruit Juice (500ml)").click();
      // Validate that the card (should) contains "Now with even more exotic flavour."
      HomePage.productCardsMenu.contains("Now with even more exotic flavour.").should("be.visible");
      // Close the card
      HomePage.productMenuCloseButton.click();
      // Select a product card - Lemon Juice (500ml)
      HomePage.productCards.contains("Lemon Juice (500ml)").click();
      // Validate that the card (should) contains "Sour but full of vitamins."  
      HomePage.productCardsMenu.contains("Sour but full of vitamins.").should("be.visible");
      // Close the card
      HomePage.productMenuCloseButton.click();
      // Select a product card - Strawberry Juice (500ml)
      HomePage.productCards.contains("Strawberry Juice (500ml)").click();
      // Validate that the card (should) contains "Sweet & tasty!"
      HomePage.productCardsMenu.contains("Sweet & tasty!").should("be.visible");
    });

    // Create scenario - Read a review
    it("Read reviews", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for King
      HomePage.searchInput.type("King{enter}");
      // Select a product card - OWASP Juice Shop "King of the Hill" Facemask
      HomePage.productCards.contains("OWASP Juice Shop \"King of the Hill\" Facemask").click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewExpandButton.click();
      // Validate review - K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!
      HomePage.productCardsMenu.contains("K33p5 y0ur ju1cy 5plu773r 70 y0ur53lf!").should("be.visible");
    });

    // Create scenario - Add a review
    it("Read reviews", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Raspberry
      HomePage.searchInput.type("Raspberry{enter}");
      // Select a product card - Raspberry Juice (1000ml)
      HomePage.productCards.contains("Raspberry Juice (1000ml)").click();
      // Type in review - "Tastes like metal"
      const reviewInput = "Tastes like metal";
      HomePage.reviewInput.should("be.visible").click();
      HomePage.reviewInput.type(reviewInput);
      // Click Submit
      HomePage.reviewSubmitButton.click();
      // Click expand reviews button/icon (wait for reviews to appear)
      HomePage.reviewExpandButton.click();
      // Validate review - "Tastes like metal"
      HomePage.productCardsMenu.contains(reviewInput).should("be.visible");
    });
    
    // Create scenario - Validate product card amount
    it("Validate product card amount", () => {
      // Validate that the default amount of cards is 12
      HomePage.productCards.should("have.length", 12);
      // Change items per page (at the bottom of page) to 24
      HomePage.itemsPerPageMenu.click();
      HomePage.itemsPerPageMenuOptions.contains("24").click();
      // Validate that the amount of cards is 24
      HomePage.productCards.should("have.length", 24);
      // Change items per page (at the bottom of page) to 36
      HomePage.itemsPerPageMenu.click();
      HomePage.itemsPerPageMenuOptions.contains("36").click();
      // Validate that the amount of cards is 36
      HomePage.productCards.should("have.length", 36);
    });

    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
      // Click on search icon
      HomePage.searchIcon.click();
      // Search for Girlie
      HomePage.searchInput.type("Girlie{enter}");
      // Add to basket "Girlie"
      HomePage.addToBasketButton.click();
      // Click on "Your Basket" button
      HomePage.yourBasketButton.click();
      // Instead of making new page objects i decided to just make new classes since these pages wouldnt have multiple functions but only 1 or 2 gets.
      // Create page object - BasketPage
      // Click on "Checkout" button
      BasketPage.checkoutButton.click();
      // Create page object - SelectAddressPage
      // Select address containing "United Fakedom"
      SelectAddressPage.addressCards.contains("United Fakedom").click();
      // Click Continue button
      SelectAddressPage.continueButton.click();
      // Create page object - DeliveryMethodPage
      // Select delivery speed Standard Delivery
      DeliveryMethodPage.deliveryOptions.contains("Standard Delivery").click();
      // Click Continue button
      DeliveryMethodPage.continueButton.click();
      // Create page object - PaymentOptionsPage
      // Select card that ends with "5678"
      PaymentOptionsPage.paymentOption.invoke('text').then((text) => {
        if (text.includes('5678')) {
          PaymentOptionsPage.paymentOptionRadiobutton.click();
        }
      })

      // Click Continue button
      PaymentOptionsPage.continueButton.click();
      // Create page object - OrderSummaryPage
      // Click on "Place your order and pay"
      OrderSummaryPage.checkoutButton.click();
      // Create page object - OrderCompletionPage
      // Validate confirmation - "Thank you for your purchase!"

      OrderCompletionPage.thankYouMessage.contains("Thank you for your purchase!").should("be.visible");

  });

    // Create scenario - Add address
    it("Add address", () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.orderPaymentButton.click();
      // Click on My saved addresses
      HomePage.savedAddressesButton.click();
      // Create page object - SavedAddressesPage
      // Click on Add New Address
      SavedAddressesPage.newAddressButton.click();
      // Create page object - CreateAddressPage
      // Fill in the necessary information
      const country = "Guise";
      CreateAddressPage.inputCountry.type(country);
      const name = "Grind";
      CreateAddressPage.inputName.type(name);
      const phone = "123456789";
      CreateAddressPage.inputPhone.type(phone);
      const code = "GI-4321";
      CreateAddressPage.inputCode.type(code);
      const address = "This is an Address 12345";
      CreateAddressPage.inputAddress.type(address);
      const city = "Glide";
      CreateAddressPage.inputCity.type(city);
      const state = "Glint";
      CreateAddressPage.inputState.type(state);
      // Click Submit button
      CreateAddressPage.submitButton.click();
      // Validate that previously added address is visible
      SavedAddressesPage.confirmAddition.contains(country).should('be.visible');
      SavedAddressesPage.confirmAddition.contains(name).should('be.visible');
      SavedAddressesPage.confirmAddition.contains(code).should('be.visible');
      SavedAddressesPage.confirmAddition.contains(address).should('be.visible');
      SavedAddressesPage.confirmAddition.contains(city).should('be.visible');
      SavedAddressesPage.confirmAddition.contains(state).should('be.visible');
    });
    
    // Create scenario - Add payment option
    it.only("Add payment option", () => {
      // Click on Account
      HomePage.accountButton.click();
      // Click on Orders & Payment
      HomePage.orderPaymentButton.click();
      // Click on My payment options
      HomePage.savedPaymentMethodButton.click();
      // Create page object - SavedPaymentMethodsPage
      // Click Add new card
      SavedPaymentMethodsPage.addNewCardButton.click();
      // Fill in Name
      const Name = "GrindyCard";
      SavedPaymentMethodsPage.inputName.type(Name);
      // Fill in Card Number
      const CardNumber = "6543221321341234"
      const lastFourNumber = CardNumber.slice(-4);
      SavedPaymentMethodsPage.inputCardNum.type(CardNumber);
      // Set expiry month to 7
      SavedPaymentMethodsPage.inputMonth.select('7');
      // Set expiry year to 2090
      SavedPaymentMethodsPage.inputYear.select('2090');
      // Click Submit button
      SavedPaymentMethodsPage.submitButton.click();
      // Validate that the card shows up in the list
      SavedPaymentMethodsPage.confirmAddition.contains(Name).should('be.visible');
      SavedPaymentMethodsPage.confirmAddition.contains('7').should('be.visible');
      SavedPaymentMethodsPage.confirmAddition.contains('2090').should('be.visible');
      SavedPaymentMethodsPage.confirmAdditionCard.contains(lastFourNumber).should('be.visible');
    
    });
  });
});
