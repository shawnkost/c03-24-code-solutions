import { Link } from 'react-router-dom';
import './ProductDetails.css';

export function ProductDetails() {
  return (
    <div id="product-details">
      <Link to="/">&lt; Back to Catalog</Link>
      <div className="row">
        <div className="image-wrapper">
          <img src="https://picsum.photos/id/10/300/300" alt="Product" />
        </div>
        <div className="column-two-thirds">
          <h1>Product Name</h1>
          <p>$10.99</p>
          <p>
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed
            elementum, nisl a porta porttitor, orci nisi porta nibh, in
            pellentesque nisl nisi et nibh. Nulla facilisi. Sed nec
          </p>
        </div>
      </div>
    </div>
  );
}
