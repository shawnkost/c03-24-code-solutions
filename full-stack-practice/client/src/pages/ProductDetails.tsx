import { Link, useParams } from 'react-router-dom';
import { useEffect, useState } from 'react';
import { getProduct } from '../api/queries';
import { Product } from '../lib/types';
import './ProductDetails.css';

export function ProductDetails() {
  const [product, setProduct] = useState<Product>();
  const { id } = useParams();

  useEffect(() => {
    async function loadData() {
      try {
        const response = await getProduct(Number(id));
        setProduct(response);
      } catch (error) {
        console.error('Error fetching product:', error);
      }
    }
    loadData();
  }, [id]);

  return (
    <div id="product-details">
      <Link className="back-link" to="/">
        &lt; Back to Catalog
      </Link>
      <div className="main-details">
        <div className="image-wrapper">
          <img src={product?.imageUrl} alt="Product" />
        </div>
        <div className="column-two-thirds">
          <h1>{product?.name}</h1>
          <p>${product?.price.toFixed(2)}</p>
          <p>{product?.shortDescription}</p>
        </div>
      </div>
      <p>{product?.longDescription}</p>
    </div>
  );
}
