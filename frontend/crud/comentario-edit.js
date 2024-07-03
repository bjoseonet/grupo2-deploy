console.log(location.search); // Imprime en la consola los argumentos pasados a este formulario
var id = location.search.substr(4); // Obtiene el valor del argumento 'id' de la URL
console.log(id);
const { createApp } = Vue;
var Code = 0;
var Usuario = '';
var Comentario = '';
var Fecha = '';
createApp({
  data() {
    return {
      // Inicializa las variables
      id: 0,
      usuario: '',
      fecha: '',
      comentario: '',
      url: 'http://localhost:3000/coment/' + id,
    };
  },

  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.id = Code = data.id;
          this.usuario = Usuario = data.usuario;
          this.fecha = Fecha = data.date_coment;
          this.comentario = Comentario = data.coment;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    modificar() {
      let comentario = {
        usuario: this.usuario,
        coment: this.comentario,
        date_coment: this.fecha,
      };
      var options = {
        body: JSON.stringify(comentario),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };
      fetch(this.url, options)
        .then(function () {
          console.log('Registro actualizado!');
          //alert('Registro actualizado!');
          window.location.href = './crudcoment.html';
        })
        .catch((err) => {
          console.error(err);
          alert('Error al actualizar.');
        });
    },
    volver() {
      window.location.href = './crudcoment.html'; // Redirigir a la página de cometarios
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');
