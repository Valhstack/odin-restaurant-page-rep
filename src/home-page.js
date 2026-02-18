import coffeeShopImg from "./images/coffee-shop.jpg";
import { MENU_ITEMS } from "./menu.js";

const homeContent = (function () {
    const generateHeroHeadline = () => {
        const divElMain = document.createElement("div");
        divElMain.classList.add("hero-content");
        divElMain.setAttribute("id", "hero-section");

        const divElHeadline = document.createElement("div");
        divElHeadline.classList.add("hero-headline-wrapper");

        const h1HeroHeadline = document.createElement("h1");
        h1HeroHeadline.classList.add("hero-headline");
        h1HeroHeadline.textContent = "Quiet Moments. Honest Coffee.";

        divElHeadline.appendChild(h1HeroHeadline);
        divElMain.appendChild(divElHeadline);

        document.getElementById("content").appendChild(divElMain);
    };

    const generateHeroSupportiveText = () => {
        const divElSupText = document.createElement("div");
        divElSupText.classList.add("hero-supportive-text-wrapper");

        const pSupText = document.createElement("p");
        pSupText.classList.add("hero-supportive-text");

        pSupText.textContent = "A small neighborhood coffee shop focused on simple drinks, warm light, and slow mornings.";

        divElSupText.appendChild(pSupText);
        document.getElementById("hero-section").appendChild(divElSupText);
    };

    const generateHeroImg = () => {
        const divEl = document.createElement("div");
        divEl.classList.add("hero-img-wrapper");

        const imgEl = document.createElement("img");
        imgEl.src = coffeeShopImg;

        const pEl = document.createElement("p");
        pEl.classList.add("img-attribution");

        pEl.appendChild(document.createTextNode("Photo by "));

        const aElAuthor = document.createElement("a");
        aElAuthor.href = "https://unsplash.com/@pinchebesu?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText";
        aElAuthor.textContent = "Ruben Ramirez ";

        pEl.appendChild(aElAuthor);
        pEl.appendChild(document.createTextNode("on "));

        const aElUnsplash = document.createElement("a");
        aElUnsplash.href = "https://unsplash.com/photos/brown-wooden-table-and-chairs-xhKG01FN2uk?utm_source=unsplash&utm_medium=referral&utm_content=creditCopyText"
        aElUnsplash.textContent = "Unsplash";

        pEl.appendChild(aElUnsplash);
        pEl.appendChild(document.createTextNode("."));

        imgEl.classList.add("hero-img");

        divEl.appendChild(imgEl);
        divEl.appendChild(pEl);
        document.getElementById("hero-section").appendChild(divEl);
    };

    const generateHeroSection = () => {
        generateHeroHeadline();
        generateHeroSupportiveText();
        generateHeroImg();
    };

    const generateWelcomeHeadline = () => {
        const divElMain = document.createElement("div");
        divElMain.classList.add("welcome-content");
        divElMain.setAttribute("id", "welcome-section");

        const divElHeadline = document.createElement("div");
        divElHeadline.classList.add("welcome-headline-wrapper");

        const h1WelcomeHeadline = document.createElement("h1");
        h1WelcomeHeadline.classList.add("welcome-headline");
        h1WelcomeHeadline.textContent = "Welcome to Quiet Roast Coffee";

        divElHeadline.appendChild(h1WelcomeHeadline);
        divElMain.appendChild(divElHeadline);

        document.getElementById("content").appendChild(divElMain);
    };

    const generateWelcomeText = () => {
        const divEl = document.createElement("div");
        divEl.classList.add("welcome-text-wrapper");

        const pElI = document.createElement("p");
        pElI.classList.add("welcome-text");

        pElI.textContent = "We believe coffee should feel natural and unhurried. Every cup is brewed with care using thoughtfully sourced beans and simple preparation.";

        const pElII = document.createElement("p");
        pElII.classList.add("welcome-text");

        pElII.textContent = "Whether you're starting your day or pausing in the afternoon, Quiet Roast Coffee offers a calm space to sit, talk, read, or simply enjoy the quiet.";

        divEl.appendChild(pElI);
        divEl.appendChild(pElII);

        document.getElementById("welcome-section").appendChild(divEl);
    };

    const generateWelcomeSection = () => {
        generateWelcomeHeadline();
        generateWelcomeText();
    };

    const generateMenuPreviewHeadline = () => {
        const divElMain = document.createElement("div");
        divElMain.classList.add("menu-preview-content");
        divElMain.setAttribute("id", "menu-preview-section");

        const divElHeadline = document.createElement("div");
        divElHeadline.classList.add("menu-preview-headline-wrapper");

        const h1Headline = document.createElement("h1");
        h1Headline.classList.add("menu-preview-headline");
        h1Headline.textContent = "A Few Favorites";

        divElHeadline.appendChild(h1Headline);
        divElMain.appendChild(divElHeadline);

        document.getElementById("content").appendChild(divElMain);
    };

    const generateMenuItem = (item) => {
        /* structure 
        div wrapper | class = menu-item-wrapper
            div right side | class = menu-item-right
                menu item name | class = item-name
                menu item description | class = item-description
            div left side | class = menu-item-left
                menu item price | class = item-price
        */
        const divElWrapper = document.createElement("div");
        divElWrapper.classList.add("menu-item-wrapper");

        const divRightSide = document.createElement("div");
        divRightSide.classList.add("menu-item-right");

        const divLeftSide = document.createElement("div");
        divLeftSide.classList.add("menu-item-left");

        const pItemName = document.createElement("p");
        pItemName.classList.add("item-name");
        pItemName.textContent = item.name;

        const pItemDescription = document.createElement("p");
        pItemDescription.classList.add("item-description");
        pItemDescription.textContent = item.description;

        const pItemPrice = document.createElement("p");
        pItemPrice.classList.add("item-price");
        pItemPrice.textContent = `$${item.price.toFixed(2)}`;

        divLeftSide.appendChild(pItemName);
        divLeftSide.appendChild(pItemDescription);

        divRightSide.appendChild(pItemPrice);

        divElWrapper.appendChild(divLeftSide);
        divElWrapper.appendChild(divRightSide);

        return divElWrapper;
    }

    const generateMenuPreview = () => {
        //4 coffee 1 tea 1 pastry
        generateMenuPreviewHeadline();

        const divElWrapper = document.createElement("div");
        divElWrapper.classList.add("menu-preview-wrapper");
        divElWrapper.setAttribute("id", "menu-preview");

        const selected = [
            ...MENU_ITEMS.filter(item => item.type === "coffee").slice(0, 4),
            ...MENU_ITEMS.filter(item => item.type === "tea").slice(0, 1),
            ...MENU_ITEMS.filter(item => item.type === "pastry").slice(0, 1),
        ];

        for (let i = 0; i < selected.length; i++) {
            divElWrapper.appendChild(generateMenuItem(selected[i]));
            if (i != selected.length - 1) {
                const hrEl = document.createElement("hr");
                hrEl.classList.add("menu-preview-divider");
                divElWrapper.appendChild(hrEl);
            }
        }

        document.getElementById("menu-preview-section").appendChild(divElWrapper);
    };

    const generatePage = () => {
        document.getElementById("home-btn").focus();
        generateHeroSection();
        generateWelcomeSection();
        generateMenuPreview();
    };

    const resetPage = () => {
        const elem = document.getElementById("content");
        while (elem.firstChild) {
            elem.removeChild(elem.firstChild);
        }
    }

    return { generatePage, resetPage };
})();

const generateHome = () => homeContent.generatePage();
const reset = () => homeContent.resetPage();

export { generateHome, reset };