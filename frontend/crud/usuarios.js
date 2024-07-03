const { createApp } = Vue;

// Crea una instancia de la aplicación Vue
createApp({
  data() {
    return {
      usuarios: [], // Almacena los usuarios obtenidos del backend
      url: 'http://localhost:3000/usuarios', // URL local
      //url: "https://mysql-bjoseonet.alwaysdata.net /product", // URL del backend donde se encuentran los usuarios
      error: false,
      cargando: true,
      // Atributos para almacenar los valores del formulario
      id: 0,
      email: '',
      nombre: '',
      apellido: '',
      zip: '',
      passwors: '',
      fecha: '',
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json()) // Convierte la respuesta en formato JSON
        .then((data) => {
          // Asigna los datos de los usuarios obtenidos al arreglo 'usuarios'
          this.usuarios = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },

    eliminar(usuario, name, description, price, image) {
      const url = this.url + '/' + usuario;

      let delusuario = {
        dpCode: usuario,
      };

      var options = {
        body: JSON.stringify(delusuario), // Convertir el objeto a una cadena JSON
        method: 'DELETE', // Establece el método HTTP como DELETE
      };
      fetch(url, options)
        .then((res) => res.text()) // Convierte la respuesta en texto (or res.json())
        .then((res) => {
          location.reload(); // Recarga la página actual después de eliminar el usuario
        });
    },

    grabar() {
      let usuario = {
        email: this.email,
        first_name: this.nombre,
        last_name: this.apellido,
        zip: this.zip,
        password: this.password,
        date_jjoined: this.fecha,
      };

      // Configurar las opciones para la solicitud fetch
      var options = {
        body: JSON.stringify(usuario), // Convertir el objeto a una cadena JSON
        method: 'POST', // Establecer el método HTTP como POST
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };

      // Realizar una solicitud fetch para guardar el usuario en el servidor
      fetch(this.url, options)
        .then(function () {
          console.log('Registro grabado!');
          //alert("Registro grabado!");
          window.location.href = './cruduser.html'; // Redirigir a la página de usuarios
        })
        .catch((err) => {
          console.error(err);
          alert('Error al Grabar.');
        });
    },

    volver() {
      window.location.href = './cruduser.html'; // Redirigir a la página de usuarios
    },
  },

  created() {
    this.fetchData(this.url);
  },
}).mount('#app');
