import { createBrowserRouter, RouterProvider } from "react-router-dom"
import Layout from "./layout/Layout"
import Home from "./pages/Home"
import About from "./pages/About"
import Contact from "./pages/Contact"
import NotFound from "./pages/NotFound"
import './App.css';
import Product from "./components/Product"
import { ProductProvider } from "./context/ProductContext"
import Login from "./pages/Login"
import AuthLayout from "./layout/AuthLayout"
import Register from "./pages/Register"
import AdminLayout from "./layout/AdminLayout"
import Adminpanel from "./pages/Adminpanel"
import ProductForm from "./components/adminpanel/ProductForm"
import Cart from "./pages/Cart"
import { CartProvider } from "./context/CartContext"
import Checkout from "./pages/Checkout"
import AboutProject from "./pages/AboutProject"

function App() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: (
        <ProductProvider>
          <Layout />
        </ProductProvider>
      ),
      children:[
        {
          path: '/',
          element: <Home />
        },
        {
          path: '/about',
          element: <About />
        },
        {
          path:'/contact',
          element: <Contact />
        },
        {
          path:'/aboutproject',
          element: <AboutProject />
        },
        {
          path: 'product/:id',
          element: <Product />
        },
        {
          path: '*',
          element: <NotFound />
        }
      ]
    },
    {
      path:'/auth',
      element: <AuthLayout />,
      children: [
        {
          path: 'login',
          element: <Login />
        },
        {
          path: 'register',
          element: <Register />
        }
      ]
    },
    {
      path:'/admin',
      element: 
        <ProductProvider>
          <AdminLayout />
        </ProductProvider>
        ,
      children: [
        {
          path: 'adminpanel',
          element: <Adminpanel />
        },
        {
          path: 'adminpanel/new',
          element: <ProductForm />,
        },
        {
          path: 'adminpanel/:id/edit',
          element: <ProductForm />, 
        },
      ]
    },
    {
      path: '/cart',
      element: <Cart />  
    },
    {
      path: '/checkout',
      element: <Checkout />,
    }
  ])
  
  return (
    <CartProvider>
      <RouterProvider router={router} />
    </CartProvider>
  )
}

export default App
