import { useNavigate } from 'react-router-dom';
import { useProductContext } from '../../context/ProductContext';
import { useImageContext } from '../../context/ImageContext';
import SearchBar from './Searchbar';

function AdminProductList() {
  const { state, dispatch } = useProductContext();
  const { getFullPath } = useImageContext();
  const navigate = useNavigate();

  const filteredProducts = state.products.filter((product) =>
    product.title.toLowerCase().includes(state.search.toLowerCase())
  );

  return (
    <>
      <h2>Товары</h2>

      <div className="mb-3">
        <SearchBar />
      </div>

      <div className="mb-4">
        <button
          className="btn btn-primary"
          onClick={() => navigate('/admin/adminpanel/new')}
        >
          Добавить товар
        </button>
      </div>

      <table className="table table-striped align-middle">
        <thead>
          <tr>
            <th style={{ width: '4rem' }}>id</th>
            <th style={{ width: '6rem' }}>Изображение</th>
            <th style={{ width: '30rem' }}>Товар</th>
            <th style={{ width: '8rem' }} className="text-end">Цена</th>
            <th style={{ width: '4rem' }}>Действия</th>
          </tr>
        </thead>
        <tbody>
          {filteredProducts.map((product) => (
            <tr key={product.id}>
              <td>{product.id}</td>
              <td className="text-center">
                {product.image ? (
                  <img
                    src={getFullPath(product.image)}
                    alt={product.title}
                    className="img-thumbnail img-fluid"
                    style={{ width: '2rem' }} 
                  />
                ) : (
                  <span className="text-muted">Нет изображения</span>
                )}
              </td>
              <td className="text-truncate" style={{ maxWidth: '30rem' }}>{product.title}</td>
              <td className="text-end">{product.price}</td> 
              <td>
                <button
                  className="btn btn-sm btn-outline-secondary me-2"
                  onClick={() => navigate(`/admin/adminpanel/${product.id}/edit`)}
                  title="Редактировать"
                >
                  <i className="bi bi-pencil-square"></i>
                </button>
                <button
                  className="btn btn-sm btn-outline-danger"
                  onClick={() =>
                    dispatch({ type: 'DELETE_PRODUCT', payload: product.id })
                  }
                  title="Удалить"
                >
                  <i className="bi bi-trash"></i>
                </button>
              </td>
            </tr>
          ))}
        </tbody>
      </table>
    </>
  );
}

export default AdminProductList;
