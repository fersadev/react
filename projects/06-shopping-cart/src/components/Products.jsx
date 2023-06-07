import { AddToCartIcon } from './Icons'
import './Products.css'

export function Products ({ listProducts }) {
  return (
    <main className='products'>
      <ul>
        {listProducts.map(product => (
          <li key={product.id}>
            <img
              src={product.image}
              alt={product.title}
            />
            <div>
              <strong>{product.title}</strong> - ${product.price}
            </div>
            <div>
              <button><AddToCartIcon /></button>
            </div>
          </li>
        ))}
      </ul>
    </main>
  )
}
