# Final
 
Este proyecto implementa una API en Next.js 14 para gestionar la creación y actualización de clientes, incluyendo funcionalidades para almacenar información general relacionada con cada cliente. La API se conecta a una base de datos PostgreSQL mediante el ORM Prisma.

1. Configuración del Proyecto
Next.js 14: El proyecto fue creado utilizando npx create-next-app@latest para configurar una aplicación Next.js con soporte de TypeScript.

Prisma ORM: Se configuró Prisma como el ORM para interactuar con la base de datos PostgreSQL. Prisma se configuró con el esquema necesario para manejar las tablas relacionadas con los clientes y la información general de los mismos.

Se creó el archivo prisma/schema.prisma, donde se definieron las entidades Cliente e InformacionCliente con los campos requeridos.
2. Base de Datos
PostgreSQL fue utilizado como el sistema de gestión de base de datos. Se configuró una base de datos para almacenar los datos de clientes y su información general.

Prisma Client fue generado para interactuar con la base de datos de forma eficiente.

3. Endpoints de la API
Se crearon los siguientes endpoints en la carpeta app/api de Next.js siguiendo los principios de la arquitectura de Next.js 14:

POST /api/clientes: Permite la creación de un nuevo cliente. Los campos requeridos incluyen:

ID: Identificador único del cliente.
Nombres: Primer y segundo nombre del cliente.
Apellidos: Apellidos del cliente.
Género: Género del cliente.
Fecha de nacimiento: Fecha de nacimiento del cliente.
Estado: Estado del cliente (activo, inactivo, etc.).
POST /api/informacion: Permite registrar la información relacionada con un cliente (dirección, contacto, información financiera, etc.). Los campos incluyen:

Tipo de información: Tipo de dato que se está registrando (Dirección, Contactabilidad, Información Financiera).
Fecha de creación: Fecha en que se creó la información.
Fecha de actualización: Fecha en que se actualizó la información.
Usuario creador: Usuario que registró la información.
Estado de la información: Estado de la información (activa, inactiva, etc.).
GET /api/listado-general: Devuelve una lista de todos los clientes con sus respectivas informaciones generales. Los resultados están ordenados por fecha de creación y apellidos.

4. Configuración de Prisma
Prisma Schema: El archivo schema.prisma define dos modelos: Cliente e InformacionCliente, con relaciones entre ambas tablas. Cada tabla tiene los campos requeridos como parte del esquema.

El modelo Cliente contiene campos como id, nombres, apellidos, genero, fechaNacimiento, estado.

El modelo InformacionCliente incluye campos como tipoInformacion, fechaCreacion, fechaActualizacion, usuarioCreador, y estadoInformacion.

Generación de Prisma Client: Ejecutamos prisma generate para generar el cliente de Prisma, lo que permite la interacción con la base de datos desde el backend de Next.js.

5. Configuración del PATH y Prisma Client
Configuración del Path en PostgreSQL: Se configuró el Path para que el cliente psql de PostgreSQL sea accesible desde la terminal del sistema operativo, lo que facilita la interacción con la base de datos a través de la terminal.

Prisma Client: Prisma Client se utilizó para interactuar con la base de datos de PostgreSQL mediante el esquema previamente definido.

6. Validación y Pruebas
Pruebas con Postman: Se realizaron pruebas de los endpoints utilizando Postman, asegurando que los datos se almacenan correctamente en la base de datos y que las consultas se realizan según lo esperado.

Para la prueba de los endpoints POST y GET, se validaron las respuestas de la API, asegurando que las consultas fueran exitosas y devolvieran la información correcta.
