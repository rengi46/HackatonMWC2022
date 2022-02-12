import * as auto from  "./functions/autocomplet.js"
import * as va from "../js/variables/variable.js"
import * as dom from "./variables/indexDom.js"
import * as user from "../js/functions/users.js"


auto.autocomplete(document.getElementById("inputCountry"), va.countries);

if (dom.btnNext) {
    dom.btnNext.addEventListener("click", () =>{
        user.addUserBio();
        window.location.href ="./assets/views/experienciaLaboral.html";
    });
}