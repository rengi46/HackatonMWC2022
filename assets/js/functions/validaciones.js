export function checkInputs([usuario,email,city,country,description]) {
	// trim to remove the whitespaces
	const usuarioValue = usuario.value;
	const emailValue = email.value;
	const cityValue = city.value;
	const countryValue = country.value;
	const descriptionValue = description.value;
	
	if(usuarioValue === '') {
		setErrorFor(usuario, 'No puede dejar el usuairo en blanco');
        return false;
	} else {
		setSuccessFor(usuario);
	}
	
	if(emailValue === '') {
		setErrorFor(email, 'No puede dejar el email en blanco');
        return false;
	} else {
		setSuccessFor(email);
	}
	
	if(cityValue === '') {
		setErrorFor(city, 'Tiene que poner la ciudad donde vive');
        return false;
	} else {
		setSuccessFor(city);
	}
	
	if(countryValue === '') {
		setErrorFor(country, 'Tiene que poner la pais donde vive');
        return false;
	} else {
		setSuccessFor(country);
	}
    if(descriptionValue === '') {
		setErrorFor(description, 'Tiene que poner algun tipo de descripcion');
        return false;
	} else {
		setSuccessFor(description);
	}
    return true;
}

function setErrorFor(input, message) {
	const formControl = input.parentElement;
	const small = formControl.querySelector('small');
	small.innerText = message;
}

function setSuccessFor(input) {
	const formControl = input.parentElement;
    const small = formControl.querySelector('small');
    small.innerText = "";
}
