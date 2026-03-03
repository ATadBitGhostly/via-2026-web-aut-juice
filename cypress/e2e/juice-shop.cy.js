import { HomePage } from "../pageObjects/homePage";
import { LoginPage } from "../pageObjects/loginPage";
import { RegisterPage } from "../pageObjects/registerPage";

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

  });
  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
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
  });
  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
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
  });
  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
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
  });
    
  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
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
  });
    
  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });
    
    // Create scenario - Validate product card amount
    it.only("Validate product card amount", () => {
    // Validate that the default amount of cards is 12
    HomePage.productCards.should("have.length", 12);
    // Change items per page (at the bottom of page) to 24
    HomePage.itemsPerPageMenu.click();
    HomePage.itemsPerPageMenuOptions.contains("24").click();
    // Validate that the amount of cards is 24

    // Change items per page (at the bottom of page) to 36
    // Validate that the amount of cards is 35
    });
  });
    
  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });
    
    // Create scenario - Buy Girlie T-shirt
    it("Buy Girlie T-shirt", () => {
    // Click on search icon
    // Search for Girlie
    // Add to basket "Girlie"
    // Click on "Your Basket" button
    // Create page object - BasketPage
    // Click on "Checkout" button
    // Create page object - SelectAddressPage
    // Select address containing "United Fakedom"
    // Click Continue button
    // Create page object - DeliveryMethodPage
    // Select delivery speed Standard Delivery
    // Click Continue button
    // Create page object - PaymentOptionsPage
    // Select card that ends with "5678"
    // Click Continue button
    // Create page object - OrderSummaryPage
    // Click on "Place your order and pay"
    // Create page object - OrderCompletionPage
    // Validate confirmation - "Thank you for your purchase!"
    });
  });
    
  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });

    // Create scenario - Add address
    it("Add address", () => {
    // Click on Account
    // Click on Orders & Payment
    // Click on My saved addresses
    // Create page object - SavedAddressesPage
    // Click on Add New Address
    // Create page object - CreateAddressPage
    // Fill in the necessary information
    // Click Submit button
    // Validate that previously added address is visible
    });
  });
    
  context("With auto login", () => {
    beforeEach(() => {
      cy.login("demo", "demo");
      HomePage.visit();
    });
    
    // Create scenario - Add payment option
    it("Add payment option", () => {
    // Click on Account
    // Click on Orders & Payment
    // Click on My payment options
    // Create page object - SavedPaymentMethodsPage
    // Click Add new card
    // Fill in Name
    // Fill in Card Number
    // Set expiry month to 7
    // Set expiry year to 2090
    // Click Submit button
    // Validate that the card shows up in the list
      
    });
  });
});
