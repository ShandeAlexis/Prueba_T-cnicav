

# Documentación del Proyecto

## 1. Instrucciones de Ejecución

### Requisitos Previos
Asegúrate de tener instalado lo siguiente:

- **Node.Js** (v14 o superior)
- **MySQL**
-  **npm**
- **POSTMAN** (opcional)

### Clonación del Repositorio

Para empezar, clona el repositorio en tu máquina local:
```bash
git clone https://github.com/ShandeAlexis/Prueba_T-cnicav.git
cd PARTE2_CRUD_EXPRESS 
```
## 2.  Instalación de Dependencias
Instala las dependencias del proyecto utilizando el siguiente comando:
```bash
`npm install`
```
## 3.  Configuración de la Base de Datos y .env

 - Crea una base de datos en MySQL.
 - Abre el archivo `.env` y configura los parámetros de conexión a la base de datos:
```bash
PORT=3000
DB_USER='root'
DB_PASSWORD='tupassword'
DB_HOST='localhost'
DB_NAME='nombredetubasedatos'
DB_PORT='3306'
```
 - Para ejecutar el servidor de desarrollo de Laravel, utiliza el siguiente comando:
  ```bash
npm run dev
```
La aplicación estará disponible en `http://localhost:3000`.

## 6. Rutas del API
Las siguientes son las rutas disponibles en la aplicación:

| Método | Ruta                     | Descripción                          |
|--------|--------------------------|--------------------------------------|
| GET    | `http://localhost:3000/products`              | Listar todos los productos           |
| GET    | `http://localhost:3000/products/{id}`         | Buscar un producto por ID            |
| POST   | `http://localhost:3000/products`              | Crear un nuevo producto              |
| PUT    | `http://localhost:3000/products/{id}`         | Actualizar un producto por ID        |
| DELETE | `http://localhost:3000/products/{id}`         | Eliminar un producto por ID          |

## 7. Ejemplo de Solicitudes en Postman/Bruno ,etc.

### Crear Producto
- **Método**: `POST`
- **URL**: `http://localhost:3000/api/products`
- **Descripción**: Crea un nuevo producto.
- **Cuerpo de Solicitud** (JSON):
  ```json
  {
    "name": "Laptop",
    "price": 3999.99,
    "stock": 6,
    "description": "Es una laptop de 11va generacion."
  }
## 8. Proceso de Aprendizaje

He aprendido a utilizar este framework a través de diversos recursos, incluyendo tutoriales en YouTube y la lectura de la documentación oficial. En situaciones más complejas, he recurrido a herramientas de inteligencia artificial para aclarar dudas específicas relacionadas con el framework.
Durante este proceso, enfrenté varios desafíos, tales como la adaptación a la metodología para crear y gestionar bases de datos, así como la instalación de las librerías necesarias para asegurar el correcto funcionamiento del CRUD. Para superar estos obstáculos, investigué el propósito y la funcionalidad de cada librería, y realicé prácticas previas a la implementación en la rama principal del proyecto.
