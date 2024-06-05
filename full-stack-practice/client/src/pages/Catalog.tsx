import { useEffect, useState } from 'react';
import './Catalog.css';
import { getProducts } from '../api/queries';
import { Link } from 'react-router-dom';

type Product = {
  productId: number;
  name: string;
  price: number;
  imageUrl: string;
  shortDescription: string;
  longDescription: string;
};

export function Catalog() {
  const [products, setProducts] = useState<Product[]>([]);
  const [isLoading, setIsLoading] = useState(true);
  const [error, setError] = useState<unknown>();

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getProducts();
        setProducts(response);
      } catch (error) {
        console.error('Error fetching products:', error);
        setError(error);
      } finally {
        setIsLoading(false);
      }
    }
    loadData();
  }, []);

  return (
    <div id="catalog">
      <h1>Catalog</h1>
      <hr />
      <div className="catalog-list">
        {products.map((product) => (
          <div key={product.productId} className="catalog-item">
            <Link to={`/product/${product.productId}`}>
              <div className="product-image">
                <img src={product.imageUrl} alt="Product" />
              </div>
              <div className="product-details">
                <h3>{product.name}</h3>
                <p className="product-price">${product.price.toFixed(2)}</p>
                <p>{product.shortDescription}</p>
              </div>
            </Link>
          </div>
        ))}
      </div>
    </div>
  );
}
