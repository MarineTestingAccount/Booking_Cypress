export class SearchResultPage {
    getAddress() {
        return cy.get('[data-testid="address"]');
    }

    getStars() {
        return cy.get('[data-testid="rating-stars"] >span');
    }

    get4StarCheckBox() {
        return cy.get('[data-filters-item="class:class=4"]:first > input');
    }

    check4Stars() {
        this.get4StarCheckBox().scrollIntoView().check();
    }
}

