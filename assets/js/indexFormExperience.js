import * as auto from  "./functions/autocomplet.js"
import * as va from "../js/variables/variable.js"
import * as user from "../js/functions/users.js"
import * as dom from "./variables/indexDom.js"



let skill=va.skills();

auto.autocomplete(document.getElementById("inputSkill"), skill,true);

if (dom.btnSubmit) {
    dom.btnSubmit.addEventListener("click", user.addUserProfessional);
}