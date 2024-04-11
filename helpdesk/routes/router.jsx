import {createBrowserRouter} from "react-router-dom"
import App from "../src/App"
import Login from "../src/pages/Auth/login.jsx";
import Register from "../src/pages/Auth/register.jsx";
import DashboardeLayout from "../src/layouts/DashboardLayout.jsx";
import Dashboard from "../src/pages/dashboard/index.jsx";
import Ticketing from "../src/pages/ticketing/index.jsx";
import Users from "../src/pages/users/index.jsx";
import GuestLayout from "../src/layouts/GuestLayout.jsx";
import Home from "../src/pages/home/index.jsx"
import Blog from "../src/pages/Blog/index.jsx";
import Contact from "../src/pages/Contact/index.jsx";
import About from "../src/pages/about/index.jsx";
import UserRole from "../src/pages/userRole/index.jsx";
import AddUsers from "../src/pages/users/AddUsers.jsx";
import Profile from "../src/pages/profile/index.jsx";
import Departement from "../src/pages/Departement/index.jsx";
import BlogDashboard from "../src/pages/BlogDashboard/index.jsx";
import Teams from "../src/pages/Teams/index.jsx";
import TicketViewer from "../src/pages/ticketing/TicketViewer.jsx";
import UserProfile from "../src/pages/UserProfile/index.jsx";
import UserProfileLayout from "../src/layouts/UserProfileLayout.jsx";
import ForgetPassword from "../src/pages/Auth/forgetPassword.jsx";
import RestPassword from "../src/pages/Auth/RestPassword.jsx";
import OTP from "../src/pages/Auth/OTP.jsx";




const router = createBrowserRouter([

    {
        path:"/login",
        element:<Login/>
    },  {
        path:"/register",
        element:<Register/>
    },
    {path:"/forgetpassword",element:<ForgetPassword/> },
    {
    path:"/restpassword",element:<RestPassword/>
    }, {
    path:"/opt",element:<OTP/>
    }
    ,{
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
            },{
        path: "/userRole",element: <UserRole/>
            },{

        path: "/adduser",element:<AddUsers/>
            },{
                path: "/profile",
                element: <Profile/>
            },{
                path: "/departement",
                element: <Departement/>
            },{
                path: "/blogs",
                element: <BlogDashboard/>
            }, {
                path: "/teams",
                element: <Teams/>
            },{
                path: "/dashboard/ticket",
                element: <TicketViewer/>
            }
        ]
    },{
    element:<GuestLayout/>,
        children:[{
        path: "/",
            element: <Home/>
        },{
            path: "/blog",
            element :<Blog/>
        },{
        path: "/contact",
            element: <Contact/>
        },{
        path: "/about",
            element: <About/>
        }]
    },{
    element:<UserProfileLayout/>,
       children:[{
           path:'/user/profile',
           element: <UserProfile/>
       }]

    }
  ]);


export default router
