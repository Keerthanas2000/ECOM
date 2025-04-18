import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Productitem from './Productitem'

function ProductSection() {
  const [products, setProducts] = useState([])
  const location = useLocation()

  useEffect(() => {
    const category = location.pathname.split('/')[1]

    const url = category==="jewelery"
      ? `https://fakestoreapi.com/products/category/jewelery`
      : 'https://fakestoreapi.com/products'

    fetch(url)
      .then(res => res.json())
      .then(data => setProducts(data))
      .catch(err => console.error('Failed to fetch products:', err))
  }, [location])

  return (
    <div className="container bg-white">
      <div className="row">
        {products.map(prod =>
          <Productitem key={prod.id} prod={prod} />
        )}
      </div>
    </div>
  )
}

export default ProductSection
