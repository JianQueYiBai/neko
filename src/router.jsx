import App from "./App.jsx";
import Home from '@pages/Home'
import { createBrowserRouter } from "react-router-dom";


const router = createBrowserRouter([
  {
    path: "/",
    element: <App />,
    children:[
        { index: true, element: <Home /> },
    ]
  },
]);

export default router