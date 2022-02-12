import * as dom from "../variables/indexDom.js";
import * as pDom from "../variables/professionalDom.js";

export function userBio(){
    return {
        email: dom.indexMailInput.value,
        avatar: "https://avatars.dicebear.com/api/human/" + dom.indexUsernameInput.value + ".svg?background=white",
        username: dom.indexUsernameInput.value,
        city: dom.indexCityInput.value,
        country: dom.indexCountryInput.value,
        description: dom.indexDescriptionInput.value,
        sector: "",
        years: "",
        stacks:[]
    }
}

export function userStacks() {
    return {
        email: user[0].email,
        avatar: user[0].avatar,
        username: user[0].username,
        city: user[0].city,
        country: user[0].country,
        description: user[0].description,
        sector: "",
        years: "",
        stacks: []
    }
}

export function userProfessional(){
    const user = getUserInfo();
    return {
        email: user[0].email,
        avatar: user[0].avatar,
        username: user[0].username,
        city: user[0].city,
        country: user[0].country,
        description: user[0].description,
        sector: user[0].sector=pDom.sectorProfessionalInput.value,
        years: user[0].years=pDom.yearsOfExperience.value,
        stacks: user[0].stacks
    }
}

export function loadUser() {
    if (localStorage.getItem('userBook') == null) {
        return []
    }
    return JSON.parse(localStorage.getItem('userBook'))
}

export function addUserBio() {
    localStorage.clear();
    let obj = userBio();
    let userBook = loadUser();
    userBook.push(obj);
    localStorage.setItem('userBook', JSON.stringify(userBook))
}

export function addUserProfessional() {
    let obj = userProfessional();
    localStorage.clear();
    let userBook = loadUser();
    userBook.push(obj);
    localStorage.setItem('userBook', JSON.stringify(userBook))
    window.location.href = "./paginaInfo.html";
}

export function getUserInfo(){
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
    return allUsers;
}

export async function getSkills(arr){
    const allSkills=[]
    for (const skill of arr) {
        const skills= await fetchLogo(skill)
        if(skills.includes(skills[0])){
            allSkills.push(createSkills(skills[0]))
        }
    }
    return allSkills;
}

export async function fetchLogo(skill){
    let request =await fetch("../../recurses/logo.json")
    let data =await request.json()
    let obj =data.filter(x=> x.name ==skill)
    return obj
}



export function createSkills({files,url,name}){
    return   `
    <figure>
        <img src="https://cdn.svgporn.com/logos/${files[0]}" >
        <figcaption><a href="${url}"> ${name} </a></figcaption>
    </figure>
    `
}