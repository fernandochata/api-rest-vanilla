# api-rest-vanilla

Ejemplo de API REST sin uso de frameworks

- instalar dependencias (sólo uuid para los id)
- Se requiere la variable de entorno [PORT], en caso de no encontrarlas se usa por defecto 5000
- ejecutar script en modo desarrollo
```
npm install
npm run dev
```

- rutas del CRUD
```
{
    getProducts: {
        url: 'api/products/',
        method: 'GET'
    },
    getProduct: {
        url: 'api/products/:id',
        method: 'GET'
    },
    createProduct: {
        url: 'api/products/',
        method: 'POST'
    },
    updateProduct: {
        url: 'api/products/:id',
        method: 'PUT'
    },
    deleteProduct: {
        url: 'api/products/:id',
        method: 'DELETE'
    }
}
```