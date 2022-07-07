import Products from '../../products.json' assert { type: 'json' }
import { writeDataToFile } from '../utils.js'
import { v4 as uuidv4 } from 'uuid'

let products = Products

export function findAll() {
    return new Promise((resolve, reject) => {
        resolve(products)
    })
}

export function findById(id) {
    return new Promise((resolve, reject) => {
        const product = products.find((p) => p.id === id)
        resolve(product)
    })
}

export function create(product) {
    return new Promise((resolve, reject) => {
        const newProduct = {id: uuidv4(), ...product}
        products.push(newProduct)
        writeDataToFile('../products.json', products);
        resolve(newProduct)
    })
}

export function update(id, product) {
    return new Promise((resolve, reject) => {
        const index = products.findIndex((p) => p.id === id)
        products[index] = {id, ...product}
        writeDataToFile('../products.json', products);
        resolve(products[index])
    })
}

export function remove(id) {
    return new Promise((resolve, reject) => {
        products = products.filter((p) => p.id !== id)
        writeDataToFile('../products.json', products);
        resolve()
    })
}