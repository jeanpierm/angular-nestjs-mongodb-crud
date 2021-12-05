# Prueba técnica por Jeanpier Mendoza

## Feedback

La prueba me resultó interesante de desarrollar, sobretodo cuando implementé el patrón de diseño Factory para la creación de usuarios.

A continuación, permítanme comentarles algunas decisiones que tomé en esta prueba:

- Dado a que la base de datos es MongoDB (No relacional), aproveché la flexibilidad que brinda este tipo de bases de datos para que, con el mismo schema poder crear ambos tipos de usuarios (internos y externos). Puesto que eso es parte de la naturaleza de las BDD NoSQL.

- La pantalla del frontend que hace la consulta de los usuarios la hice dinámica, es decir, las columnas de la tabla de usuarios cambia en sentido del tipo de usuario seleccionado. Permitiendo visualizar todos los usuarios o solo de un tipo específico desde la misma tabla.

- Hice unos diagramas para ejemplificar de manera más gráfica la arquitectura y diseño del proyecto. Además de algunas capturas para este readme, las cuales podrán encontrar más abajo.

## Orquestación de servicios

Cada proyecto tiene su Dockerfile, es decir, el Dockerfile del backend está en la rama v1 y el Dockerfile del frontend está en la rama v2.

Para la orquestación de los servicios de esta prueba con arquitectura de microservicios, usé docker-compose.

El archivo docker-compose.yml para orquestar los servicios se encuentra en el backend (rama v2).

    version: '3.8'

    services:

      usuarioMS:
        image: mongo
        volumes:
          - mongo-data:/data/db
        ports:
          - 27017:27017
        restart: always

      usuarioPY:
        image: jeanp0/users-microservice:1.0
        build:
          context: .
        ports:
          - 3000:3000
        restart: always
        depends_on:
          - usuarioMS
        environment:
          MONGO_HOST: usuarioMS

      usuarioUI:
        image: jeanp0/users-frontend:1.0
        build:
          context: ../users-frontend/ # relative path of the front project
        ports:
          - 80:80
        restart: always

    volumes:
      mongo-data:

Nota: el servicio "usuarioUI" (el frontend) definido en el docker-compose.yml, está definido de tal forma que la carpeta del frontend está fuera del backend (un nivel arriba en la jerarquía de directorios).

## Levantar contenedores

```bash
# Levantar contenedores (si no existen las imágenes de los servicios se buildean)
$ docker-compose up

# Ó

# Levantar contenedores re-buildeando las imágenes de los servicios
$ docker-compose up --build
```

## Dar de baja contenedores

```bash
docker-compose down
```

## Backend

### Diagrama de la arquitectura de microservicios

![Diagrama de la arquitectura de microservicios](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/microservices-diagram.png)

### Diagrama de clases del patrón de diseño Factory Method

![Diagrama de clases del patrón de diseño Factory Method](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/factory-diagram.png)

### Orquestación con docker-compose de los servicios

![Orquestación con docker-compose de los servicios](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/microservices-running.png)

### Imágenes de los servicios

![Imágenes de los servicios](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/microservices-images.png)

### Contenedores de los servicios

![Contenedores de los servicios](https://raw.githubusercontent.com/jeanpierm/prueba-gizlo/master/captures/microservices-containers.png)

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
