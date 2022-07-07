import { server } from './routes/productRouter.js'

const PORT =  process.env.PORT || 5000

server.listen(PORT, () => console.log(`Server running on http://localhost:${PORT}/api/products/`))