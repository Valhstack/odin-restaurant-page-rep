import { generateHome, reset } from "./home-page.js";
import { generateMenu } from "./menu-page.js";
import { generateAbout } from "./about-page.js";

export function navButtonsListeners() {
    document.getElementById("home-btn").addEventListener("click", () => {
        reset();
        generateHome();
    });

    document.getElementById("menu-btn").addEventListener("click", () => {
        reset();
        generateMenu();
    });

    document.getElementById("about-btn").addEventListener("click", () => {
        reset();
        generateAbout();
    });
}