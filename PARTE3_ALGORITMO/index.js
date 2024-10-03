const fs = require('fs');
const readline = require('readline');

// Crear una interfaz para la entrada y salida
const rl = readline.createInterface({
  input: process.stdin,
  output: process.stdout
});
// Nombre del archivo a leer
const archivo = 'urls.txt';
// Función para leer el archivo y filtrar Urls
const filtrarUrls = (palabraClave) => {
  fs.readFile(archivo, 'utf-8', (err, data) => {
    if (err) {
      console.error('Error al leer el archivo:', err);
      return;
    }
    // Divide el contenido en un arreglo y elimina espacios en blanco
    const urls = data.split('\n').map(url => url.trim());

    // Filtra y obtiene URLs únicas que contengan la palabra clave y terminen en '.html'
    const urlsFiltradas = Array.from(new Set(urls.filter(url => {
      return url.includes(palabraClave) && url.endsWith('.html');
    })));

    if(urlsFiltradas<1){
        console.log('No hay urls con ese dominio :v')
    }else{
        console.log(`La cantidad de Urls son: ${urls.length} `);
        console.log(`Urls que cumples los requisitos son: ${urlsFiltradas.length}`, urlsFiltradas);
    }
  });
};
// Pide al usuario que ingrese la palabra clave y trae al metodo filtrar
rl.question('Introduce la palabra del dominio a filtrar (ejemplo: shop): ', (respuesta) => {
  const palabraClave = respuesta.trim();
  filtrarUrls(palabraClave);
  rl.close(); 
});
