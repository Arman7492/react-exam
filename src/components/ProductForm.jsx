import React, { useState } from 'react';
import '../styles/Products.css';

const ProductForm = ({ onAdd }) => {
  const [newProductName, setNewProductName] = useState('');

  const handleAddProduct = () => {
    if (newProductName.trim()) {
      const newProduct = {
        id: Date.now(),
        name: newProductName,
        image: '/assets/default.png',
      };
      onAdd(newProduct);
      setNewProductName('');
    }
  };

  return (
    <div className="product-form">
      <input
        type="text"
        value={newProductName}
        onChange={(e) => setNewProductName(e.target.value)}
        placeholder="Enter product name"
      />
      <button onClick={handleAddProduct} className="add-btn">Add</button>
    </div>
  );
};

export default ProductForm;
