import React from 'react'
import ReactDOM from 'react-dom/client'
import './index.css'
import { RouterProvider } from 'react-router-dom'
import Router from './Route/Route'
import AuthProvider from './Pages/AuthProvider/AuthProvider'



ReactDOM.createRoot(document.getElementById('root')).render(
  <div className='px-2 lg:px-24 mx-auto'>
    <React.StrictMode>
    <AuthProvider>
      <RouterProvider router={Router} />
    </AuthProvider>,
    </React.StrictMode>
  </div>
)
