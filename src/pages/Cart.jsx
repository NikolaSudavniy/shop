import { useCart } from "../context/CartContext";
import { Link } from "react-router-dom";

function Cart() {
  const { state, dispatch } = useCart();
  const { cart } = state;

  const handleRemoveFromCart = (id) => {
    dispatch({ type: "REMOVE_FROM_CART", payload: id });
  };

  return (
    <div className="container mt-5">
      <h2 className="mb-4">Корзина</h2>

      {cart.length === 0 ? (
        <div className="alert alert-info" role="alert">
          Ваша корзина пуста. Перейдите к{" "}
          <Link to="/" className="alert-link">
            покупкам
          </Link>.
        </div>
      ) : (
        <>
          <div className="list-group">
            {cart.map((item) => (
              <div
                key={item.id}
                className="list-group-item d-flex justify-content-between align-items-center"
              >
                <div className="d-flex align-items-center">
                  <img
                    src={`/assets/images/${item.image}`}
                    alt={item.title}
                    className="img-fluid me-4"
                    style={{ width: "2rem", objectFit: "contain" }}
                  />
                  <div>
                    <h5 className="mb-1">{item.title}</h5>
                    <p className="mb-1">Цена: {item.price}₴</p>
                    <p className="mb-0">Количество: {item.quantity}</p>
                  </div>
                </div>
                <button
                  className="btn btn-link text-danger p-0"
                  onClick={() => handleRemoveFromCart(item.id)}
                  aria-label="Удалить товар"
                >
                  <i className="bi bi-trash" style={{ fontSize: "20px" }}></i>
                </button>
              </div>
            ))}
          </div>

          <div className="d-flex justify-content-between align-items-center mt-4 flex-wrap gap-2">
            <Link to="/" className="btn btn-link p-0">
              ← Вернуться к покупкам
            </Link>
            <Link to="/checkout" className="btn btn-primary">
              Перейти к оформлению
            </Link>
          </div>
        </>
      )}
    </div>
  );
}

export default Cart;
