import { useState } from 'react'
import './App.css'

function App() {
  

  return (
    <>
      <nav>
        <h1>PC Discount Store</h1>
        <p>Cart</p>
        </nav>

      <main>
        <h2>Products</h2>
        <div className="product-list">
          <div>
            <h3>Product 1</h3>
            <img src="https://encrypted-tbn0.gstatic.com/images?q=tbn:ANd9GcRJ9ec74j6Alt2x8EcTeG-kLa127Mh8RyJfww&s" alt="Product 1" width="100"/>
            <p>Details for product one</p>
            <p>$1200</p>
            <button>Add to Cart</button>
          </div>
          <div>
            <h3>Product 2</h3>
            <img src="https://i.dell.com/is/image/DellContent/content/dam/ss2/product-images/page/franchise/precision/precision-fixed-imagery/compact-design/precision-fixed-franchise-mod3-expanded-1920x1440.png?fmt=png-alpha&wid=1920&hei=1440" alt="Product 2" width="100"/>
            <p>Details for product 2</p>
            <p>$150</p>
            <button>Add to Cart</button>
          </div>
          <div>
            <h3>Product 3</h3>
            <img src="https://cdn.mos.cms.futurecdn.net/d3F849bwjrLJJ7XNwa6VJ7.png" alt="Product 3" width="100"/>
            <p>Details for product three</p>
            <p>$50</p>
            <button>Add to Cart</button>
          </div>

            <div>
            <h3>Product 4</h3>
            <img src="https://breunor.com/cdn/shop/files/rossa_7b01eaf6-eb4f-45b2-9437-c00d4b4dc97d.jpg?v=1757060005&width=1024" alt="Product 4" width="100"/>
            <p>Details for product four</p>
            <p>$1200</p>
            <button>Add to Cart</button>
          </div>
          <div>
            <h3>Product 5</h3>
            <img src="https://velocitymicro.com/img/category-thumbnails/SX3-category-thumbnail.png" alt="Product 5" width="100"/>
            <p>Details for product five</p>
            <p>$150</p>
            <button>Add to Cart</button>
          </div>
          <div>
            <h3>Product 6</h3>
            <img src="https://m.media-amazon.com/images/I/616+jU7dPJL._AC_UF894,1000_QL80_.jpg" alt="Product 6" width="100"/>
            <p>Details for product six</p>
            <p>$50</p>
            <button>Add to Cart</button>
          </div>
        </div>
      </main>

    </>
  )
}

export default App
