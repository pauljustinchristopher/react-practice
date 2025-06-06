import React from 'react'

const ProductList = () => {
    const products = [
        {id: 1, name: "Phone", price: "3455"},
        {id: 2, name: "Laptop", price: "35546"},
        {id: 3, name: "Headphones", price: "$199"}
    ];
  return (
    <div>
      {products.map(product => {
        <ul key={Math.random()}>
            <li>Name: {product.name}</li>
            <li>Price: {product.price}</li>
        </ul>
      })}
    </div>
  )
}

export default ProductList
