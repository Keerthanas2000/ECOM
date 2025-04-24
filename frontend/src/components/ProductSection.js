import React, { useEffect, useState } from 'react'
import { useLocation } from 'react-router-dom'
import Productitem from './Productitem'
import axios from 'axios'

function ProductSection() {
  const [products, setProducts] = useState([])
  const location = useLocation()

  useEffect(() => {
    axios.get("http://localhost:3000/api/products?type=homeprod")
      .then(response => {
        setProducts(response.data)
      })
      .catch(error => console.error('Error fetching data: ', error))
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
