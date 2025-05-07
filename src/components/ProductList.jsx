import { useProductContext } from '../context/ProductContext';
import ProductItem from './ProductItem';

function ProductList() {
  const { state } = useProductContext(); 
  const { products, search } = state;

  const filteredProducts = products.filter((product) =>
    product.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="mb-5">
      <h2 className="mb-3">Список товаров</h2>
      <div className="row g-3">
        {filteredProducts.map((item) => (
          <div key={item.id} className="col-sm-6 col-md-4 col-lg-3">
            <ProductItem product={item} />
          </div>
        ))}
      </div>
    </div>
  );
}

export default ProductList;
