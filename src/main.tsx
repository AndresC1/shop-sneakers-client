import React from 'react'
import ReactDOM from 'react-dom/client'
import { RouterProvider, createBrowserRouter, } from 'react-router-dom'
import Home from './pages/Home/Home.tsx'
import Layout from './pages/Layout/Layout.tsx'
import 'tailwindcss/tailwind.css'
import './main.css'

const route = createBrowserRouter([
  {
    path: '/',
    element: <Layout />,
    children: [
      {
        path: '/',
        element: <Home />,
      }
    ]
  }
])

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    <RouterProvider router={route} />
  </React.StrictMode>,
)
