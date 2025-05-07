import { useParams } from "react-router-dom";
import { useProductContext } from "../context/ProductContext";
import { useCart } from "../context/CartContext";
import { useState } from "react";

function Product() {
  const { id } = useParams();
  const { state } = useProductContext();
  const { cart, dispatch } = useCart();
  const product = state.products.find((item) => item.id === parseInt(id, 10));

  const [quantity, setQuantity] = useState(1);

  if (!product) {
    return <div>Product not found</div>;
  }

  const { title, price, image } = product;

  const decreaseQuantity = () => {
    setQuantity((prevQuantity) => (prevQuantity > 1 ? prevQuantity - 1 : 1));
  };

  const increaseQuantity = () => {
    setQuantity((prevQuantity) => prevQuantity + 1);
  };

  const handleQuantityChange = (e) => {
    const value = e.target.value;
    if (value === "" || !isNaN(value)) {
      setQuantity(Math.max(1, value)); 
    }
  };

  const handleAddToCart = () => {
    dispatch({
      type: 'ADD_TO_CART',
      payload: { ...product, quantity },
    });
  };

  return (
    <div className="container mt-5">
      <div className="row">
        <div className="col-md-6 d-flex justify-content-center">
          <img
            src={`/assets/images/${image}`}
            alt={title}
            className="img-fluid"
            style={{ maxWidth: '100px', objectFit: 'contain' }}
          />
        </div>

        <div className="col-md-6 d-flex flex-column justify-content-between">
          <div>
            <h2>{title}</h2>
            <p className="fs-5 text-muted">Цена: {price}₴</p>
          </div>

          <div>
            <div className="d-flex align-items-center mt-3">
              <button
                onClick={decreaseQuantity}
                className="btn btn-outline-secondary"
                style={{ maxWidth: "40px" }}
              >
                <i className="bi bi-dash" />
              </button>

              <input
                type="text"
                value={quantity}
                onChange={handleQuantityChange}
                className="form-control mx-2 text-center"
                style={{ maxWidth: "60px" }}
              />

              <button
                onClick={increaseQuantity}
                className="btn btn-outline-secondary"
                style={{ maxWidth: "40px" }}
              >
                <i className="bi bi-plus" />
              </button>
            </div>

            <div className="mt-4">
              <button className="btn btn-primary w-100" onClick={handleAddToCart}>
                Добавить в корзину
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Product;
