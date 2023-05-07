import React from 'react'
import ReactDOM from 'react-dom/client'
import App from './App.jsx'
import './index.css'

import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import Home from './Paginas/Home.jsx'
import Login from './Paginas/Login.jsx'
import Erro from './Paginas/Erro.jsx'

const router = createBrowserRouter([
  {
    path: '/',
    element: <App />,
    errorElement: <Erro />,
    children: [
      {
        path: '/',
        element: <Home/>,
      },
      {
        path: '/login',
        element: <Login />,
      },
      
    ]
  },
  
])

ReactDOM.createRoot(document.getElementById('root')).render(
  <React.StrictMode>
     <RouterProvider router={router} />
  </React.StrictMode>,
)

  
