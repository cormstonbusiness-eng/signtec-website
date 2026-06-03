'use client'

interface CategoryFilterProps {
  categories: string[]
  activeCategory: string
  onCategoryChange: (category: string) => void
}

export default function CategoryFilter({
  categories,
  activeCategory,
  onCategoryChange,
}: CategoryFilterProps) {
  return (
    <div className="category-filter">
      <button
        className={`filter-btn ${activeCategory === 'all' ? 'active' : ''}`}
        onClick={() => onCategoryChange('all')}
      >
        All Products
      </button>
      {categories.map((category) => (
        <button
          key={category}
          className={`filter-btn ${activeCategory === category ? 'active' : ''}`}
          onClick={() => onCategoryChange(category)}
        >
          {category.charAt(0).toUpperCase() + category.slice(1)}
        </button>
      ))}
    </div>
  )
}
