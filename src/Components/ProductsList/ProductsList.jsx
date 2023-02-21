import React from 'react'

import {products} from '../../data/products'
import {ProductItem} from '../ProductItem/ProductItem'

export const ProductsList = ({setCartCount, cartCount, setSelectedProducts, selectedProducts}) => {
  
  return (
    <div>
    {products.map((product, i)=>{
        return <ProductItem key={`${product.name}-${i}`} product={product} setCartCount={setCartCount} cartCount={cartCount} setSelectedProducts={setSelectedProducts} selectedProducts={selectedProducts}/>
    })}
    
    </div>
  )
}
