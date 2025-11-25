import { useState } from 'react'
import './App.css'

function ProductCard({ product }) {
  return (
    <div className="product-card">
          <img src={product.image}></img>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Specs:</p>
          <ul>
            <li>CPU: {product.specs.cpu}</li>
            <li>RAM: {product.specs.ram}</li>
            <li>Storage: {product.specs.storage}</li>
          </ul>
    </div>
  )
}

function App() {
  
  
}

export default App
