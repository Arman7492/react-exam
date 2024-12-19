import { useState } from 'react';
import { useDispatch } from 'react-redux';
import { addProduct } from '../redux/productsSlice';
import '../styles/Products.css';

const ProductForm = () => {
  const [newProductName, setNewProductName] = useState('');
  const dispatch = useDispatch();

  const handleAddProduct = () => {
    if (newProductName.trim()) {
      const newProduct = {
        id: Date.now(),
        name: newProductName,
        image: '/assets/default.png',
      };
      dispatch(addProduct(newProduct));
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
