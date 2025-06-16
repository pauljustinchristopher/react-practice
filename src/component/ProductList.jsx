import React from 'react'

const ProductList = () => {

    const products = [
        { id: 1, phone: "Iphone", price: "$123"},
        { id: 2, laptop: "HP", price: "$5457"},
    ];

  return (
    <div>
      { products.map((product) => {
        <div key={product.id}>
            <p>{product.name}</p>
            <p>{product.price}</p>
        </div>
      })}
    </div>
  )
}

export default ProductList

const products = [
    {id: 1, phone: "Iphone", price: "$123"},
    {id: 2, laptop: "HP", price: "$5457"},
]

{products.map((product) => {
    <div key={id}>
        <p>{product.name}</p>
        <p>{product.price}</p>
    </div>
})}