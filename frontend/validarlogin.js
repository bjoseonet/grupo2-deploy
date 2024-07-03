var datosLogin = [];

const formLogin = document.querySelector('.cuadro');
const inputEmail = document.querySelector('#inputEmail');
const inputPassword = document.querySelector('#inputPassword');
var checkbox__login = document.getElementById('form__checkbox__login');
checkbox__login.addEventListener('change', validaCheckbox, false);

formLogin.addEventListener('submit', (event) => {
  event.preventDefault();

  datosLogin[0] = inputEmail.value.trim();
  datosLogin[1] = inputPassword.value.trim();

  let erroresValidacion = false;

  if (!erroresValidacion) {
    localStorage.setItem('datosLogin', JSON.stringify(datosLogin));
    getUser(datosLogin[0], datosLogin[1]);
    //formLogin.reset();
    // window.open('../index.html', '_self');
  }
});

function validaCheckbox() {
  var checked = checkbox__login.checked;
  if (checked) {
    datosLogin[2] = true;
  } else {
    datosLogin[2] = false;
  }
}

const form = document.querySelector('.cuadro-registro');

const inputNombre = document.querySelector('#inputNombre');
const inputApellido = document.querySelector('#inputApellido');
const inputCodPostal = document.querySelector('#inputCodPostal');
const inputEmail__registro = document.querySelector('#inputEmail__registro');

const password__01 = document.querySelector('#inputPassword__registro1');
const password__02 = document.querySelector('#inputPassword__registro2');

let erroresValidacion = false;

function validarInputNombre(inputNombre) {
  if (inputNombre.length < 2) {
    erroresValidacion = true;

    const errorInputNombre = document.querySelector('.errorInputNombre');
    errorInputNombre.textContent =
      'El nombre tiene que tener 2 caracteres o mas';

    setTimeout(() => {
      errorInputNombre.textContent = '';
      document.querySelector('#inputNombre').value = '';
      document.getElementById(`inputNombre`).focus();
    }, 2000);
  }
}

if (!erroresValidacion) {
  form.addEventListener('submit', (event) => {
    event.preventDefault();

    datosRegistro[0] = inputNombre.value.trim();
    datosRegistro[1] = inputApellido.value.trim();
    datosRegistro[2] = inputCodPostal.value.trim();
    datosRegistro[3] = inputEmail__registro.value.trim();
    datosRegistro[4] = password__01.value.trim();
    datosRegistro[5] = password__02.value.trim();

    const password01 = password__01.value.trim();
    const password02 = password__02.value.trim();

    let erroresValidacion = false;

    if (password01 != password02) {
      erroresValidacion = true;

      const error = document.querySelector('.error');
      error.textContent = 'Las contraseñas deben ser iguales';

      setTimeout(() => {
        error.textContent = '';
        document.querySelector('#inputPassword__registro1').value = '';
        document.querySelector('#inputPassword__registro2').value = '';
        document.getElementById(`inputPassword__registro1`).focus();
      }, 2000);
    }
    const store = {
      email: datosRegistro[3],
      first_name: datosRegistro[0],
      last_name: datosRegistro[1],
      zip: datosRegistro[2],
      password: datosRegistro[4],
    };

    if (!erroresValidacion) {
      localStorage.setItem('datosRegistro', JSON.stringify(datosRegistro));
      console.log(store);
      storeUser(store);
      form.reset();
      window.open('../index.html', '_self');
    }
  });
}

document.addEventListener('DOMContentLoaded', () => {
  datosLogin = JSON.parse(localStorage.getItem('datosLogin')) || [];
  datosRegistro = JSON.parse(localStorage.getItem('datosRegistro')) || [];

  //renderLogin();
  //renderRegistro();
});
