# Challenge GOTAM - Friadenrich Agustín

## Estimación de horas.

|         Tarea          | Horas previstas | Horas reales |
|------------------------|-----------------|--------------|
| Creación del proyecto  |      1.5hs      |    1.5hs     |
| Creación de la API     |      4hs        |    4hs       |
| Conexión a la DB       |      2hs        |    1.5hs     |
| Creación del front     |      2.5hs      |    4.5hs     |
| Testing                |      3hs        |    3hs       |
| Documentar             |      1.5hs      |    1h        |

## Pasos necesarios para ejecutar la aplicación

1. Clonar el repositorio

`git clone https://github.com/AgustinFrich/Challenge-GOTAM.git`

2. Navegar hasta la carpeta del proyecto clonado

`cd Challenge-GOTAM/`

3. Levantar el proyecto con docker

`docker-compose up --build`

Una vez termine de ejecutar el comando, la aplicación frontend estará ubicada en http://localhost:4200 y la aplicación backend estará ubicada en http://localhost:3000.

Por defecto, el puerto expuesto de la base de datos es el `3307`, para evitar conflictos con puertos existentes.

## Paquetes utilizados

- `angular` versión 17 para el desarrollo de la aplicación frontend.
- `bootstrap` para el estilado de la aplicación.
- `sweetalert2` para mostrar ventanas modales agradables al usuario.
- `nestjs` versión 10 para el desarrollo de la aplicación backend.
- `typeorm` para la conexión a la DB.
- `mysql2` para la DB mysql.
- `@nestjs/swagger` para la documentación.
- `jest` para testing.

## Documentación

La documentación se encuentra en la ruta `/docs` de la aplicación nest. 
- http://localhost:3000/docs

## Testing
1. Navegar hasta la carpeta del servidor.
`cd ./challenge-gotam-server`

2. Instalar los paquetes de node. 
`npm install`

3. Ejecutar los scripts de testing:
`npm run test`
