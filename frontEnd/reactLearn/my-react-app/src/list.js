import React from 'react'

const products = [
    {title: 'A', id:1, isRed:true},
    {title: 'B', id:2, isRed:true},
    {title: 'C', id:3, isRed:false}
];

const listItems = products.map(product =>
    <li key={product.id}
        style={{
            color: product.isRed ? 'red' : 'lightblue'
        }}>
        {product.title}
    </li>

);

export default function TextList() {
    return (
        <ul>{listItems}</ul>
    );
}