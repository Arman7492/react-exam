import React, { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { addProduct, deleteProduct, updateProduct } from "../redux/productsSlice";
import '../styles/Products.css';

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const [newProduct, setNewProduct] = useState('');

  const handleAddProduct = () => {
    if (newProduct.trim()) {
      dispatch(addProduct({ id: Date.now(), name: newProduct, image: '/assets/default.png' }));
      setNewProduct('');
    }
  };

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleUpdateProduct = (id) => {
    const newName = prompt('Enter new name:', products.find(p => p.id === id)?.name);
    if (newName) {
      dispatch(updateProduct({ id, name: newName }));
    }
  };

  return (
    <div className="products">
      <h1>Products</h1>
      <div className="navigation-buttons">
        <Link to="/">
          <button className="nav-btn">Go to Home</button>
        </Link>
        <Link to="/contact">
          <button className="nav-btn">Go to Contact</button>
        </Link>
      </div>
      <div className="product-form">
        <input
          type="text"
          value={newProduct}
          onChange={(e) => setNewProduct(e.target.value)}
          placeholder="Add a new product"
        />
        <button onClick={handleAddProduct} className="add-btn">Add</button>
      </div>
      <ul className="product-list">
        {products.map(product => (
          <li key={product.id} className="product-item">
            <Link to={`/products/${product.id}`} className="product-link">{product.name}</Link>
            <div className="product-actions">
              <button onClick={() => handleDeleteProduct(product.id)} className="delete-btn">Delete</button>
              <button onClick={() => handleUpdateProduct(product.id)} className="edit-btn">Edit</button>
            </div>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Products;
