import React from 'react'
import ReactDOM from 'react-dom/client'
import App from "./App"
//import App from './App.tsx'
import './index.css'
// import { createBrowserRouter, RouterProvider } from 'react-router-dom'
// import Navbar from './Components/Header/Navbar.tsx'

// const router = createBrowserRouter(
//   [
//     {
//       path: '/',
//       element: <Navbar/>,
//     }
//   ]
// )

ReactDOM.createRoot(document.getElementById('root')!).render(
  <React.StrictMode>
    {/* <RouterProvider router={router}/> */}
    <App />
    
  </React.StrictMode>,
)
