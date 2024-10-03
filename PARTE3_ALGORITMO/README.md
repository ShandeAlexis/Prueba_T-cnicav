

# Documentación del Proyecto

## 1. Instrucciones de Ejecución

### Requisitos Previos
Asegúrate de tener instalado lo siguiente:

- **Node.Js** (v14 o superior)
-  **npm**
-  **Visual Studio Code** 
### Clonación del Repositorio

Para empezar, clona el repositorio en tu máquina local:
```bash
git clone https://github.com/ShandeAlexis/Prueba_T-cnicav.git
cd PARTE3_ALGORITMO 
```
## 2.  Ejecutar el programa
En la misma terminar escribir el siguiente comando para ejecutar el programa: 
```bash
node index.js
```
## 3.  Indicaciones del programa

 1. Las urls estan en el archivo **urls.txt**
 2. Una vez ejecutado te mostrara lo siguiente en consola : **"Introduce la palabra del dominio a filtrar (ejemplo: shop): "**
 3. Debes ingresar la palabra que quieres y presionar Enter para que se filtre los urls:
```bash
Introduce la palabra del dominio a filtrar (ejemplo: shop): example
La cantidad de Urls son: 325 
Urls que cumples los requisitos son: 3 [
  'https://www.example.com/test.html',
  'https://www.example.com/about-us.html',
  'https://www.example.com/index.html'
]
```
 4. En caso no se encuentre ninguna url que cumpla con el **dominio** y tenga **.html** , se mostrara lo siguiente: 
  ```bash
Introduce la palabra del dominio a filtrar (ejemplo: shop): gato
No hay urls con ese dominio :v
```
Y así el algoritmo elaborado para esta problemática estaría completo.

## 4. Como funciona el algoritmo

1. **Leer Archivo**: Abre y lee el archivo `urls.txt`.
2. **Solicitar Palabra Clave**: Pregunta al usuario qué palabra buscar (ejemplo: "shop").
3. **Filtrar URLs**: Encuentra URLs que contengan la palabra clave y terminen en `.html`, eliminando duplicados.
4. **Mostrar Resultados**: Imprime cuántas URLs hay y las que cumplen con los criterios.


## 5. Técnicas de Optimización

- **Lectura Asíncrona**: 
  - Usa `fs.readFile` para evitar bloqueos mientras se lee el archivo.

- **Uso de `Set`**: 
  - Almacena URLs únicas, garantizando una complejidad de inserción promedio de O(1).

- **Manejo de Errores**: 
  - Asegura que los errores de lectura no silencien fallos del programa.

- **Eficiencia en Memoria**: 
  - Utiliza `split('\n')` y `map` para procesar solo las cadenas necesarias.

- **Filtrado en un Solo Paso**: 
  - Combina `filter`, `includes` y `endsWith` para evitar múltiples recorridos del arreglo.

  # MUCHAS GRACIAS
     ![gato](https://i.pinimg.com/236x/29/68/e2/2968e2f3d82f9ece406919b9a8e183b9.jpg)
