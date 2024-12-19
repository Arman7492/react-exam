import { useSelector } from 'react-redux';
import { useParams, useNavigate } from 'react-router-dom';
import '../styles/Product.css';

const Product = () => {
  const { id } = useParams();
  const navigate = useNavigate();
  const product = useSelector((state) =>
    state.products.find((p) => p.id === parseInt(id))
  );

  if (!product) {
    return (
      <div className="product-details">
        <h1>Product not found</h1>
        <button onClick={() => navigate(-1)} className="back-btn">Back</button>
      </div>
    );
  }

  return (
    <div className="product-details">
      <h1>Product details</h1>
      <img src={product.image} alt={product.name} className="product-image" />
      <p>Product ID: {product.id}</p>
      <p>Product Name: {product.name}</p>
      <button onClick={() => navigate(-1)} className="back-btn">Back</button>
    </div>
  );
};

export default Product;
