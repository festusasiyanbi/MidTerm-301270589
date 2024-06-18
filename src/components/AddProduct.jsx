import React from 'react'

const AddProduct = () => {
    return (
        <form>
            <label htmlFor="name"><input type="text" name="name" /></label>
            <label htmlFor="description"><input type="text" name="description" /></label>
            <label htmlFor="category"><input type="text" name="category" /></label>
            <label htmlFor="quantity"><input type="text" name="quantity" /></label>
            <label htmlFor="price"><input type="text" name="price" /></label>
        </form>

    )
}

export default AddProduct