console.log(location.search); // Imprime en la consola los argumentos pasados a este formulario
var id = location.search.substr(4); // Obtiene el valor del argumento 'id' de la URL
console.log(id);
const { createApp } = Vue;
var Code = 0;
var Email = '';
var Name = '';
var Last_name = '';
var Zip = '';
var Password = '';
var Fecha = '';
createApp({
  data() {
    return {
      // Inicializa las variables
      id: 0,
      email: '',
      name: '',
      last_name: '',
      zip: '',
      password: '',
      fecha: '',
      url: 'http://localhost:3000/usuarios/' + id,
    };
  },

  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data[0]);
          this.id = Code = data[0].id;
          this.email = Email = data[0].email;
          this.name = Name = data[0].first_name;
          this.last_name = Last_name = data[0].last_name;
          this.zip = Zip = data[0].zip;
          this.password = Password = data[0].password;
          this.fecha = Fecha = data[0].date_joined;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    modificar() {
      let usuario = {
        id: this.id,
        email: this.email,
        first_name: this.name,
        last_name: this.last_name,
        zip: this.zip,
        password: this.password,
        date_joined: this.fecha,
      };
      var options = {
        body: JSON.stringify(usuario),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };
      fetch(this.url, options)
        .then(function () {
          console.log('Registro actualizado!');
          //alert('Registro actualizado!');
          window.location.href = './cruduser.html';
        })
        .catch((err) => {
          console.error(err);
          alert('Error al actualizar.');
        });
    },
    volver() {
      window.location.href = './cruduser.html'; // Redirigir a la página de productos
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');
