import Image from 'next/image'
import Link from 'next/link'
import { Product } from '@/lib/types/product'

interface ProductCardProps {
  product: Product
  onAddToCart: (product: Product) => void
}

export default function ProductCard({ product, onAddToCart }: ProductCardProps) {
  return (
    <div className="product-card">
      <Link href={`/shop/${product.id}`} className="product-image">
        <Image
          src={product.image}
          alt={product.name}
          fill
          style={{ objectFit: 'cover' }}
        />
      </Link>

      <div className="product-content">
        <span className="product-category">{product.category}</span>
        <Link href={`/shop/${product.id}`}>
          <h3>{product.name}</h3>
        </Link>
        <p className="product-description">{product.description}</p>

        <div className="product-footer">
          <div className="product-price">£{product.price.toFixed(2)}</div>
          <button
            className="btn btn-red"
            onClick={() => onAddToCart(product)}
            disabled={product.stock === 0}
          >
            {product.stock > 0 ? 'Add to Cart' : 'Out of Stock'}
          </button>
        </div>
      </div>
    </div>
  )
}
