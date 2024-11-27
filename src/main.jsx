import { StrictMode } from 'react'
import { createRoot } from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import './index.css'
import Root from './Root/Root';
import Home from './Components/Home/Home';
import Statistic from './Components/Statistic/Statistic';
import Dashboard from './Components/Dashboard/Dashboard';
import Blogs from './Components/Blogs/Blogs';
import ErrorPage from './Components/ErrorPage/ErrorPage';
import Context from './Context/Context';
import Cards from './Components/Cards/Cards';

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
            path:"/cards/:category",
            element: <Cards></Cards>
          }
        ]
      },
      
      {
        path: "/statistic",
        element: <Statistic></Statistic>,
      },
      
      {
        path: "/dashboard",
        element: <Dashboard></Dashboard>,
      },
      {
        path: "blog",
        element: <Blogs></Blogs>
    
        
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
