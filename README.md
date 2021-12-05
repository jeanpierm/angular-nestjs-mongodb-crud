# Prueba técnica por Jeanpier Mendoza

## Feedback

La prueba me resultó interesante de desarrollar, sobretodo cuando implementé el patrón de diseño Factory para la creación de usuarios.

A continuación, permítanme comentarles algunas decisiones que tomé:

- Dado a que la base de datos es MongoDB (No relacional), aproveché la flexibilidad que brinda este tipo de bases de datos para que, con el mismo schema poder crear ambos tipos de usuarios (internos y externos). Puesto que eso es parte de la naturaleza de las BDD NoSQL.

- La pantalla del frontend que hace la consulta de los usuarios la hice dinámica, es decir, las columnas de la tabla de usuarios cambia en sentido del tipo de usuario seleccionado. Permitiendo visualizar todos los usuarios o solo de un tipo específico desde la misma tabla.

- Hice unos diagramas para ejemplificar de manera más gráfica la arquitectura y diseño del proyecto. Además de algunas capturas para este readme.

## Backend

### Diagrama de la arquitectura de microservicios

![Diagrama de la arquitectura de microservicios](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/microservices-diagram.png)

### Diagrama de clases del patrón de diseño Factory Method

![Diagrama de clases del patrón de diseño Factory Method](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/factory-diagram.png)

### Imágenes de los servicios

![Imágenes de los servicios](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/microservices-images.png)

### Contenedores de los servicios

![Contenedores de los servicios](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/microservices-containers.png)

### Orquestación con docker-compose de los servicios

![Orquestación con docker-compose de los servicios](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/microservices-running.png)

### Obtener todos los usuarios (GET)

![Crear Usuario](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/get-users.png)

### Obtener usuarios por tipo de usuario (interno o externo) (GET)

![Obtener usuario por tipo de usuario (interno o externo)](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/get-users-by-type.png)

### Obtener usuario por id (GET)

![Obtener usuario por id](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/get-user-by-id.png)

### Crear usuario (POST)

![Crear usuario](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/create-user.png)

### Actualizar usuario parcialmente (PATCH)

![Actualizar usuario parcialmente](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/update-user.png)

### Eliminar usuario (DELETE)

![Eliminar usuario](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/delete-user.png)

### Validaciones

![Validaciones 1](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/validation-1.png)

![Validaciones 2](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/validation-2.png)

## Frontend

### Consulta de todos los usuarios

![Consulta de todos los usuarios](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/ui-1.png)

![Consulta de todos los usuarios](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/ui-4.png)

### Consulta de usuarios por tipo (interno)

![Consulta de usuarios internos](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/ui-2.png)

### Consulta de usuarios por tipo (externo)

![Consulta de usuarios externos](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/ui-3.png)
