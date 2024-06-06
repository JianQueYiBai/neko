import App from "./App.jsx";
import Home from '@pages/Home/index'
import Assets from '@pages/Assets/index'

import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
        { index: true, element: <Home /> },
        { path: '/assets', element: <Assets /> },
    ]
  },
]);

export default router