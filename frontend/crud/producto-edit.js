console.log(location.search); // Imprime en la consola los argumentos pasados a este formulario
var id = location.search.substr(4); // Obtiene el valor del argumento 'id' de la URL
console.log(id);
const { createApp } = Vue;
var Code = 0;
var Name = '';
var Descripcion = '';
var Price = 0;
var Imagen = '';
createApp({
  data() {
    return {
      // Inicializa las variables
      id: 0,
      nombre: '',
      imagen: '',
      descripcion: '',
      precio: 0,
      url: 'http://localhost:3000/product/' + id,
    };
  },

  methods: {
    fetchData(url) {
      fetch(url)
        .then((response) => response.json())
        .then((data) => {
          console.log(data);
          this.id = Code = data.id;
          this.nombre = Name = data.product_name;
          this.imagen = Imagen = data.image;
          this.descripcion = Descripcion = data.description;
          this.precio = Price = data.price;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },
    modificar() {
      let producto = {
        product_name: this.nombre,
        price: this.precio,
        description: this.descripcion,
        image: this.imagen,
      };
      var options = {
        body: JSON.stringify(producto),
        method: 'PUT',
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };
      fetch(this.url, options)
        .then(function () {
          console.log('Registro actualizado!');
          //alert('Registro actualizado!');
          window.location.href = './crudproduct.html';
        })
        .catch((err) => {
          console.error(err);
          alert('Error al actualizar.');
        });
    },
    volver() {
      window.location.href = './crudproduct.html'; // Redirigir a la página de productos
    },
  },
  created() {
    this.fetchData(this.url);
  },
}).mount('#app');
