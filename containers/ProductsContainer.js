import React from 'react';
import connect from '../relax/connect';
import { addToFavorite } from '../actions/products';
import ProductCard from '../components/ProductCard/ProductCard';

const ProductsContainer = ({ products, addToFavorite }) => (
  <div>
    {products.map((item, i) => {
      <ProductCard
        key={i}
        product={product}
        onAddToFavoriteClicked={() => addToFavorite(product.id)}
      />
    })}
  </div>    
)

const mapStateToProps = state => ({
  products: state.products
});

// export default connect(ProductsContainer);
export default connect(mapStateToProps, { addToFavorite })(ProductsContainer);