# BACKEND PRUEBA MELI

Para el desarrollo de esta prueba se optó por utilizar Node.js y Express.js para la creación de una api, se manejan repositorios separados, para tener un mejor manejo de los archivos y una mejor comprensión del mismo

# Uso de la aplicación

Después de clonar el repositorio debe seguir los siguientes pasos.

## Creación de un archivo .env
Deberá agregar un archivo .env en la raíz del proyecto con las siguiente propiedades
PORT=3000 o el numero de puerto que usted prefiera
ENV=development
FRONTENDPOINT=http://localhost:3001

posteriorment necesita ejecutar el siguiente comando para instalar las dependencias usadas en la raíz del mismo

```bash
npm i o yarn 
```

Después de haber ejecutado el primer comando puede optar por correr el servidor con

```bash
npm start
```

lo cual ejecutará el server en un ambiente normal

o puede ejecutar 

```bash
npm run dev
```
para así ejecutar nodemon y que cuando usted realice cambios en los documentos el server se actualice de manera automatica

A su vez el servidor está configurado para hacer render de la parte elaborada con react para el consumo de la misma