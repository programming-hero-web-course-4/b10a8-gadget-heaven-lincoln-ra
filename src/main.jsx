import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Components/Home/Home';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Context from './Context/Context';
import Cards from './Components/Cards/Cards';
import Details from './Components/Details/Details';
import Cart from './Components/Cart/Cart';
import Wishlist from './Components/Wishlist/Wishlist';

// import App from './App.jsx'
const router = createBrowserRouter([
  {
    path: "/",
    element: <Root></Root>,
    errorElement: <ErrorPage></ErrorPage>,
    children: [
      {
        path:"/",
        element: <Home></Home>,
        children:[
          {
            path: "/",
            element:<Cards></Cards>

          },
          {
            path:"cards/:category",
            element: <Cards></Cards>
          }
        ]
      },
      
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
        children:[
          {
            path:"cart",
            element: <Cart></Cart>
          },
          {
            path: "wishlist",
            element: <Wishlist></Wishlist>

          }
        ]
      },
      {
        path: "blog",
        element: <Blogs></Blogs>
    
        
      },
      {
        path: "/details",
        element: <Details></Details>

      }
    ]
  },
  
  
]);

createRoot(document.getElementById('root')).render(
  <StrictMode>
     <Context>
      <RouterProvider router={router} />
     </Context>
  </StrictMode>,
)
