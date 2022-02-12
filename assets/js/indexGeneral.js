

import * as gDom from "./variables/generalDom.js";
import * as modal from "./functions/modals.js"
import * as users from "../js/functions/users.js"





if (gDom.generalUsernameInput) {
    const user = users.getUserInfo();
    let arr = [user[0].stacks]
    const skill=await users.getSkills(arr[0])
    gDom.generalUsernameInput.value = user[0].username;
    gDom.generalDescriptionInput.innerHTML = user[0].description;
    gDom.generalMailInput.value = user[0].email;
    gDom.generalAddressInput.value = user[0].city+","+user[0].country;
    gDom.dicebearAvatarMini.src = user[0].avatar;
    gDom.generalYearsInput.value = user[0].years;
    gDom.generalSectorInput.value = user[0].sector;
    for (const sk of skill) {
        gDom.stacks.insertAdjacentHTML("beforeend", sk)
    }
}


/* open modals */


gDom.btnEditUser.onclick = function () {
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    gDom.generalContentModal.innerHTML= (modal.modalMainInfo(allUsers[0]))
    gDom.generalModal.style.display = "block";
    const btnInfoUser= document.getElementById("mainFormSubmit")
    btnInfoUser.addEventListener("click",modal.rescribirvariables)
}

gDom.btnEditExperience.onclick = function () {
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    gDom.generalContentModal.innerHTML= (modal.modalExperience(allUsers[0]))
    gDom.generalModal.style.display = "block";
    const btnInfoUser= document.getElementById("mainFormSubmit")
    btnInfoUser.addEventListener("click",modal.rescribirvariables)
}

gDom.dicebearAvatarMini.onclick = function(){
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    gDom.generalContentModal.innerHTML= (modal.modalAvatarVersions(allUsers[0]))
    gDom.generalModal.style.display = "block";
    const avatarClicked= document.getElementsByClassName("avatar-variants")
    for (const iterator of avatarClicked) {
        iterator.addEventListener("click",modal.changeAvatar)
    }
}

// When the user clicks on <span> (x), close the modal
gDom.closeModal.onclick = function () {
    modal.vaciarModal(gDom.generalContentModal)
    gDom.generalModal.style.display = "none";
}

// When the user clicks anywhere outside of the modal, close it
window.onclick = function (event) {
    if (event.target == gDom.generalModal) {
        gDom.generalModal.style.display = "none";
    }
}