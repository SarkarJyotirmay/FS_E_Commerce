import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './components/HomeLayout/HomeLayout'
import Home from './pages/Home/Home'
import Signup from './pages/Signup/Signup'
import Login from './pages/Login/Login'
import Contact from './pages/Contact/Contact'
import About from './pages/About/About'
import Products from './pages/products/Products'
import Notfound from './pages/Notfound/Notfound'
import ProtectedRoute from './components/ProtectedRoute'
import RestrictedRoute from './components/RestrictedRoute'

const App = () => {
  const router = createBrowserRouter([{
    path: "/",
    element: <HomeLayout />,
    children:[
      {
        index: true,
        element: <Home />
      },
      {
        path: "/products",
        element: <Products />
      },
      {
        path: "/about",
        element: <About />
      },
      {
        path: "/contact",
        element: <ProtectedRoute>
          <Contact />
        </ProtectedRoute>
      },
      {
       path: "/signup",
        element: <RestrictedRoute>
          <Signup />
        </RestrictedRoute>
      },
      {
        path: "/login",
        element: <RestrictedRoute>
          <Login />
        </RestrictedRoute>
      },
      {
        path: "*",
        element: <Notfound />
      }
    ]

  }])
  return (
    <>
     <RouterProvider router={router}></RouterProvider>
    </>
  )
}

export default App