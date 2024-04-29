import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { createBrowserRouter, RouterProvider,} from "react-router-dom";
import AllProducts from './Allproducts/AllProducts.jsx';
import Home from './home/Home.jsx';
import Men from './men/Men.jsx';
import Women from './women/Women.jsx';
import Kids from './kids/Kids.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children: [
      {
        path: "/",
        element: <Home />
      },
      {
        path: "/Allproducts",
        element: <AllProducts />
      },
      {
        path: "/men",
        element: <Men />
      },
      {
        path: "/women",
        element: <Women />
      },
      {
        path: "/kids",
        element: <Kids />
      },
    ]
  },
]);

ReactDOM.createRoot(document.getElementById('root')).render(
  <RouterProvider router={router} />
)
