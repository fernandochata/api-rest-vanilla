import { findAll, findById, create, update, remove } from '../models/productModel.js'
import { getPostData } from '../utils.js'

export async function getProducts(req, res) {
    try {
        const products = await findAll()

        res.writeHead(200, { 'Content-Type': 'application/json' })
        res.end(JSON.stringify(products))
    } catch (error) {
        console.log(error)
    }
}

export async function getProduct(req, res, id) {
    try {
        console.log(id);
        const product = await findById(id)
        if(!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify(product))
        }
    } catch (error) {
        console.log(error)
    }
}

export async function createProduct(req, res) {
    try {
        const body = await getPostData(req)
        const { name, description, stock, price, category } = JSON.parse(body)
        const product = {
            name, description, stock, price, category
        }
        const newProduct = await create(product)
        res.writeHead(201, { 'Content-Type': 'application/json' })
        return res.end(JSON.stringify(newProduct))  
    } catch (error) {
        console.log(error)
    }
}

export async function updateProduct(req, res, id) {
    try {
        const product = await findById(id)
        if(!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            const body = await getPostData(req)
            const { name, description, stock, price, category } = JSON.parse(body)
            const productData = {
                name: name || product.name,
                description: description || product.description,
                stock: stock || product.stock,
                price: price || product.price,
                category: category || product.category
            }
            const updProduct = await update(id, productData)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            return res.end(JSON.stringify(updProduct)) 
        }
    } catch (error) {
        console.log(error)
    }
}

export async function deleteProduct(req, res, id) {
    try {
        const product = await findById(id)
        if(!product) {
            res.writeHead(404, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: 'Product Not Found' }))
        } else {
            await remove(id)
            res.writeHead(200, { 'Content-Type': 'application/json' })
            res.end(JSON.stringify({ message: `Product ${id} removed` }))
        }
    } catch (error) {
        console.log(error)
    }
}