import React from 'react'
import { createBrowserRouter, RouterProvider } from 'react-router-dom'
import HomeLayout from './components/HomeLayout/HomeLayout'
import Home from './pages/Home/Home'

const App = () => {
  const router = createBrowserRouter([{
    path: "/",
    element: <HomeLayout />,
    children:[
      {
        index: true,
        element: <Home />
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