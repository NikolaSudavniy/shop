import { Link } from "react-router-dom";

function ProductItem(props) {
  const { id, title, price, image } = props.product;

  return (
    <Link to={`/product/${id}`} className="text-decoration-none">
      <div className="card d-flex flex-column" style={{ width: '250px', flexGrow: 1, height: '100%' }}>
        <img
          src={`/assets/images/${image}`}
          alt={title}
          className="card-img-top mx-auto d-block"
          style={{ width: '6rem', padding: '10px' }}
        />
        <div className="card-body d-flex flex-column justify-content-end p-2">
          <h5 className="card-title fs-6 text-center">{title}</h5>
          <h6 className="card-subtitle text-center text-muted">{price}₴</h6>
        </div>
      </div>
    </Link>
  );
}

export default ProductItem;
