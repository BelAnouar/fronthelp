import {Link, Outlet, useLocation, useNavigate} from 'react-router-dom'

import WidgetsIcon from '@mui/icons-material/Widgets';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';

import AllInboxIcon from '@mui/icons-material/AllInbox';
import MapsHomeWorkIcon from '@mui/icons-material/MapsHomeWork';
import PersonIcon from '@mui/icons-material/Person';
import GroupIcon from '@mui/icons-material/Group';
import Notification from "../components/Notification/index.jsx";
import SettingsIcon from '@mui/icons-material/Settings';
import {useQuery} from "@tanstack/react-query";
import axiosClient from "../apis/apiCient.js";
import ArrowCircleDownIcon from "@mui/icons-material/ArrowCircleDown.js";
import LogoutIcon from "@mui/icons-material/Logout.js";
import {useDispatch, useSelector} from "react-redux";
import {logout, selectUserInfo} from "../redux/features/userSlice.js";
import {useState} from "react";
import AccountCircleIcon from '@mui/icons-material/AccountCircle';
function DashboardeLayout() {

    const location = useLocation();
const navigate =useNavigate();
    const [showDropdown, setShowDropdown] = useState(false);
    const dispatch = useDispatch()
    const handleLogout = () => {

        dispatch(logout())
    };
    const isActive = (path) => location.pathname === path ? 'active' : '';
    const {data, error, isLoading} = useQuery({
        queryKey: ["notifications"],
        queryFn: () => axiosClient.get("/notifications").then(({data}) => data.notifications)
    })
    const navigateBack =()=>{
        navigate(-1)
    }


    const getPageName = () => {
        switch (location.pathname) {
            case '/dashboard':
                return {name: 'Dashboard', icon: <WidgetsIcon/>};
            case '/dashboard/tickets':
                return {name: 'Ticket', icon: <AllInboxIcon/>};
            case '/departement':
                return {name: 'Departements', icon: <MapsHomeWorkIcon/>};
            case '/users':
                return {name: 'Users', icon: <PersonIcon/>};
            case '/user-roles':
                return {name: 'Users roles', icon: <GroupIcon/>};
            case '/blogs':
                return {name: 'Blogs', icon: <GroupIcon/>};
            case '/teams':
                return {name: 'Teams', icon: <GroupIcon/>};
            default:
                return {name: 'Page not found', icon: ''};
        }
    };

    const {name, icon} = getPageName();

    if (isLoading) return "loading...!"

    return (<>

        <section className="text-gray-800 font-inter">
            <div
                className="fixed left-0 top-0 w-64 h-full bg-gray-100/5 p-4 z-50 sidebar-menu border shadow-xl transition-transform">
                <Link to="/dashboard" className="flex items-center pb-4 border-b border-b-gray-800">
                    <svg width="45" height="35" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                        <path
                            d="M30.07 0.86C27.82 0.34 24.123 0 19.943 0C15.763 0 12.065 0.34 9.816 0.86C5.33 1.804 1.799 5.346 0.858 9.844C0.338 12.1 0 15.808 0 20C0 24.192 0.339 27.9 0.858 30.156C1.799 34.654 5.331 38.196 9.816 39.14C12.066 39.66 15.763 40 19.943 40C24.123 40 27.821 39.66 30.07 39.14C34.555 38.196 38.087 34.654 39.028 30.156C39.548 27.9 39.886 24.192 39.886 20C39.886 15.808 39.547 12.1 39.028 9.844C38.087 5.346 34.555 1.804 30.07 0.86Z"
                            fill="#00BD82"/>
                        <path
                            d="M29.7853 25.1907C29.2844 27.0876 28.0322 28.7474 26.1538 29.6959C24.9016 30.2887 23.5242 30.7629 21.8962 30.8814C21.2701 31 20.644 31 20.0179 31C18.5152 31 17.0125 30.7629 15.5098 30.4072C13.6315 29.8144 12.1288 28.9845 11.127 27.5619C10.3757 26.732 10 25.7835 10 24.835C10 23.6495 10.6261 22.5825 11.7531 22.1082C13.0054 21.5155 14.2576 21.634 15.2594 22.3454C15.8855 22.8196 16.2612 23.2938 16.6369 23.768C17.3882 24.7165 18.0143 25.1907 18.7657 25.3093C20.0179 25.5464 21.0197 25.5464 21.8962 25.0722C22.6476 24.7165 22.7728 24.3608 22.7728 24.0052C22.7728 23.768 22.7728 23.5309 22.3971 23.2938C22.1467 23.0567 21.6458 22.9381 21.1449 22.9381L20.7692 22.8196C20.1431 22.701 19.517 22.4639 18.8909 22.3454C17.6386 21.9897 16.2612 21.7526 15.0089 21.3969C13.6315 21.0412 12.3792 20.3299 11.5027 19.2629C10.5009 18.1959 10.1252 16.7732 10.1252 14.9948C10.1252 12.8608 11.0018 11.201 12.6297 10.0155C13.7567 9.18557 15.0089 8.71134 16.3864 8.35567C17.1377 8.23711 17.8891 8.11856 18.39 8.11856L18.8909 8H19.0161C22.2719 8 24.6512 8.71134 26.6547 10.0155C27.7818 10.7268 28.5331 11.6753 28.7835 12.6237C29.1592 13.6907 28.9088 14.6392 28.2826 15.3505C27.6565 16.1804 26.5295 16.5361 25.4025 16.5361C24.2755 16.5361 23.5241 15.9433 23.0233 15.4691C22.898 15.3505 22.7728 15.232 22.6476 15.1134C22.3971 14.8763 22.1467 14.6392 21.8962 14.4021C21.1449 13.8093 20.1431 13.5722 18.8909 13.6907C18.5152 13.6907 18.0143 13.8093 17.6386 14.0464C17.263 14.1649 17.1377 14.6392 17.1377 14.8763C17.1377 14.9948 17.1377 15.1134 17.5134 15.232C18.1395 15.4691 18.7657 15.7062 19.3918 15.8247C20.0179 15.9433 20.7692 16.1804 21.3953 16.299C22.3971 16.5361 23.5242 16.7732 24.5259 17.0103C26.2791 17.4845 27.6565 18.433 28.6583 19.7371C29.9106 21.2783 30.2862 23.2938 29.7853 25.1907Z"
                            fill="#FFFEFF"/>
                    </svg>

                    <span className="text-lg font-bold text-[#012635]">SupportX</span>
                </Link>
                <ul className="mt-4">
                    <li className={`mb-1 group ${isActive('/dashboard')} `}>
                        <Link to="/dashboard"
                              className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <WidgetsIcon/>
                            <span className="text-sm px-2 font-medium">Dashboard</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/dashboard/tickets')}`}>
                        <Link to="/dashboard/tickets"
                              className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <AllInboxIcon/>
                            <span className="text-sm px-2 font-medium">Ticket</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/departement')}`}>
                        <Link to="/departement"
                              className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <MapsHomeWorkIcon/>
                            <span className="text-sm px-2 font-medium">Departements</span>
                            <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                        </Link>
                        <ul className={`pl-7 mt-2 hidden ${isActive('/departement')}`}>
                            <li className="mb-4">
                                <Link to="/manage-users"
                                      className="text-customGray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Manage
                                    Users</Link>
                            </li>
                        </ul>
                    </li>
                    <li className={`mb-1 group ${isActive('/users')}`}>
                        <Link to="/users"
                              className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <PersonIcon/>
                            <span className="text-sm px-2 font-medium">Users</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/user-roles')}`}>
                        <Link to="/user-roles"
                              className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <GroupIcon/>
                            <span className="text-sm px-2 font-medium">Users roles</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/blogs')}`}>
                        <Link to="/blogs"
                              className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <GroupIcon/>
                            <span className="text-sm px-2 font-medium">Blogs</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/teams')}`}>
                        <Link to="/teams"
                              className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <GroupIcon/>
                            <span className="text-sm px-2 font-medium">Teams</span>
                        </Link>
                    </li>
                    <li className={`mb-1 group ${isActive('/profile')}`}>
                        <Link to="/profile"
                              className="flex items-center py-2 px-4 text-customGray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                            <SettingsIcon/>
                            <span className="text-sm px-2 font-medium">Profile</span>
                        </Link>
                    </li>
                </ul>


            </div>
            <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
            <main className="w-full md:w-[calc(100%-256px)] md:ml-64  bg-gray-50 min-h-screen transition-all main">
                <div
                    className="py-2 px-6 bg-white flex justify-between items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
                    <div className={"flex items-center gap-1"}>
                        <button  onClick={navigateBack} type="button"
                                className="text-lg text-gray-600 border px-2 pb-1 rounded-lg  sidebar-toggle">
                            <KeyboardBackspaceIcon stroke={"currentColor"} viewBox="0 0 24 24"

                                                   fontSize="small"/>
                        </button>

                        <div
                            className="flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap">

                            <div className="flex items-center justify-between w-full">
                                <div className="flex items-center space-x-2 overflow-hidden">
                                    <div className="flex items-center gap-2.5 flex">
                                        <li className="flex items-center space-x-2" tabIndex="-1">
                                            <div className="flex flex-wrap items-center gap-2.5 flex">
                                                <div className="flex cursor-default items-center gap-2.5">
                                                    <div
                                                        className="flex h-5 w-5 items-center justify-center overflow-hidden">
                                                        {icon}
                                                    </div>
                                                    <div
                                                        className="relative line-clamp-1 block max-w-[150px] overflow-hidden truncate">{name}</div>
                                                </div>
                                            </div>
                                        </li>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                    <div className={"flex items-center gap-2 "}>
                        <div>
                            <Notification notify={data}/>
                        </div>

                        <div
                            id="dropDown"
                            className="flex z-10  hover:bg-gray-100 p-1 rounded-full relative"
                            onClick={() => setShowDropdown(!showDropdown)}

                        >
                            <button className="h-9 p-0.5 flex items-center rounded-full focus:outline-none">
                               < AccountCircleIcon/>

                            </button>


                            <div className="w-10 bg-gray-100 flex items-center justify-center relative rounded-full">
                                <ArrowCircleDownIcon/>
                            </div>


                            {showDropdown && (
                                <div className="absolute top-full right-0 mt-1 bg-white shadow-md rounded-md">
                                    <button
                                        className="cursor-pointer flex z-20 w-full py-2 px-4 text-left text-gray-800 hover:bg-gray-200"
                                        onClick={handleLogout}
                                    >
                                        <LogoutIcon color={"error"}/> Logout
                                    </button>
                                </div>
                            )}
                        </div>
                    </div>
                </div>
                <div className={"h-full w-full overflow-hidden"}>
                    <div className={"relative h-full w-full overflow-x-hidden overflow-y-scroll"}>
                        <div
                            className={"space-y-7 p-7 bg-zinc-90 h-full w-full flex flex-col overflow-y-auto vertical-scrollbar scrollbar-lg"}>

                            <Outlet/>

                        </div>
                    </div>
                </div>
            </main>
        </section>
    </>)
}

export default DashboardeLayout
