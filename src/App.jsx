import { useState } from 'react'
import { useEffect } from 'react'
import './index.css'


function App() {
    const [products, setProducts] = useState([]);
    const [cart, setCart] = useState(loadCart());
    const [showCart, setShowCart] = useState(false);

    function loadCart(){
      var savedCart = localStorage.getItem("cart");
      if(savedCart){
        try {
          return JSON.parse(savedCart);
        } catch(e) {
          return [];
        }
      }
      return [];
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
  setCart(prevCart => {
    const updatedCart = [...prevCart, product];
    localStorage.setItem("cart", JSON.stringify(updatedCart));
    return updatedCart;
  });
};

const displayCart = () => {
  console.log(cart);
    return(
    <>
      {cart && cart.length > 0 ? (
        cart.map((item, index) => (
          <div key={index} style={{backgroundColor: "#444", margin: "10px", padding: "10px", borderRadius: "5px", border: "1px solid #555"}}>
            <h2 style={{color: "white"}}>{item.name}</h2>
            <img src={item.image} width="100px" alt={item.name} />
            <p style={{color: "white"}}>Price: ${item.price}</p>
            <p style={{color: "white"}}>Quantity: {item.quantity ?? 1}</p>
          </div>
        ))
      ) : (
        <p>Your cart is empty.</p>
      )}
    </>)
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
      <p onClick={() => setShowCart(!showCart)} style={{display: "inline", float: "right", fontSize: "24px", cursor: "pointer"}}>🛒</p>
      
      {showCart && (
        <div style={{
          position: "fixed",
          right: 0,
          top: 0,
          width: "300px",
          height: "100vh",
          backgroundColor: "#333",
          color: "white",
          padding: "20px",
          overflowY: "auto",
          boxShadow: "-2px 0 5px rgba(0,0,0,0.5)"
        }}>
          <h2>Shopping Cart</h2>
          <button onClick={() => setShowCart(false)} style={{marginBottom: "10px"}}>Close</button>
          {displayCart()}
        </div>
      )}
      
      <div style={{ display: "flex", flexWrap: "wrap" }}>
          {products.map(product => (
            <ProductCard key={product.id} product={product} />
          ))}
        </div>
        </>
  )
}
export default App;