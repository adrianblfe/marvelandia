# Marvelandia
## Configuración del proyecto
Primero instala las dependencias del proyecto:
```
npm install
```
Ahora necesitas obtener la clave pública y privada de [Marvel developer](https://developer.marvel.com/) para poder hacer las peticiones a la API.

Una vez lo hayas obtenido, debes crear un fichero de variables de entorno, para eso hay un ejemplo en la raíz del proyecto llamando **.env.example**, puedes renombrar el mismo a **.env.local** o crear una copia con dicho nombre.

Y finalmente, copia las claves privadas y públicas de Marvel developer y pégalos como valor en las variables de entorno ya creadas, se muestra un ejemplo de como debería quedar:
```
VUE_APP_PUBLIC_KEY_MARVEL=fsd890sd8989087dbg8954528e56bg23
VUE_APP_PRIVATE_KEY_MARVEL=asd324gfgfd4243dbg8954528e56bg23
```

### Compila y arranca el proyecto
```
npm run serve
```
## Arrancar el proyecto con Docker
También está disponible un fichero Dockerfile para levantar el proyecto. Primero construimos la imagen:

    docker build -t marvelandia .

A continuación, creamos un contenedor a partir de la imagen y lo ejecutamos.

    docker run -d --name marvelandia -p 8080:80 marvelandia

Y ahora solamente abrir el navegador y dirigirnos al http://localhost:8080.
