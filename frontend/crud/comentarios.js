const { createApp } = Vue;

// Crea una instancia de la aplicación Vue
createApp({
  data() {
    return {
      comentarios: [], // Almacena los comentarios obtenidos del backend
      url: 'http://localhost:3000/coment', // URL local
      error: false,
      cargando: true,
      // Atributos para almacenar los valores del formulario
      id: 0,
      usuario: '',
      comentario: '',
      fecha: '',
    };
  },
  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json()) // Convierte la respuesta en formato JSON
        .then((data) => {
          // Asigna los datos de los comentarios obtenidos al arreglo 'comentarios'
          this.comentarios = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },

    eliminar(comentario, usuario, coment, date_coment) {
      const url = this.url + '/' + comentario;

      let delcomentario = {
        dpCode: comentario,
      };

      var options = {
        body: JSON.stringify(delcomentario), // Convertir el objeto a una cadena JSON
        method: 'DELETE', // Establece el método HTTP como DELETE
      };
      fetch(url, options)
        .then((res) => res.text()) // Convierte la respuesta en texto (or res.json())
        .then((res) => {
          location.reload(); // Recarga la página actual después de eliminar el comentario
        });
    },

    grabar() {
      let comentario = {
        coment: this.comentario,
        email: this.usuario,
        // date_coment: this.fecha,
      };

      // Configurar las opciones para la solicitud fetch
      var options = {
        body: JSON.stringify(comentario), // Convertir el objeto a una cadena JSON
        method: 'POST', // Establecer el método HTTP como POST
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };

      // Realizar una solicitud fetch para guardar el comentario en el servidor
      fetch(this.url, options)
        .then(function () {
          console.log('Registro grabado!');
          //alert("Registro grabado!");
          window.location.href = './crudcoment.html'; // Redirigir a la página de comentarios
        })
        .catch((err) => {
          console.error(err);
          alert('Error al Grabar.');
        });
    },

    volver() {
      window.location.href = './crudcoment.html'; // Redirigir a la página de comentarios
    },
  },

  created() {
    this.fetchData(this.url);
  },
}).mount('#app');
