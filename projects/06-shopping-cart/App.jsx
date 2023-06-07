import { Products } from './src/components/products'
import products from './src/copies/products.json'
export const listProducts = products.map(product => ({
  description: product.description,
  id: product.id,
  image: product.image,
  price: product.price,
  rating: product.rating,
  title: product.title
})
)
export function App () {
  return (

    <Products listProducts={listProducts} />
  )
}
