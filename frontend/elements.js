header = document.querySelector('header').innerHTML = `
  <div class="navbar">
  <div class="topnav" id="myTopnav">
      <img class="logo" src="../img/logopizzcode.svg" alt="logo">
      <a href="../index.html">HOME</a>
      <a href="../nosotros/nosotros.html">NOSOTROS</a>
      <a href="../contacto/contacto.html">CONTACTENOS</a>
      <a href="../login/login.html"><button>LOGIN</button></a>
      <a href="javascript:void(0);" class="icon" onclick="burguerMenu()">
          <i class="fa fa-bars"></i>
      </a>
  </div>
  </div>
  `;

header.innerHTML += header;

let footer = (document.querySelector('footer').innerHTML = `
<div>
<p class="text-presentation">Somos la mejor pizeria de la cuadra. </p>
<p class='rights-text'>© 2024 Grupo 2. All right reserved.</p>
</div>
<div>
<h3>Siguenos en nuestras redes</h3>
<div class="redes-sociales">
  <a href="https://twitter.com/?lang=en" target="_blank"><i class="fab fa-twitter"></i></a>
  <a href="https://www.facebook.com/" target="_blank"><i class="fab fa-facebook"></i></a>
  <a href="https://www.instagram.com/" target="_blank"><i class="fab fa-instagram"></i></a>
</div>
</div>

`);

footer.innerHTML += footer;

let datosRegistro = [];
document.addEventListener('DOMContentLoaded', () => {
  datosRegistro = JSON.parse(localStorage.getItem('datosRegistro')) || [];
  console.log('DOMContentLoaded');
  console.log(datosRegistro);

  if (datosRegistro.length > 0) {
    const msgBienvenida = document.querySelector('.datosUser');
    msgBienvenida.textContent =
      'Hola ' + datosRegistro[0] + ' que lindo verte de nuevo por aqui';
  }
});
