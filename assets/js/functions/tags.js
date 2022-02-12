import * as va from "../variables/variable.js"
import * as u from "./users.js"





 var idSkill=0;
 var finalSkills = [];
export function createTag(value,padre=true){
    idSkill+1
    let dad=document.getElementById("tagsFather");
    let tag=document.createElement("div");
    let close=document.createElement("i");
    close.classList="fas fa-times-circle";
    tag.classList="tag"
    tag.id=idSkill
    tag.innerHTML= value;
    tag.appendChild(close)
    if (padre==true){
        dad.appendChild(tag);
    }
    else{
        return tag
    }
    close.addEventListener("click",closesTag)
}


export function getFinalSkills(value){

    finalSkills.push(value);
    return finalSkills;
}

export function closesTag(e){
    let dead=document.getElementById(e.srcElement.parentNode.id);
    dead.remove()
}


export function addUserStack(value) {
    let finalStack = getFinalSkills(value);
    console.log(finalStack);
    let obj = userStacks(finalStack);
    localStorage.clear();
    let userBook = loadUser();
    userBook.push(obj);
    localStorage.setItem('userBook', JSON.stringify(userBook))
}

export function userStacks(value) {
    const user = getUserInfo();
    return {
        email: user[0].email,
        avatar: user[0].avatar,
        username: user[0].username,
        city: user[0].city,
        country: user[0].country,
        description: user[0].description,
        sector: "",
        years: "",
        stacks: value
    }
}

export function getUserInfo() {
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    return allUsers;
}

export function loadUser() {
    if (localStorage.getItem('userBook') == null) {
        return []
    }
    return JSON.parse(localStorage.getItem('userBook'))
}