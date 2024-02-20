const form = document.getElementById('form');
const inputs = document.querySelectorAll('#form input');


const expresiones = {
	usuario: /^[a-zA-Z0-9\_\-]{4,16}$/, // Letras, numeros, guion y guion_bajo
	name: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  // lastname: /^[a-zA-ZÀ-ÿ\s]{1,40}$/, // Letras y espacios, pueden llevar acentos.
  password: /^.{4,12}$/, // 4 a 12 digitos.
	email: /^[a-zA-Z0-9_.+-]+@[a-zA-Z0-9-]+\.[a-zA-Z0-9-.]+$/,
	telefono: /^\d{7,14}$/ // 7 a 14 numeros.
}

const campos = {
	name: false,
  // lastname:false,
  email: false,
  password: false
		
}

const validarFormulario =  (e) => {
  
  switch (e.target.name) {

    case 'name':
            
      validarCampo(expresiones.name, e.target, 'name');
      
    break;

    case 'lastname':
      
      validarCampo(expresiones.name, e.target, 'lastname');
      
    break;

    case 'email':

      validarCampo(expresiones.email, e.target, 'email');
      
    break;
  
    case 'password':

      validarCampo(expresiones.password, e.target, 'password');
      
    break;
    
  }
}

const validarCampo = (expresion, input, campo) => {

  if (expresion.test(input.value.trim())) {
    document.getElementById(`group__${campo}`).classList.remove('form__group-incorrect');
    document.getElementById(`group__${campo}`).classList.add('form__group-correct');
    document.querySelector(`#group__${campo} i`).classList.remove('fa-circle-exclamation');
    document.querySelector(`#group__${campo} i`).classList.add('fa-check-circle');
    document.querySelector(`#group__${campo} p`).classList.remove('error');
    document.querySelector(`#group__${campo} p`).innerText = '';
    campos[campo] = true;
    
  }else {
    document.getElementById(`group__${campo}`).classList.add('form__group-incorrect');
    document.getElementById(`group__${campo}`).classList.remove('form__group-correct');
    document.querySelector(`#group__${campo} i`).classList.remove('fa-check-circle');
    document.querySelector(`#group__${campo} i`).classList.add('fa-circle-exclamation');
    document.querySelector(`#group__${campo} p`).classList.add('error');
    document.querySelector(`#group__${campo} p`).innerText = `${input.name} required`;
    campos[campo]= false;
  }
}

inputs.forEach((input) => {
  input.addEventListener('blur', validarFormulario);
  input.addEventListener( 'keyup', validarFormulario);
});

form.addEventListener( 'submit', (e) => {
  e.preventDefault();

  // console.log(campos.name, campos.email, campos.password);

  if (campos.name && campos.email && campos.password) {
    
    form.reset();

    document.getElementById('success').classList.add('correct');
    document.getElementById('success').innerText = 'The form has been submitted successfully';
    
    setTimeout(() => {
      document.getElementById('success').classList.add('correct');
      document.getElementById('success').innerText = '';
    }, 5000);

    document.querySelectorAll('.form__group-correct').forEach((icon) => {
      icon.classList.remove( 'form__group-correct' );
    });
    
  }else {
    document.getElementById('success').classList.add('danger');
    document.getElementById('success').innerText = 'Please complete form';
  }

});

