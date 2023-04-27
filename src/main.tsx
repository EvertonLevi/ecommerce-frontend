import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.tsx'

import ProductProvider from './contexts/ProductContext.jsx';
import SidebarProvider from './contexts/SidebarContext.jsx';
import CartProvider from './contexts/CartContext.jsx';

import './index.css'

ReactDOM.createRoot(document.getElementById('root') as HTMLElement).render(
  <SidebarProvider>
    <CartProvider>
      <ProductProvider>
        <React.StrictMode>
          <App />
        </React.StrictMode>
      </ProductProvider>
    </CartProvider>
  </SidebarProvider>
)
