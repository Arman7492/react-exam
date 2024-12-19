import { Link } from 'react-router-dom';
import '../styles/Products.css';

const ProductItem = ({ product, onDelete, onUpdate }) => {
  return (
    <li className="product-item">
      <Link to={`/products/${product.id}`} className="product-link">
        <img src={product.image} alt={product.name} className="product-image" />
        <span>{product.name}</span>
      </Link>
      <div className="product-actions">
        <button onClick={() => onDelete(product.id)} className="delete-btn">
          Delete
        </button>
        <button
          onClick={() => {
            const newName = prompt('Enter new name:', product.name);
            if (newName) onUpdate(product.id, newName);
          }}
          className="edit-btn"
        >
          Edit
        </button>
      </div>
    </li>
  );
};

export default ProductItem;
