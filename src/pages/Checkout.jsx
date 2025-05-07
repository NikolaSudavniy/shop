import { useCart } from "../context/CartContext";
import { useState } from "react";
import { Link } from "react-router-dom";

function Checkout() {
  const { state } = useCart();
  const [formData, setFormData] = useState({
    name: "",
    email: "",
    phone: "",
    address: "",
    deliveryMethod: "standard",
    paymentMethod: "creditCard",
  });

  const handleChange = (e) => {
    setFormData({
      ...formData,
      [e.target.name]: e.target.value,
    });
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    alert("Заказ оформлен!");
  };

  const cartTotal = state.cart.reduce((acc, item) => acc + item.price * item.quantity, 0);
  const deliveryCost = formData.deliveryMethod === "express" ? 300 : 0;
  const totalAmount = cartTotal + deliveryCost;

  return (
    <div className="container my-5">
      <h1>Оформление заказа</h1>
      <div className="row">
        <div className="col-md-8">
          <h3>Данные покупателя</h3>
          <form onSubmit={handleSubmit}>
            {["name", "email", "phone", "address"].map((field) => (
              <div className="mb-3" key={field}>
                <label htmlFor={field} className="form-label">
                  {{
                    name: "Имя",
                    email: "Электронная почта",
                    phone: "Телефон",
                    address: "Адрес доставки",
                  }[field]}
                </label>
                <input
                  type={field === "email" ? "email" : field === "phone" ? "tel" : "text"}
                  id={field}
                  name={field}
                  value={formData[field]}
                  onChange={handleChange}
                  className="form-control"
                  required
                />
              </div>
            ))}

            <div className="mb-3">
              <label htmlFor="deliveryMethod" className="form-label">
                Способ доставки
              </label>
              <select
                id="deliveryMethod"
                name="deliveryMethod"
                value={formData.deliveryMethod}
                onChange={handleChange}
                className="form-select"
              >
                <option value="standard">Стандартная доставка (бесплатно)</option>
                <option value="express">Экспресс-доставка (300 ₴)</option>
              </select>
            </div>

            <div className="mb-3">
              <label htmlFor="paymentMethod" className="form-label">
                Способ оплаты
              </label>
              <select
                id="paymentMethod"
                name="paymentMethod"
                value={formData.paymentMethod}
                onChange={handleChange}
                className="form-select"
              >
                <option value="creditCard">Кредитная карта</option>
                <option value="paypal">PayPal</option>
                <option value="cash">Наложенный платёж</option>
              </select>
            </div>
          </form>

          <Link to="/cart" className="btn btn-link mt-3">
            ← Вернуться в корзину
          </Link>
        </div>

        <div className="col-md-4">
          <div className="bg-light p-3 rounded shadow-sm">
            <h4 className="mb-3">Товары в корзине</h4>
            {state.cart.map((item) => (
              <div
                key={item.id}
                className="d-flex justify-content-between border-bottom py-2"
              >
                <div style={{ flex: 1 }}>{item.title}</div>
                <div className="me-2">x{item.quantity}</div>
                <div>{item.price} ₴</div>
                {/* <div>{item.price * item.quantity} ₴</div> */}
              </div>
            ))}

            <hr />
            <p className="d-flex justify-content-between">
              <span>Итого:</span>
              <strong>{cartTotal} ₴</strong>
            </p>
            <p className="d-flex justify-content-between">
              <span>Доставка:</span>
              <strong>{deliveryCost} ₴</strong>
            </p>
            <p className="d-flex justify-content-between fs-5">
              <span>Общая сумма:</span>
              <strong>{totalAmount} ₴</strong>
            </p>

            <button
              type="submit"
              className="btn btn-primary w-100 mt-3"
              onClick={handleSubmit}
            >
              Оформить заказ
            </button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Checkout;
