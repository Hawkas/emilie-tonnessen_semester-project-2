import mobileMenu from "../components/menu/mobile-menu.js";
import displayMessage from "../components/messages/displayMessage.js";
import {baseURL, productsURL} from "../components/settings/url.js";
import {getToken} from "../components/storage/localStorage.js";
import {fetchAPI} from "../components/settings/fetchAPI.js";
import {productMenu} from "./components/menu/productMenu.js";
import { feedback } from "./components/form/containerVariables.js";

// Redirecting to homepage if they are not logged in
const token = getToken();

if (!token) {
    location.href = "/admin";
}

// Display Product Menu
fetchAPI(productMenu, productsURL);

// Container Variables
const form = document.querySelector(".edit__form");
const title = document.querySelector("#title");
const price = document.querySelector("#price");
const description = document.querySelector("#description");
const idInput = document.querySelector("#id");
const message = document.querySelector(".edit__form__feedback");
const loading = document.querySelector(".loader");
const image = document.querySelector("#image");
const featured = document.querySelectorAll(".featured");
const featuredFalse = document.querySelector("#featured__false");
const labelFalse = document.querySelector(".featured__false");
const labelTrue = document.querySelector(".featured__true");
const featuredTrue = document.querySelector("#featured__true");

// Listen for button click
form.addEventListener("submit", submitForm);