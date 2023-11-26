'use client'
import React from 'react'

const AddToCart = () => {
    return (
        <div>
            This is rendered client side
            <button 
                onClick={() => {
                    console.log('aloha')
                }}
            >Add to Cart</button>
        </div>
    )
}

export default AddToCart
