describe('Home page specs', () => {
  beforeEach(() => {
    cy.visit('/');
  });

  context('header', () => {
    context('desktop resolution', () => {
      it('should have a header', () => {
        cy.get('header').should('exist').should('be.visible');
      });

      it('Logo should be visible and redirect to home page', () => {
        cy.get('header').getByDataTest('logo').should('be.visible').click();

        cy.url().should('eq', Cypress.config().baseUrl + '/');
      });
    });

    context('mobile resolution', () => {
      beforeEach(() => {
        cy.viewport('iphone-5');
      });

      it('should have a header', () => {
        cy.get('header').should('exist');
      });

      it('Logo should be visible and redirect to home page', () => {
        cy.get('header').getByDataTest('logo').should('be.visible').click();

        cy.url().should('eq', Cypress.config().baseUrl + '/');
      });

      context('menu', () => {
        beforeEach(() => {
          cy.get('header').getByDataTest('open-mobile-menu-btn').should('be.visible').click();
        });

        it('should have a mobile menu and it should be visible when click to open', () => {
          cy.getByDataTest('mobile-opened-menu').should('be.visible');
        });

        it('should have a button to close menu', () => {
          cy.getByDataTest('close-mobile-menu-btn').should('be.visible').click();
          cy.getByDataTest('mobile-opened-menu').should('not.exist');
        });
      });
    });
  });
});

export {};
