var datosLogin = [];
var datosRegistro = [];

const renderLogin = () => {
  if (datosLogin.length > 0) {
    document.querySelector("#inputEmail").value = datosLogin[0];
    document.querySelector("#inputPassword").value = datosLogin[1];
    if (datosLogin[2] == true) {
      document.querySelector("#form__checkbox__login").checked = true;
    }
  }
};

const renderRegistro = () => {
  if (datosRegistro.length > 0) {
    document.querySelector("#inputNombre").value = datosRegistro[0];
    document.querySelector("#inputApellido").value = datosRegistro[1];
    document.querySelector("#inputCodPostal").value = datosRegistro[2];
    document.querySelector("#inputEmail__registro").value = datosRegistro[3];
    document.querySelector("#inputPassword__registro1").value =
      datosRegistro[4];
    document.querySelector("#inputPassword__registro2").value =
      datosRegistro[5];
  }
};

const formLogin = document.querySelector(".cuadro");
const inputEmail = document.querySelector("#inputEmail");
const inputPassword = document.querySelector("#inputPassword");
var checkbox__login = document.getElementById("form__checkbox__login");
checkbox__login.addEventListener("change", validaCheckbox, false);

formLogin.addEventListener("submit", (event) => {
  event.preventDefault();

  datosLogin[0] = inputEmail.value.trim();
  datosLogin[1] = inputPassword.value.trim();

  let erroresValidacion = false;

  if (!erroresValidacion) {
    localStorage.setItem("datosLogin", JSON.stringify(datosLogin));
    formLogin.reset();
    window.open("../index.html");
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

const form = document.querySelector(".cuadro-registro");

const inputNombre = document.querySelector("#inputNombre");
const inputApellido = document.querySelector("#inputApellido");
const inputCodPostal = document.querySelector("#inputCodPostal");
const inputEmail__registro = document.querySelector("#inputEmail__registro");

const password__01 = document.querySelector("#inputPassword__registro1");
const password__02 = document.querySelector("#inputPassword__registro2");

let erroresValidacion = false;

function validarInputNombre(inputNombre) {
  if (inputNombre.length < 2) {
    erroresValidacion = true;

    const errorInputNombre = document.querySelector(".errorInputNombre");
    errorInputNombre.textContent =
      "El nombre tiene que tener 2 caracteres o mas";

    setTimeout(() => {
      errorInputNombre.textContent = "";
      document.querySelector("#inputNombre").value = "";
      document.getElementById(`inputNombre`).focus();
    }, 2000);
  }
}

if (!erroresValidacion) {
  form.addEventListener("submit", (event) => {
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

      const error = document.querySelector(".error");
      error.textContent = "Las contraseñas deben ser iguales";

      setTimeout(() => {
        error.textContent = "";
        document.querySelector("#inputPassword__registro1").value = "";
        document.querySelector("#inputPassword__registro2").value = "";
        document.getElementById(`inputPassword__registro1`).focus();
      }, 2000);
    }

    if (!erroresValidacion) {
      localStorage.setItem("datosRegistro", JSON.stringify(datosRegistro));
      form.reset();
      window.open("../index.html");
    }
  });
}

document.addEventListener("DOMContentLoaded", () => {
  datosLogin = JSON.parse(localStorage.getItem("datosLogin")) || [];
  datosRegistro = JSON.parse(localStorage.getItem("datosRegistro")) || [];

  renderLogin();
  renderRegistro();
});
