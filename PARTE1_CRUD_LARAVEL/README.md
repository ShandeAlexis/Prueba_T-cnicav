
# Documentación del Proyecto

## 1. Instrucciones de Ejecución

### Requisitos Previos
Asegúrate de tener instalado lo siguiente:

- **PHP** (7.4 o superior)
- **Composer**
- **MySQL**
- **XAMPP**
- **Node.js** y **npm** (opcional)
- **POSTMAN** (opcional)

### Clonación del Repositorio

Para empezar, clona el repositorio en tu máquina local:
```bash
git clone https://github.com/ShandeAlexis/Prueba_T-cnicav.git
cd PARTE1_CRUD_LARAVEL 
```
## 2.  Instalación de Dependencias
Instala las dependencias del proyecto utilizando Composer:
```bash
composer install
```
## 3.  Configuración de la Base de Datos y .env

 - Crea una base de datos en MySQL.
 - Copia el archivo `.env.example` y renómbralo a `.env`:
 ```bash
cp .env.example .env
```
 - Abre el archivo `.env` y configura los parámetros de conexión a la base de datos:
```bash
DB_CONNECTION=mysql
DB_HOST=127.0.0.1
DB_PORT=3306
DB_DATABASE=nombre_de_tu_base_de_datos
DB_USERNAME=tu_usuario
DB_PASSWORD=tu_contraseña
```
 - Ejecuta las migraciones para crear las tablas en la base de datos:
  ```bash
php artisan migrate
```
 - Para ejecutar el servidor de desarrollo de Laravel, utiliza el siguiente comando:
  ```bash
php artisan serve
```
La aplicación estará disponible en `http://localhost:8000`.

## 4. Rutas del API
Las siguientes son las rutas disponibles en la aplicación:

| Método | Ruta                     | Descripción                          |
|--------|--------------------------|--------------------------------------|
| GET    | `http://localhost:8000/products`              | Listar todos los productos           |
| GET    | `http://localhost:8000/products/{id}`         | Buscar un producto por ID            |
| POST   | `http://localhost:8000/products`              | Crear un nuevo producto              |
| PUT    | `http://localhost:8000/products/{id}`         | Actualizar un producto por ID        |
| DELETE | `http://localhost:8000/products/{id}`         | Eliminar un producto por ID          |

## 5. Ejemplo de Solicitudes en Postman/Bruno ,etc.

### Crear Producto
- **Método**: `POST`
- **URL**: `http://localhost:8000/api/products`
- **Descripción**: Crea un nuevo producto.
- **Cuerpo de Solicitud** (JSON):
  ```json
  {
    "name": "Laptop",
    "price": 3999.99,
    "stock": 6,
    "description": "Es una laptop de 11va generacion."
  }
## 6. Decisiones de Desarrollo

Durante el desarrollo de este CRUD API para la gestión de productos, se tomaron algunas decisiones para su elaboración:

1. **Creación del Modelo `Product`**: Se diseñó un modelo de `Product` utilizando Eloquent ORM de Laravel. Este modelo representa la tabla de productos en la base de datos y permite realizar operaciones de creación, lectura, actualización y eliminación (CRUD) de manera sencilla y eficiente.

2. **Validación de Datos**: Se implementaron reglas de validación para los datos entrantes, lo que garantiza que se reciban valores correctos y en el formato esperado. Esto ayuda a prevenir errores y asegura la integridad de los datos en la base de datos.

3. **Manejo de Errores**: Se incluyó un manejo de errores adecuado mediante bloques `try-catch`, lo que permite capturar excepciones y devolver mensajes significativos al cliente. Esto mejora la experiencia del desarrollador y facilita la depuración.

4. **Uso de JSON**: Se optó por el formato JSON para las solicitudes y respuestas de la API, lo que es ampliamente aceptado y fácil de manejar en aplicaciones frontend, así como en herramientas como Postman.

Estas decisiones se tomaron con el objetivo de crear una API robusta, fácil de usar y mantenible, que pueda escalar según las necesidades futuras del proyecto.
