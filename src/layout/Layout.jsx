import { NavLink, Outlet } from 'react-router-dom';
import { useCart } from '../context/CartContext';

function Layout() {
  const { state } = useCart();  
  const cartItemCount = state.cart.reduce((acc, item) => acc + item.quantity, 0); 

  return (
    <>    
      <div className="container bg-white  py-2">
        <nav>
          <ul className="nav">
            <li className="nav-item">
              <NavLink to="/aboutproject" className="nav-link text-primary fw-bold">
                О проекте
              </NavLink>
            </li>
            <li className="nav-item">
              <NavLink to="/admin/adminpanel" className="nav-link text-primary fw-bold">
                Админпанель
              </NavLink>
            </li>
          </ul>
        </nav>
      </div>

      <header className="bg-light border-bottom mb-4">
        <div className="container py-3">
          <nav className="navbar navbar-expand-lg navbar-light">
            <ul className="navbar-nav me-auto mb-2 mb-lg-0">
              <li className="nav-item">
                <NavLink to="/" className="nav-link">Главная</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/about" className="nav-link">О нас</NavLink>
              </li>
              <li className="nav-item">
                <NavLink to="/contact" className="nav-link">Контакты</NavLink>
              </li>
            </ul>

            <div className="ms-auto d-flex align-items-center">
              <NavLink to="/cart" className="nav-link d-flex align-items-center">
                <i className="bi bi-cart" style={{ fontSize: '1.5rem' }} />
                {cartItemCount > 0 && (
                  <span
                    className="badge bg-primary rounded-circle d-flex justify-content-center align-items-center"
                    style={{
                      fontSize: '0.75rem', 
                      width: '20px', 
                      height: '20px', 
                      marginLeft: '5px',
                    }}
                  >
                    {cartItemCount}
                  </span>
                )}
              </NavLink>
            </div>
          </nav>
        </div>
      </header>

      <main>
        <div className="container">
          <Outlet />
        </div>
      </main>

      <footer>
        
      </footer>
    </>
  );
}

export default Layout;
