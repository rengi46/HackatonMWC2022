import * as auto from  "./functions/autocomplet.js"
import * as va from "../js/variables/variable.js"
import * as dom from "./variables/indexDom.js"
import * as user from "../js/functions/users.js"
import * as validate from "../js/functions/validaciones.js"


auto.autocomplete(document.getElementById("inputCountry"), va.countries);



dom.btnNext.addEventListener("click", () =>{
    console.log(dom.indexUsernameInput)
    if(validate.checkInputs([
        dom.indexUsernameInput,
        dom.indexMailInput,
        dom.indexCityInput,
        dom.indexCountryInput,
        dom.indexDescriptionInput
    ])){
            user.addUserBio();
            window.location.href ="./assets/views/experienciaLaboral.html";
        }
});
