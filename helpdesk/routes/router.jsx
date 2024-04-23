import { createBrowserRouter, Navigate } from "react-router-dom";
import { useDispatch, useSelector } from "react-redux";
import { selectUserInfo, fetchUserInfo } from "../src/redux/features/userSlice.js";
import { useEffect } from "react";

import Login from "../src/pages/Auth/login.jsx";
import Register from "../src/pages/Auth/register.jsx";
import DashboardeLayout from "../src/layouts/DashboardLayout.jsx";
import Dashboard from "../src/pages/dashboard/index.jsx";
import Ticketing from "../src/pages/ticketing/index.jsx";
import Users from "../src/pages/users/index.jsx";
import GuestLayout from "../src/layouts/GuestLayout.jsx";
import Home from "../src/pages/home/index.jsx";
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
import UserMessage from "../src/pages/UserMessage/index.jsx";
import UserTicket from "../src/pages/UserTicket/index.jsx";

const ProtectedRoute = ({ children }) => {
    const userInfo = useSelector(selectUserInfo);
    const dispatch = useDispatch();

    useEffect(() => {
        if (!userInfo) {
            dispatch(fetchUserInfo());
        }
    }, [dispatch, userInfo]);

    if (userInfo === null) {
        return null;
    }

    if (!userInfo) {
        return <Navigate to="/login" />;
    }

    if (userInfo.user_role_id === 1 && userInfo.accessDashboard === 1) {
        return children;
    } else if (userInfo.user_role_id === 2) {
        return children;
    } else {
        return <Navigate to="/ana" replace />;
    }
};

const router = createBrowserRouter([
    {
        path: "/login",
        element: <Login />,
    },
    {
        path: "/register",
        element: <Register />,
    },
    {
        path: "/forgetpassword",
        element: <ForgetPassword />,
    },
    {
        path: "/restpassword",
        element: <RestPassword />,
    },
    {
        path: "/otp",
        element: <OTP />,
    },
    {
        element: (
            <ProtectedRoute>
                <DashboardeLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/dashboard",
                element: <ProtectedRoute><Dashboard /></ProtectedRoute>,
            },
            {
                path: "/dashboard/tickets",
                element: <ProtectedRoute><Ticketing /></ProtectedRoute>,
            },
            {
                path: "/users",
                element: <ProtectedRoute><Users /></ProtectedRoute>,
            },
            {
                path: "/userRole",
                element: <ProtectedRoute><UserRole /></ProtectedRoute>,
            },
            {
                path: "/adduser",
                element: <ProtectedRoute><AddUsers /></ProtectedRoute>,
            },
            {
                path: "/profile",
                element: <ProtectedRoute><Profile /></ProtectedRoute>,
            },
            {
                path: "/departement",
                element: <ProtectedRoute><Departement /></ProtectedRoute>,
            },
            {
                path: "/blogs",
                element: <ProtectedRoute><BlogDashboard /></ProtectedRoute>,
            },
            {
                path: "/teams",
                element: <ProtectedRoute><Teams /></ProtectedRoute>,
            },
            {
                path: "/dashboard/ticket/:idTicket",
                element: <ProtectedRoute><TicketViewer /></ProtectedRoute>,
            },
        ],
    },
    {
        element: (
            <ProtectedRoute>
                <GuestLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/",
                element: <Home />,
            },
            {
                path: "/blog",
                element: <Blog />,
            },
            {
                path: "/contact",
                element: <Contact />,
            },
            {
                path: "/about",
                element: <About />,
            },
        ],
    },
    {
        element: (
            <ProtectedRoute>
                <UserProfileLayout />
            </ProtectedRoute>
        ),
        children: [
            {
                path: "/user/profile",
                element: <UserProfile />,
            },
            {
                path: "/user/message",
                element: <UserMessage />,
            },
            {
                path: "/user/ticket",
                element: <UserTicket />,
            },
        ],
    },
]);

export default router;
