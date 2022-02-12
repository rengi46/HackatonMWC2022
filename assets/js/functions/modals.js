import * as tag from "./tags.js";

export function vaciarModal(modal){
    modal.innerHTML = ""
}

export function modalMainInfo(obj){
    return(`
<form id ="main-form" class="modalForm">
    <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputEmail4">Email</label>
            <input name="email" type="email" class="form-control" id="inputEmail4" placeholder="Email" value="${obj.email}">
        </div>
        <div class="form-group col-md-6">
            <label for="inputUser4">Username</label>
            <input name="username" type="text" class="form-control" id="inputUser4" placeholder="Username" value="${obj.username}">
        </div>
        </div>
        <div class="form-row">
        <div class="form-group col-md-6">
            <label for="inputCity">City</label>
            <input name="city" type="text" class="form-control" id="inputCity" value="${obj.city}">
        </div>
        <div class="form-group col-md-4 autocomplete">
            <label for="inputState">Pais</label>
            <input name="country" class="form-control country-main-form" id="inputCountry" type="text" name="myCountry" placeholder="Country" value="${obj.country}">
        </div>
        <div class="form-group">
            <label for="inputAddress">Descripcion</label>
            <textarea name="description" type="text" class="form-control description-input-main-form" id="inputDescription" placeholder="Cuentanos algo sobre ti" >${obj.description}</textarea>
        </div>
    </div>
    <button id="mainFormSubmit" type="button" class="btn-sign-in">Sign in</button>
</form>`)
}

export function modalExperience(obj){
    let arr=[]
    for (const stack of obj.stacks) {
        console.log(tag.createTag(stack,false))
        arr.push(tag.createTag(stack,false))
    }
    console.log(arr)
    return(`
    <form id ="main-form" class="modalForm">
        <div class="form-row">
            <div class="form-group col-md-6">
                <label for="inputEmail4">Sector</label>
                <select class='form-control' name="sector" id="">
                    <option value="${obj.sector}">${obj.sector}</option>
                    <option value="Front">Front</option>
                    <option value="Back">Back</option>
                    <option value="Mobile">Mobile</option>
                    <option value="Data">Data</option>
                </select>
            </div>
            <div class="form-group col-md-6">
                <label for="inputUser4">Year of experience</label>
                <select class='form-control' name="years" id="">
                    <option value="${obj.years}">${obj.years}</option>
                    <option value="Junior">Junior(0&lt;2 Y) </option>
                    <option value="semi-Senior"> semi Senior(2&lt;6 Y)</option>
                    <option value="Senior">Senior(6 &gt; Y)</option>
                </select>
            </div>
            </div>
            <div class="form-row">
                        <section>
                            <div class='form-group'>
                                <label for='inputAddress'>Stack</label>
                                <section id='tagsFather'>
                                </section>
                                <div class='autocomplete'>
                                    <input type='text' class='form-control' id='inputSkill' placeholder='Aquí podrás definir tu stack de hard skills con las habilidades que utilizas recuentemente.'>
                                </div>
                            </div>
                        </section>
        </div>
        <button id="mainFormSubmit" type="button" class="btn-sign-in">Sign in</button>
    </form>
`)}

export function rescribirvariables() {
    const inputsUserInfo= document.getElementsByClassName("form-control")
    let allUsers = JSON.parse(localStorage.getItem('userBook'));
        for (const userInfo of inputsUserInfo) {
            allUsers[0][userInfo.name]=(userInfo.value)
        }
        console.log(allUsers);
        localStorage.setItem('userBook', JSON.stringify([allUsers[0]]))
        gDom.generalModal.style.display = "none";
        vaciarModal(gDom.generalContentModal)
        window.location.reload()
}
