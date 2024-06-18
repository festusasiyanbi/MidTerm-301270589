import React, { useState } from 'react'

const AddProduct = () => {
    const [formData, setFormData] = useState({
        name: '',
        description: '',
        category: '',
        quantity: '',
        price: '',
    })

    const handleInput = (event) => {
        const {name, value} = event.target;
        setFormData((previousState) => ({
            ...previousState, [name]: value
        }))
    }
    const handleSubmit = () => {
        console.log(formData)
        alert(
            `You have entered the following details: \n
            Name: ${formData.name}\n
            Description: ${formData.description}\n
            Category: ${formData.category}\n
            Quantity: ${formData.quantity}\n
            Price: ${formData.price}`
        );
    }
    const handleCancel = () => {
        setFormData({
            name: '',
            description: '',
            category: '',
            quantity: '',
            price: '',
        })
    }
    return (
        <form id='productForm' onSubmit={(e) => e.preventDefault()}>
            <h1>React Product Form</h1>
            <label htmlFor="name">
                <input
                  type="text"
                  name="name"
                  placeholder='Name'
                  onChange={handleInput}
                  value={formData.name} 
                />
            </label>
            <label htmlFor="description">
                <input
                  type="text"
                  name="description"
                  placeholder='Description'
                  onChange={handleInput}
                  value={formData.description}
                />
            </label>
            <label htmlFor="category">
                <input
                  type="text"
                  name="category"
                  placeholder='Category'
                  onChange={handleInput}
                  value={formData.category}
                />
            </label>
            <label htmlFor="quantity">
                <input
                  type="text"
                  name="quantity"
                  placeholder='Quantity'
                  onChange={handleInput}
                  value={formData.quantity}
                />
            </label>
            <label htmlFor="price">
                <input
                  type="text"
                  name="price"
                  placeholder='Price'
                  onChange={handleInput}
                  value={formData.price}
                />
            </label>
            <div className='operations-div'>
                <button id='submit-btn' onClick={handleSubmit}>SUBMIT</button>
                <button id='cancel-btn'onClick={handleCancel}>RESET</button>
            </div>
        </form>
    )
}

export default AddProduct