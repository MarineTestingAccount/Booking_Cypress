/// <reference types="cypress" />

// Homework (Cypress + POM)
// 1. Open https://www.booking.com/
//     2. Fill in "Where are you going?" filed "Dilijan"
// 3. Select date
// 4. Increase number of adults
// 5. Click on the "Search" button
// 6. Check all result items contain "Dilijan"
// 7. Filter results by "Star Rating" (4 stars)
// 8. Check result list have items only with 4 stars

import {HomePage} from "../pom/homePage";
import {SearchResultPage} from "../pom/searchResultPage";
import {Assert} from "../assertions/assert";
const page = new HomePage()
const search = new SearchResultPage()
const assert = new Assert();


describe('Search hotels in Dilijan', () => {
  beforeEach(() => {
    page.unCaughtException();
    page.visitHomePage();
  })

  it('Search 4 stars hotels', () => {
    page.setBookingLocation();
    page.getSuggestedLocation();
    page.setSuggestedLocation();
    page.getBookingDateRange();
    page.setMemberQty();
    page.clickOnSearchBtn();
    assert.setAddress();
    search.getStars();
    search.check4Stars();
    assert.countStars();
  })
})
