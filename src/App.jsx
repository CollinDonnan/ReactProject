import { useState } from 'react'
import { useEffect } from 'react'
import './index.css'


function ProductCard({ product }) {
  return (
    <div className="product-card">
          <img src={product.image} width="100px"></img>
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Specs:</p>
          <ul>
            <li>CPU: {product.specs.cpu}</li>
            <li>RAM: {product.specs.ram}</li>
            <li>Storage: {product.specs.storage}</li>
            <input type="button" value="Add to Cart"></input>
          </ul>
    </div>
  )
}


function App() {
  const [products, setProducts] = useState([]);


  useEffect(() => {
    fetch("/products.json")
      .then(res => res.json())
      .then(data => {
        setProducts(data.products)
      })
      return (()=>console.log("Cleanup function called"));
  }, []);
  
  return(
    <>
      <h1 style={{ color: "white", display: "inline" }}>PC Store</h1>
      <p style={{display: "inline", float: "right", fontSize: "24px"}}>🛒</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </>
  )
}
export default App;
