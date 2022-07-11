# API REST [Vanilla JS]

Ejemplo de API REST sin uso de frameworks

- instalar dependencias (***uuid*** unicamente para la creación de id's aleatorios y **cross-env** para el envio de variables de entorno desde script iniciales)
- Se requiren las variables de entorno  **[HOST]** y **[PORT]**, en caso de no encontrarlas se usa por defecto **localhost** y **5000**
- ejecutar script (en modo desarrollo o producción)

| Commandos         | Acción                                                           |
|:----------------  |:---------------------------------------------------------------- |
| `npm install`     | Instala las dependencias necesarias del proyecto                 |
| `npm start`       | Servidor local en producción en `localhost:5000`  |
| `npm run dev`     | Servidor local como desarrollador en `localhost:5000` (a la espera de cambios) |

## TODO:
- ✅ Archivo Json con información aleatoria, de *https://www.mockaroo.com/*.
- ⭕ Capturar errores al crear producto (se necesita enviar todos los datos excepto el id), lo ideal es sólo enviar los datos que se desea actualizar.
- ⭕ Crear pagina de inicio y 404.
- ⭕ Deploy en Heroku.

## ESTRUCTURA
```
/
├── src/
│   ├── index.js
│   ├── utils.js
│   ├── controllers/
│   │   └── productController.js
│   ├── routes/
│   │   └── productRoute.js
│   ├── models/
│   │   └── productModel.js
├── products.json
└── package.json
```
## RUTAS
```
    getProducts: {
        url: 'api/products/',       method: 'GET'
    },
    getProduct: {
        url: 'api/products/:id',    method: 'GET'
    },
    createProduct: {
        url: 'api/products/',       method: 'POST'
    },
    updateProduct: {
        url: 'api/products/:id',    method: 'PUT'
    },
    deleteProduct: {
        url: 'api/products/:id',    method: 'DELETE'
    }
```

## LINKS
- http.createServer: *https://nodejs.org/dist/latest-v16.x/docs/api/http.html#httpcreateserveroptions-requestlistener*
- fs: *https://nodejs.org/api/fs.html#fswritefilesyncfile-data-options*
- request body data on Node.js: *https://nodejs.dev/learn/get-http-request-body-data-using-nodejs*
- promises: *https://www.freecodecamp.org/news/javascript-promise-tutorial-how-to-resolve-or-reject-promises-in-js/*
