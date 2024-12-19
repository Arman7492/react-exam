import { useSelector, useDispatch } from 'react-redux';
import { Link } from 'react-router-dom';
import { deleteProduct, updateProduct } from '../redux/productsSlice';
import ProductForm from '../components/ProductForm'; 
import ProductItem from '../components/ProductItem';
import '../styles/Products.css';

const Products = () => {
  const products = useSelector((state) => state.products);
  const dispatch = useDispatch();

  const handleDeleteProduct = (id) => {
    dispatch(deleteProduct(id));
  };

  const handleUpdateProduct = (id, newName) => {
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

      <ProductForm />
      <ul className="product-list">
        {products.map((product) => (
          <ProductItem
            key={product.id}
            product={product}
            onDelete={handleDeleteProduct}
            onUpdate={handleUpdateProduct}
          />
        ))}
      </ul>
    </div>
  );
};

export default Products;
