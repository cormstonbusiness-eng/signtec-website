'use client'

import { useEffect, useState } from 'react'
import { useRouter } from 'next/navigation'
import Link from 'next/link'
import { products as initialProducts } from '@/lib/products'
import { Product } from '@/lib/types/product'

export default function AdminProductsPage() {
  const router = useRouter()
  const [products, setProducts] = useState<Product[]>(initialProducts)
  const [isAuthenticated, setIsAuthenticated] = useState(false)
  const [editingId, setEditingId] = useState<string | null>(null)
  const [showAddForm, setShowAddForm] = useState(false)
  const [formData, setFormData] = useState<Partial<Product>>({})

  // Check authentication on mount
  useEffect(() => {
    const isAuth = localStorage.getItem('admin_authenticated')
    const timestamp = localStorage.getItem('admin_timestamp')

    if (!isAuth) {
      router.push('/admin/login')
      return
    }

    // Session expires after 4 hours
    if (timestamp) {
      const elapsed = Date.now() - parseInt(timestamp)
      if (elapsed > 4 * 60 * 60 * 1000) {
        localStorage.removeItem('admin_authenticated')
        localStorage.removeItem('admin_timestamp')
        router.push('/admin/login')
        return
      }
    }

    setIsAuthenticated(true)
  }, [router])

  const handleLogout = () => {
    localStorage.removeItem('admin_authenticated')
    localStorage.removeItem('admin_timestamp')
    router.push('/admin/login')
  }

  const handleEdit = (product: Product) => {
    setEditingId(product.id)
    setFormData(product)
    setShowAddForm(false)
  }

  const handleAddNew = () => {
    setShowAddForm(true)
    setEditingId(null)
    setFormData({
      category: 'other',
      stock: 50,
    })
  }

  const handleSave = () => {
    if (!formData.name || !formData.price || !formData.category) {
      alert('Please fill in all required fields')
      return
    }

    if (editingId) {
      // Update existing product
      setProducts(
        products.map((p) =>
          p.id === editingId
            ? { ...p, ...formData }
            : p
        ) as Product[]
      )
    } else {
      // Add new product
      const newProduct: Product = {
        id: `product-${Date.now()}`,
        name: formData.name!,
        description: formData.description || '',
        price: formData.price!,
        category: formData.category as any,
        image: formData.image || '/products/placeholder.jpg',
        stock: formData.stock || 50,
        sku: formData.sku,
      }
      setProducts([...products, newProduct])
    }

    setEditingId(null)
    setShowAddForm(false)
    setFormData({})
    alert('Product saved! Note: Changes are in memory. You need to update src/lib/products.ts to persist changes.')
  }

  const handleDelete = (id: string) => {
    if (confirm('Are you sure you want to delete this product?')) {
      setProducts(products.filter((p) => p.id !== id))
    }
  }

  if (!isAuthenticated) {
    return <div style={{ padding: '40px', textAlign: 'center' }}>Loading...</div>
  }

  return (
    <div style={{ minHeight: '100vh', background: 'var(--paper)', padding: '40px 20px' }}>
      <div style={{ maxWidth: '1200px', margin: '0 auto' }}>
        {/* Header */}
        <div style={{ display: 'flex', justifyContent: 'space-between', alignItems: 'center', marginBottom: '32px' }}>
          <div>
            <h1 style={{ fontSize: '2rem', marginBottom: '4px' }}>Product Management</h1>
            <p style={{ color: 'var(--steel)' }}>Manage your store products</p>
          </div>
          <button
            onClick={handleLogout}
            style={{
              background: 'var(--red)',
              color: 'white',
              border: 'none',
              padding: '8px 16px',
              borderRadius: '6px',
              cursor: 'pointer',
              fontWeight: 500,
            }}
          >
            Logout
          </button>
        </div>

        {/* Add New Product Button */}
        <button
          onClick={handleAddNew}
          disabled={editingId !== null || showAddForm}
          style={{
            background: 'var(--red)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 600,
            marginBottom: '24px',
            opacity: editingId !== null || showAddForm ? 0.6 : 1,
          }}
        >
          + Add New Product
        </button>

        {/* Add/Edit Form */}
        {(showAddForm || editingId) && (
          <ProductForm
            product={formData as Product}
            onchange={setFormData}
            onSave={handleSave}
            onCancel={() => {
              setEditingId(null)
              setShowAddForm(false)
              setFormData({})
            }}
            isEditing={!!editingId}
          />
        )}

        {/* Products List */}
        <div style={{ display: 'grid', gap: '16px' }}>
          <h2 style={{ fontSize: '1.3rem', marginBottom: '8px' }}>
            Products ({products.length})
          </h2>
          {products.map((product) => (
            <div
              key={product.id}
              style={{
                background: 'white',
                border: '1px solid var(--line)',
                borderRadius: '8px',
                padding: '16px',
                display: 'grid',
                gridTemplateColumns: '1fr auto',
                gap: '16px',
                alignItems: 'center',
              }}
            >
              <div>
                <h3 style={{ fontSize: '1.1rem', marginBottom: '4px' }}>{product.name}</h3>
                <p style={{ fontSize: '0.9rem', color: 'var(--steel)', marginBottom: '8px' }}>
                  {product.description}
                </p>
                <div style={{ display: 'flex', gap: '16px', fontSize: '0.85rem' }}>
                  <span>
                    <strong>Price:</strong> £{product.price.toFixed(2)}
                  </span>
                  <span>
                    <strong>Stock:</strong> {product.stock}
                  </span>
                  <span>
                    <strong>Category:</strong> {product.category}
                  </span>
                  <span>
                    <strong>SKU:</strong> {product.sku || 'N/A'}
                  </span>
                </div>
              </div>
              <div style={{ display: 'flex', gap: '8px' }}>
                <button
                  onClick={() => handleEdit(product)}
                  style={{
                    background: 'var(--steel)',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                  }}
                >
                  Edit
                </button>
                <button
                  onClick={() => handleDelete(product.id)}
                  style={{
                    background: '#f00',
                    color: 'white',
                    border: 'none',
                    padding: '6px 12px',
                    borderRadius: '4px',
                    cursor: 'pointer',
                    fontSize: '0.85rem',
                  }}
                >
                  Delete
                </button>
              </div>
            </div>
          ))}
        </div>

        {/* Back Link */}
        <div style={{ marginTop: '40px' }}>
          <Link href="/shop" style={{ color: 'var(--red)', textDecoration: 'none', fontWeight: 500 }}>
            ← Back to Shop
          </Link>
        </div>
      </div>
    </div>
  )
}

function ProductForm({
  product,
  onchange,
  onSave,
  onCancel,
  isEditing,
}: {
  product: Partial<Product>
  onchange: (data: Partial<Product>) => void
  onSave: () => void
  onCancel: () => void
  isEditing: boolean
}) {
  return (
    <div
      style={{
        background: 'white',
        border: '1px solid var(--line)',
        borderRadius: '8px',
        padding: '24px',
        marginBottom: '24px',
      }}
    >
      <h2 style={{ marginBottom: '20px' }}>{isEditing ? 'Edit Product' : 'Add New Product'}</h2>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
            Product Name *
          </label>
          <input
            type="text"
            value={product.name || ''}
            onChange={(e) => onchange({ ...product, name: e.target.value })}
            style={{
              width: '100%',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              padding: '8px 12px',
              fontSize: '0.9rem',
            }}
            placeholder="e.g., Custom Logo Stickers"
          />
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
            Price (£) *
          </label>
          <input
            type="number"
            step="0.01"
            value={product.price || ''}
            onChange={(e) => onchange({ ...product, price: parseFloat(e.target.value) })}
            style={{
              width: '100%',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              padding: '8px 12px',
              fontSize: '0.9rem',
            }}
            placeholder="15.99"
          />
        </div>
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '16px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
            Category *
          </label>
          <select
            value={product.category || 'other'}
            onChange={(e) => onchange({ ...product, category: e.target.value as any })}
            style={{
              width: '100%',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              padding: '8px 12px',
              fontSize: '0.9rem',
            }}
          >
            <option value="stickers">Stickers</option>
            <option value="merchandise">Merchandise</option>
            <option value="prints">Prints</option>
            <option value="other">Other</option>
          </select>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
            Stock
          </label>
          <input
            type="number"
            value={product.stock || ''}
            onChange={(e) => onchange({ ...product, stock: parseInt(e.target.value) })}
            style={{
              width: '100%',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              padding: '8px 12px',
              fontSize: '0.9rem',
            }}
            placeholder="50"
          />
        </div>
      </div>

      <div style={{ marginBottom: '16px' }}>
        <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
          Description
        </label>
        <textarea
          value={product.description || ''}
          onChange={(e) => onchange({ ...product, description: e.target.value })}
          style={{
            width: '100%',
            border: '1px solid var(--line)',
            borderRadius: '6px',
            padding: '8px 12px',
            fontSize: '0.9rem',
            minHeight: '80px',
            fontFamily: "'Sora', sans-serif",
          }}
          placeholder="Product description..."
        />
      </div>

      <div style={{ display: 'grid', gridTemplateColumns: '1fr 1fr', gap: '16px', marginBottom: '20px' }}>
        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
            Image Path
          </label>
          <input
            type="text"
            value={product.image || ''}
            onChange={(e) => onchange({ ...product, image: e.target.value })}
            style={{
              width: '100%',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              padding: '8px 12px',
              fontSize: '0.9rem',
            }}
            placeholder="/products/image.jpg"
          />
          <p style={{ fontSize: '0.75rem', color: 'var(--steel)', marginTop: '4px' }}>
            Upload image to /public/products/ folder and enter the path
          </p>
        </div>

        <div>
          <label style={{ display: 'block', marginBottom: '6px', fontWeight: 500 }}>
            SKU
          </label>
          <input
            type="text"
            value={product.sku || ''}
            onChange={(e) => onchange({ ...product, sku: e.target.value })}
            style={{
              width: '100%',
              border: '1px solid var(--line)',
              borderRadius: '6px',
              padding: '8px 12px',
              fontSize: '0.9rem',
            }}
            placeholder="STK-001"
          />
        </div>
      </div>

      <div style={{ display: 'flex', gap: '12px' }}>
        <button
          onClick={onSave}
          style={{
            background: 'var(--red)',
            color: 'white',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          {isEditing ? 'Update Product' : 'Add Product'}
        </button>
        <button
          onClick={onCancel}
          style={{
            background: 'var(--line)',
            color: 'var(--ink)',
            border: 'none',
            padding: '10px 20px',
            borderRadius: '6px',
            cursor: 'pointer',
            fontWeight: 600,
          }}
        >
          Cancel
        </button>
      </div>
    </div>
  )
}
