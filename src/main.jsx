import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import './index.css'
import App from './App.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <App />
  </StrictMode>,
)


/*
HTML must have <div id="root"></div>
const root = ReactDOM.createRoot(document.getElementById("root"))
root.render(<route />)

const element = <h1> ex </h1>

root.render(element)

name = ex

printting { ex }

useState gives a component memory

useEffect 

life cycle - contains 3 states, mounting, updating and umounting

mounting - when first component appears

updating - when state changes

unmounting - remove


function Footer() {
  return (
    <footer>
      <p>© 2024 My Website. All rights reserved.</p>
    </footer>
  )
  }

}

[] <- empty dependency array means it runs once on mount

[x] <- runs when x changes



*/
