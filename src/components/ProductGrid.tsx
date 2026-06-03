import { Product } from '@/lib/types/product'
import ProductCard from './ProductCard'

interface ProductGridProps {
  products: Product[]
  onAddToCart: (product: Product) => void
}

export default function ProductGrid({ products, onAddToCart }: ProductGridProps) {
  return (
    <div className="product-grid">
      {products.map((product) => (
        <ProductCard
          key={product.id}
          product={product}
          onAddToCart={onAddToCart}
        />
      ))}
    </div>
  )
}
