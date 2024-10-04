import React from 'react'
import ReactDOM from 'react-dom/client'
import {
  createBrowserRouter,
  RouterProvider,
} from "react-router-dom";
import CoinList from './components/CoinList.jsx';
import CoinDetails from './components/CoinDetails.jsx';

const router = createBrowserRouter([
  {
    path: "/",
    element: <CoinList />,
  },
  {
    path: "coins/:coinId",
    element: <CoinDetails />,
  },
]);


ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
    <RouterProvider router={router} />
  </React.StrictMode>,
)
