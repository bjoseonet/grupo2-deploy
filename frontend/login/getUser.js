const apiUrl = 'http://localhost:3000';
//const apiUrl = 'http://mysql-bjoseonet.alwaysdata.net';

var datosLogin = [];
//var datosRegistro = [];

function getUser(email, passwordInput) {
  fetch(`${apiUrl}/usuarios/${email}`, {
    method: 'GET',
  })
    .then((response) => {
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        console.log('response.statusText');
        console.log(response.statusText);
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      return response.json();
    })
    .then((data) => {
      console.log('Datos recibidos:', data); // Imprime los datos para la depuración
      validarUserData(data, passwordInput);
    })
    .catch((error) => {
      console.error('Error fetching user data:', error);
      validarUserData([], passwordInput); // Llama a la función con una lista vacía en caso de error
    });
}

function validarUserData(data, passwordInput) {
  if (data.length > 0) {
    console.log('validarUserData');
    data.forEach((user) => {
      let passwrodRead = user.password;
      datosRegistro[0] = user.first_name;
      datosRegistro[1] = user.last_name;
      datosRegistro[2] = user.zip;
      datosRegistro[3] = user.email;
      datosRegistro[4] = user.password;

      if (passwordInput != passwrodRead) {
        const passwordIncorrecta = document.querySelector(
          '.passwordIncorrecta'
        );
        passwordIncorrecta.textContent =
          'La contraseña ingresada es incorrecta.';

        setTimeout(() => {
          passwordIncorrecta.textContent = '';
          document.querySelector('#inputPassword').value = '';
          document.getElementById(`inputPassword`).focus();
        }, 2000);
      } else {
        localStorage.setItem('datosRegistro', JSON.stringify(datosRegistro));
        console.log('usuario correcto');
      }
    });
  } else {
    const errorNoExisteUser = document.querySelector('.errorNoExisteUser');
    errorNoExisteUser.textContent =
      'No se encontraron datos para este usuario.';

    setTimeout(() => {
      errorNoExisteUser.textContent = '';
      document.querySelector('#inputEmail').value = '';
      document.getElementById(`inputEmail`).focus();
    }, 2000);
  }
}

function storeUser(store) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(store),
  };
  fetch(`${apiUrl}/usuarios/`, options)
    .then((response) => {
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      console.log('response.status');
      console.log(response.status);
      if (response.status == 200) {
        const error = document.querySelector('.error');
        error.textContent = 'Este mail ya esta registrado';

        setTimeout(() => {
          error.textContent = '';
          document.querySelector('#inputEmail__registro').value = '';
          document.getElementById(`inputEmail__registro`).focus();
        }, 2000);
      }

      return response.json();
    })
    .then((data) => {
      console.log('Datos recibidos:', store); // Imprime los datos para la depuración
    })
    .catch((error) => {
      console.error('Error fetching user store:', error);
    });
}
