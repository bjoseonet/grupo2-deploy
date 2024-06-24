const apiUrl = 'http://localhost:3000';

function getUser(email, passwordInput) {
  fetch(`${apiUrl}/usuarios/${email}`, {
    method: 'GET',
  })
    .then((response) => {
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
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
    data.forEach((user) => {
      let passwrodRead = user.password;
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
