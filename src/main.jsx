import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import { products } from './products.js';
import { recentProducts } from './recent-products.js'
import Catalog from './modules/Catalog.jsx'

createRoot(document.getElementById('root')).render(
  <StrictMode>
    <Catalog products={products} recentProducts={recentProducts}/>
  </StrictMode>,
)
