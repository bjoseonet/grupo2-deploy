const { createApp } = Vue;

// Crea una instancia de la aplicación Vue
createApp({
  data() {
    return {
      productos: [], // Almacena los productos obtenidos del backend
      url: 'http://localhost:3000/product', // URL local
      //url: "https://mysql-bjoseonet.alwaysdata.net /product", // URL del backend donde se encuentran los productos
      error: false,
      cargando: true,
      // Atributos para almacenar los valores del formulario
      id: 0,
      nombre: '',
      descripcion: '',
      imagen: '',
      precio: 0,
    };
  },
  methods: {
    fetchData(url) {
      /**El método fetchData realiza una solicitud HTTP utilizando la función fetch a la URL especificada.
       * Luego, los datos de respuesta se convierten en formato JSON y se asignan al arreglo productos.
       * Además, se actualiza la variable cargando para indicar que la carga de productos ha finalizado.
       * En caso de producirse un error, se muestra en la consola y se establece la variable error en true.
       *
       */
      fetch(url)
        .then((response) => response.json()) // Convierte la respuesta en formato JSON
        .then((data) => {
          // Asigna los datos de los productos obtenidos al arreglo 'productos'
          this.productos = data;
          this.cargando = false;
        })
        .catch((err) => {
          console.error(err);
          this.error = true;
        });
    },

    eliminar(producto, name, description, price, image) {
      const url = this.url + '/' + producto;

      let delproducto = {
        dpCode: producto,
      };

      var options = {
        body: JSON.stringify(delproducto), // Convertir el objeto a una cadena JSON
        method: 'DELETE', // Establece el método HTTP como DELETE
      };
      fetch(url, options)
        .then((res) => res.text()) // Convierte la respuesta en texto (or res.json())
        .then((res) => {
          location.reload(); // Recarga la página actual después de eliminar el producto
        });
    },

    grabar() {
      let producto = {
        product_name: this.nombre,
        price: this.precio,
        description: this.descripcion,
        image: this.imagen,
      };

      // Configurar las opciones para la solicitud fetch
      var options = {
        body: JSON.stringify(producto), // Convertir el objeto a una cadena JSON
        method: 'POST', // Establecer el método HTTP como POST
        headers: { 'Content-Type': 'application/json' },
        redirect: 'follow',
      };

      // Realizar una solicitud fetch para guardar el producto en el servidor
      fetch(this.url, options)
        .then(function () {
          console.log('Registro grabado!');
          //alert("Registro grabado!");
          window.location.href = './crudproduct.html'; // Redirigir a la página de productos
        })
        .catch((err) => {
          console.error(err);
          alert('Error al Grabar.');
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
