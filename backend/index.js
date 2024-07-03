require('dotenv').config();

const express = require('express');
const app = express();
const cors = require('cors');
app.use(cors({}));

// midelware
app.use(express.static('public'));

// si recibo formulario
//app.use(express.urlencoded({ extended: false }));

app.use(express.json());

// PRODUCTOS
// const productosRouter = require('./routes/productos.router');
// app.use('/productos', productosRouter);

// lo anterior se puede escribir asi
app.use('/product', require('./routes/product.router'));

// COMENTARIOS

app.use('/coment', require('./routes/coment.router'));

// USUARIOS

app.use('/usuarios', require('./routes/usuarios.router'));

// AUTENTICACION

app.use('/auth', require('./routes/auth.router'));

const PORT = process.env.PORT || 3000;
//const PORT = 3000;

app.listen(PORT, () => console.log(`http://localhost:${PORT}`));
