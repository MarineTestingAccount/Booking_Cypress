export class HomePage {

    unCaughtException() {
        Cypress.on("uncaught:exception", (err, runnable) => {
            return false;
        })
    }

    visitHomePage() {
        cy.visit("/");
    }

    getBookingLocation() {
        return cy.get('[id = "ss"]');
    }

    getSuggestedLocation() {
        return cy.get(`ul.c-autocomplete__list > li[data-label="Dilijan, Armenia"]`);
    }

    getStartDate() {
        return cy.get('[data-date="2022-07-20"]');
    }

    getEndDate() {
        return cy.get('[data-date="2022-08-02"]');
    }

    getBookingDateRange() {
        this.setStartDate();
        this.setEndDate();
    }

    getMembers() {
        return cy.get('[id = "xp__guests__toggle"]')
    }

    getMembersQty() {
        return cy.get('button[aria-label="Increase number of Adults"]');
    }

    getSearchBtn() {
        return cy.get('.sb-searchbox__button');
    }

    setBookingLocation() {
        this.getBookingLocation().type("Dilijan");
    }

    setSuggestedLocation() {
        this.getSuggestedLocation().click();
    }

    setStartDate() {
        this.getStartDate().click();
    }

    setEndDate() {
        this.getEndDate().click();
    }

    setMembers() {
        this.getMembers().click();
    }

    setMemberQty() {
        this.setMembers();
        this.getMembersQty().click();
    }

    clickOnSearchBtn() {
        this.getSearchBtn().click();
    }
}
