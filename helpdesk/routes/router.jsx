import {createBrowserRouter} from "react-router-dom"
import App from "../src/App"
import Login from "../src/pages/login";
import Register from "../src/pages/register.jsx";
import DashboardeLayout from "../src/layouts/DashboardLayout.jsx";
import Dashboard from "../src/pages/dashboard/index.jsx";
import Ticketing from "../src/pages/ticketing/index.jsx";
import Users from "../src/pages/users/index.jsx";













const router = createBrowserRouter([
    {
      path: "/",
      element: <App/>,
    },
    {
        path:"/login",
        element:<Login/>
    },  {
        path:"/register",
        element:<Register/>
    },{
    element:<DashboardeLayout/>,
        children:[
            {
                path:'/dashboard',
                element:<Dashboard/>
            },{
              path:"/dashboard/tickets/new",
                element:<Ticketing/>
            },
            {
                path:"/users",
                element:<Users/>
            }
        ]
    }
  ]);


export default router
