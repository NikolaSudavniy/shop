import { useParams, useNavigate } from 'react-router-dom';
import AdminProductList from '../components/adminpanel/AdminProductList'

function Adminpanel() {
  const navigate = useNavigate();
  return (
    <>
      <header className="mb-3 p-2 bg-light">
        <div className="container-fluid">
          <div className="row align-items-center ">
            <div className="col">
              <h4 className="mb-0">Админпанель</h4>
            </div>
            <div className="col-auto">
              <button
                type="button"
                className="btn btn-outline-primary"
                onClick={() => navigate('/')}
              >
                Магазин
              </button>
            </div>
          </div>
        </div>
      </header>

      <div className="container-fluid">
        <div className="row">
          <div className="col">
            <AdminProductList />
          </div>
        </div>
      </div>
    </>
  )
}

export default Adminpanel
