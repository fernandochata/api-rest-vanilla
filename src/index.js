import { server } from './routes/productRoute.js'

const HOST =  process.env.HOST || 'localhost'
const PORT =  process.env.PORT || 5000

server.listen(PORT, () => console.log(`\n\nServer running in ${process.env.NODE_ENV} mode\non http://${HOST}:${PORT}/api/products/`))