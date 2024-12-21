
import {setupScrollToUpBtnListeners}  from "./scroll-to-up-btn.js";
import {setupModalEventListeners} from "./modal-window.js";
import { setupDarkLightTheme } from "./dark-light-theme.js";
import setLanguageTheme from "./languages-selection.js";

import {languages} from "../languages.js"
const elements = document.querySelectorAll("[data-i18n]");

console.log(elements);

setupModalEventListeners();
setupScrollToUpBtnListeners();
setupDarkLightTheme();
setLanguageTheme(elements,languages);


