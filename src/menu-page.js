import { MENU_ITEMS } from "./menu.js";

const menuContent = (function () {
    const generateHeadline = () => {
        const divElMain = document.createElement("div");
        divElMain.classList.add("menu-content");
        divElMain.setAttribute("id", "menu-headline-section");

        const divElHeadline = document.createElement("div");
        divElHeadline.classList.add("menu-headline-wrapper");

        const h1Headline = document.createElement("h1");
        h1Headline.classList.add("menu-headline");
        h1Headline.textContent = "Our Menu";

        const pSubtitle = document.createElement("p");
        pSubtitle.classList.add("menu-headline-subtitle");
        pSubtitle.textContent = "Simple drinks and fresh bites, made daily.";

        divElHeadline.appendChild(h1Headline);
        divElHeadline.appendChild(pSubtitle);
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

    const generateMenuSection = () => {
        const divCategorySection = document.createElement("div");
        divCategorySection.setAttribute("id", "full-menu");
        divCategorySection.classList.add("full-menu-wrapper");

        const divCoffeeCategory = document.createElement("div");
        const divTeaOtherCategory = document.createElement("div");
        const divPastryFoodCategory = document.createElement("div");

        divCoffeeCategory.classList.add("category-section-wrapper");
        divTeaOtherCategory.classList.add("category-section-wrapper");
        divPastryFoodCategory.classList.add("category-section-wrapper");

        const h3CoffeeTitle = document.createElement("h3");
        const h3TeaOtherTitle = document.createElement("h3");
        const h3PastryFoodTitle = document.createElement("h3");

        h3CoffeeTitle.classList.add("category-title");
        h3TeaOtherTitle.classList.add("category-title");
        h3PastryFoodTitle.classList.add("category-title");

        h3CoffeeTitle.textContent = "Coffee";
        h3TeaOtherTitle.textContent = "Tea & Other";
        h3PastryFoodTitle.textContent = "Pastry & Food";

        divCoffeeCategory.appendChild(h3CoffeeTitle);
        divTeaOtherCategory.appendChild(h3TeaOtherTitle);
        divPastryFoodCategory.appendChild(h3PastryFoodTitle);

        for (let i = 0; i < MENU_ITEMS.length; i++) {
            if (MENU_ITEMS[i].type === 'coffee') {
                divCoffeeCategory.appendChild(generateMenuItem(MENU_ITEMS[i]));
            }
            else if (MENU_ITEMS[i].type === 'tea' || MENU_ITEMS[i].type === 'other') {
                divTeaOtherCategory.appendChild(generateMenuItem(MENU_ITEMS[i]));
            }
            else {
                divPastryFoodCategory.appendChild(generateMenuItem(MENU_ITEMS[i]));
            }
        }

        divCategorySection.appendChild(divCoffeeCategory);
        divCategorySection.appendChild(divTeaOtherCategory);
        divCategorySection.appendChild(divPastryFoodCategory);

        document.getElementById("content").appendChild(divCategorySection);
    }

    const generatePage = () => {
        document.getElementById("menu-btn").focus();
        generateHeadline();
        generateMenuSection();
    };

    return { generatePage }
})();

const generateMenu = () => menuContent.generatePage();

export { generateMenu }