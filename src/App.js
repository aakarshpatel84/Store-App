
import {
  RouterProvider, createBrowserRouter,
  Outlet
} from 'react-router-dom';
import Products from './Pages/Products/Products';
import Product from './Pages/Product/Product';
import Home from './Pages/Home/Home';
import Navbar from './components/Navbar/Navbar';
import Footer from './components/Footer/Footer';
import "./app.scss";
const Layout = () => {
  return <div className='app'>
    <Navbar />
    <Outlet />
    <Footer />
  </div>;
};

const router = createBrowserRouter([
  {
    path: "/",
    element: <Layout />,
    children: [
      {
        path: "/",
        element: <Home />
      },

      {
        path: "/products/:id",
        element: <Products />
      },
      {
        path: "/product/:id",
        element: <Product />
      },

    ]

  },



]);

function App() {
  return (
    <div className="App">
      <RouterProvider router={router} />
    </div>
  );
}

export default App;