import coffeeShopImg from "./images/coffee-shop-2.jpg";

const aboutContent = (function () {
    const generateAboutHeadline = () => {
        const divElMain = document.createElement("div");
        divElMain.classList.add("about-content");
        divElMain.setAttribute("id", "about-section");

        const divElHeadline = document.createElement("div");
        divElHeadline.classList.add("about-headline-wrapper");

        const h1Headline = document.createElement("h1");
        h1Headline.classList.add("about-headline");
        h1Headline.textContent = "About Quiet Roast";

        const pSubtitle = document.createElement("p");
        pSubtitle.classList.add("about-headline-subtitle");
        pSubtitle.textContent = "Quiet Roast Coffee began with a simple idea — create a space where good coffee and quiet moments come naturally. We focus on thoughtful preparation, warm light, and a slower pace.";

        divElHeadline.appendChild(h1Headline);
        divElHeadline.appendChild(pSubtitle);
        divElMain.appendChild(divElHeadline);

        document.getElementById("content").appendChild(divElMain);
    }

    const generateImgTextSection = () => {
        /*
            STRUCTURE

            div wrapper | class = about-img-text-wrapper
                div left-section
                    img
                    attribution
                div right-section
                    label
                    section heading
                    paragraph 1
                    paragraph 2
        */
        const divWrapper = document.createElement("div");
        divWrapper.classList.add("about-img-text-wrapper");

        const divLeftSection = document.createElement("div");
        divLeftSection.classList.add("about-left-section");

        const divRightSection = document.createElement("div");
        divRightSection.classList.add("about-right-section");

        const imgEl = document.createElement("img");
        imgEl.classList.add("about-img");
        imgEl.src = coffeeShopImg;

        const pEl = document.createElement("p");
        pEl.classList.add("img-attribution");

        pEl.appendChild(document.createTextNode("Photo by "));

        const aElAuthor = document.createElement("a");
        aElAuthor.href = "https://unsplash.com/@subagjav?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        aElAuthor.textContent = "Rizky Subagja ";

        pEl.appendChild(aElAuthor);
        pEl.appendChild(document.createTextNode("on "));

        const aElUnsplash = document.createElement("a");
        aElUnsplash.href = "https://unsplash.com/photos/two-clear-drinking-glasses-on-top-of-brown-wooden-table-1k7TnX5GAww?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        aElUnsplash.textContent = "Unsplash";

        pEl.appendChild(aElUnsplash);
        pEl.appendChild(document.createTextNode("."));

        divLeftSection.appendChild(imgEl);
        divLeftSection.appendChild(pEl);

        const pElLabel = document.createElement("p");
        pElLabel.classList.add("about-label");
        pElLabel.textContent = "OUR APPROACH";

        const h3Heading = document.createElement("h3");
        h3Heading.classList.add("about-section-heading");
        h3Heading.textContent = "Simple. Intentional. Unhurried.";

        const pElI = document.createElement("p");
        pElI.classList.add("about-section-text");

        const pElII = document.createElement("p");
        pElII.classList.add("about-section-text");

        pElI.textContent = "We keep our menu focused and our process deliberate. Every cup is prepared with care, using quality ingredients and familiar methods.";
        pElII.textContent = "Quiet Roast isn’t about trends or spectacle. It’s about comfort, conversation, and a place to pause in the middle of the day.";

        divRightSection.appendChild(pElLabel);
        divRightSection.appendChild(h3Heading);
        divRightSection.appendChild(pElI);
        divRightSection.appendChild(pElII);

        divWrapper.appendChild(divLeftSection);
        divWrapper.appendChild(divRightSection);

        document.getElementById("content").appendChild(divWrapper);
    };

    const generateAboutPhilosophySection = () => {
        const divElWrapper = document.createElement("div");
        divElWrapper.classList.add("about-philosophy-wrapper");

        const h1Headline = document.createElement("h1");
        h1Headline.classList.add("about-philosophy-headline");
        h1Headline.textContent = "More Than Coffee";

        const pSubtitle = document.createElement("p");
        pSubtitle.classList.add("about-philosophy-subtitle");
        pSubtitle.textContent = "We believe a neighborhood coffee shop should feel welcoming and steady — a place you return to not just for the drink, but for the atmosphere. Whether you're meeting a friend or sitting alone with a book, we’re here to make that moment a little better.";

        divElWrapper.appendChild(h1Headline);
        divElWrapper.appendChild(pSubtitle);

        document.getElementById("content").appendChild(divElWrapper);
    };

    const generatePage = () => {
        document.getElementById("about-btn").focus();
        generateAboutHeadline();
        generateImgTextSection();
        generateAboutPhilosophySection();
    };

    const resetPage = () => {
        const elem = document.getElementById("content");
        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
    }

    return { generatePage, resetPage }
})();

const generateAbout = () => aboutContent.generatePage();
const resetAbout = () => aboutContent.resetPage();

export { generateAbout, resetAbout }