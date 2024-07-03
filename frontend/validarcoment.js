const apiUrl = 'http://localhost:3000';

var datosComent = [];

const form = document.querySelector('.coment');
const nombre = document.querySelector('#nombre');
const email = document.querySelector('#email');
const mensaje = document.getElementById('mensaje');

form.addEventListener('submit', (event) => {
  event.preventDefault();

  datosComent[0] = email.value.trim();
  datosComent[1] = mensaje.value.trim();

  localStorage.setItem('datosComent', JSON.stringify(datosComent));
  const store = {
    email: datosComent[0],
    coment: datosComent[1],
  };

  storeComent(store);
  form.reset();
  window.open('../index.html', '_self');
});

function storeComent(store) {
  const options = {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(store),
  };
  fetch(`${apiUrl}/coment/`, options)
    .then((response) => {
      // Verifica si la respuesta es exitosa
      if (!response.ok) {
        throw new Error(`Error en la solicitud: ${response.statusText}`);
      }
      console.log('response.status');
      console.log(response.status);
      if (response.status == 404) {
        const error = document.querySelector('.error');
        error.textContent = 'Este mail ya esta registrado';

        setTimeout(() => {
          error.textContent = '';
          document.querySelector('#email').value = '';
          document.getElementById(`email`).focus();
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
