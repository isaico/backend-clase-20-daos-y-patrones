import 'dotenv/config';
import express from 'express';
import { productRouter, cartRouter } from './src/Routes/index.js';
// import minimist from 'minimist';
// import ProductosApi from './src/api/productos.api.js';
// 
// async function start() {
  // const argv = minimist(process.argv.slice(2));
  // const { cmd, id, nombre,descripcion, precio, foto, stock } = argv;
// 
  // console.log('Instanciando la API');
  // const productosApi = new ProductosApi();
// 
  // try {
    // switch (cmd.toLowerCase()) {
      // case 'buscar':
        // console.log(cmd);
        // console.log(await productosApi.buscar(id));
        // break;
// 
      // case 'agregar':
        // console.log(cmd);
        // console.log(await productosApi.agregar({ nombre,descripcion, precio,foto, stock }));
        // break;
// 
      // case 'reemplazar':
        // console.log(cmd);
        // console.log(
          // await productosApi.reemplazar(id, { nombre, precio, stock })
        // );
        // break;
// 
      // case 'borrar':
        // console.log(cmd);
        // await productosApi.borrar(id);
        // break;
// 
      // default:
        // console.log('comando no válido:', cmd);
    // }
  // } catch (error) {
    // console.log(error);
  // }
// 
  // productosApi.exit();
// }
// 
// start();
const app = express();
const PORT = process.env.PORT || 8080;

app.use(express.json());
app.use(express.urlencoded({ extended: true }));

app.use('/api',productRouter)
app.use('/api',cartRouter)


const server = app.listen(PORT, () => {
console.log(`🚀 🚀 server is runing at http://localhost:${PORT} 🔥`);
});

server.on('error', (err) => {
console.log(err);
});
// 