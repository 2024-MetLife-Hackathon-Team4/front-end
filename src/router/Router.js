import React from 'react'
import { RouterProvider, createBrowserRouter } from 'react-router-dom'
import CategoryPage from '../pages/Category'
import Chat from '../pages/Chat'
import Root from './Root'

function Router() {
  const router = createBrowserRouter([
    {
      path: '/',
      element: <Root />,
      children: [
        { path: '/', element: <CategoryPage /> },
        { path: '/chat', element: <Chat /> },
      ],
    },
  ])

  return <RouterProvider router={router} />
}

export default Router
