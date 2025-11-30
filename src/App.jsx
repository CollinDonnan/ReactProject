import { useState } from 'react'
import { useEffect } from 'react'
import './index.css'


function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(loadCart());

    function loadCart(){
      var savedCart = localStorage.getItem("cart");
      return savedCart;
    }

function ProductCard({ product }) {
  return (
    <div className="product-card">
          <img src={product.image} width="100px" alt={product.name} />
          <h2>{product.name}</h2>
          <p>Price: ${product.price}</p>
          <p>Stock: {product.stock}</p>
          <p>Specs:</p>
          <ul>
            <li>CPU: {product.specs.cpu}</li>
            <li>RAM: {product.specs.ram}</li>
            <li>Storage: {product.specs.storage}</li>
          </ul>
          <input type="button" value="Add to Cart" onClick={() => addToCart(product)} />
    </div>
  )
}

const addToCart = (product) => {
  var CurrentCart = localStorage.getItem("cart");
  if(CurrentCart == null){
    CurrentCart = [];
  }
  localStorage.setItem("cart", CurrentCart);
    setCart(prevCart => [...prevCart, product]);
  };

const displayCart = () => {
    var cartString = "";
    cart.forEach((product) => {
      cartString += product.name + "\n";
    });
    alert("Cart Items:\n" + cartString);
  }

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
      <p onClick={displayCart} style={{display: "inline", float: "right", fontSize: "24px", cursor: "pointer"}}>🛒</p>
      <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </>
  )
}
export default App;
