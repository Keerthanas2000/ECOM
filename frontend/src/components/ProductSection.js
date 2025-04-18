import React, { useEffect, useState } from 'react'
import Productitem from './Productitem'

function ProductSection() {
  const [products, setproducts] = useState([])

  useEffect(() => {
    fetch('https://fakestoreapi.com/products')
      .then(res => res.json())
      .then(data => setproducts(data))
  }, [])

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
