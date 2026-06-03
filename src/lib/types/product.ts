export interface Product {
  id: string
  name: string
  description: string
  price: number
  category: 'stickers' | 'merchandise' | 'prints' | 'other'
  image: string
  stock: number
  sku?: string
}

export interface CartItem extends Product {
  quantity: number
}
