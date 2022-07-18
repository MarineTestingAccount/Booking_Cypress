import {SearchResultPage} from "../pom/searchResultPage";

const search = new SearchResultPage()

export class Assert {
    setAddress() {
        search.getAddress().each(el => {
            let txt = el.text();
            let location = txt.split(' ')[0];
            expect(location).to.be.equals("Dilijan")
        });
    }

    countStars() {
        search.getStars().should('have.length', 4)
    }
}