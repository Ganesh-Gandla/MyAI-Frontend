import { createRoot } from 'react-dom/client'
import { createBrowserRouter } from 'react-router'
import { RouterProvider } from 'react-router/dom'
import './index.css'
import App from './App.jsx'
import Home from './Pages/Home.jsx'
import About from './Pages/About.jsx'
import ContactUs from './Pages/ContactUs.jsx'

const router = createBrowserRouter([
  {
    path:"/",
    element:<App />,
    children: [
      {
        index:true,
        element: <Home />
      },
      {
        path:"about",
        element:<About />
      },
      {
        path:"contact",
        element:<ContactUs/>
      },
    ],
  },
]);

createRoot(document.getElementById('root')).render(
  <RouterProvider router={router}/>
)
