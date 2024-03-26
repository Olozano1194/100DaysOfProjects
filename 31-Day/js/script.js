const emailInput = document.getElementById('email');
const btnInput = document.getElementById('btn');

btnInput.disabled = true;

const expresion = {
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	
}

const validarCampo = (e) => {
    const field = e.target;
    const fieldValue = field.value;
    

    if (expresion.email.test(fieldValue.trim())) {
        
        document.getElementById('email').classList.remove('incorrect');
        document.getElementById('email').classList.add('correct');
        document.querySelector('.mensajeError').classList.remove('error');
        document.querySelector('.mensajeError').innerText = '';
        btnInput.disabled = false;
         
    }else {
        document.getElementById('email').classList.add('incorrect');
        document.getElementById('email').classList.remove('correct');
        document.querySelector('.mensajeError').classList.add('error');
        document.querySelector('.mensajeError').innerText = 'Email requerido';
      
    }
}

const redirectToPage =  (e) => {
    e.preventDefault();
    const emailValido = document.getElementById( 'email' ).classList.contains("correct");
    if(emailValido){
      window.location.href= "Thanks.html";
    }
}

emailInput.addEventListener('blur', validarCampo);
emailInput.addEventListener('keyup', validarCampo);
btnInput.addEventListener('click', redirectToPage);