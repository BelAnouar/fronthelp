import './App.css'
import {useStateContext} from './context/contextProvider'
import {Navigate} from 'react-router-dom'

import WidgetsIcon from '@mui/icons-material/Widgets';
import KeyboardBackspaceIcon from '@mui/icons-material/KeyboardBackspace';
import Barchart from "./components/Barchart.jsx";


function App() {


    const {user, token} = useStateContext();

    if (!token) {
        return <Navigate to={'/login'}/>
    }


    return (<>

            <section className="text-gray-800 font-inter">
                <div
                    className="fixed left-0 top-0 w-64 h-full bg-gray-100/5 p-4 z-50 sidebar-menu border shadow-xl transition-transform">

                    <a href="#" className="flex items-center pb-4 border-b border-b-gray-800">
                        <img src="https://placehold.co/32x32" alt="" className="w-8 h-8 rounded object-cover"/>
                        <span className="text-lg font-bold text-white ml-3">Logo</span>
                    </a>
                    <ul className="mt-4">
                        <li className="mb-1 group active">
                            <a href="#"
                               className="flex items-center py-2 px-4 text-gray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                                <WidgetsIcon/>
                                <span className="text-sm">Dashboard</span>
                            </a>
                        </li>
                        <li className="mb-1 group">
                            <a href="#"
                               className="flex items-center py-2 px-4 text-gray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                                <i className="ri-instance-line mr-3 text-lg"></i>
                                <span className="text-sm">Orders</span>

                            </a>
                            <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                                <li className="mb-4">
                                    <a href="#"
                                       className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Active
                                        order</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#"
                                       className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Completed
                                        order</a>
                                </li>
                                <li className="mb-4">
                                    <a href="#"
                                       className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Canceled
                                        order</a>
                                </li>
                            </ul>
                        </li>
                        <li className="mb-1 group">
                            <a href="#"
                               className="flex items-center py-2 px-4 text-gray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100 sidebar-dropdown-toggle">
                                <i className="ri-flashlight-line mr-3 text-lg"></i>
                                <span className="text-sm">Services</span>
                                <i className="ri-arrow-right-s-line ml-auto group-[.selected]:rotate-90"></i>
                            </a>
                            <ul className="pl-7 mt-2 hidden group-[.selected]:block">
                                <li className="mb-4">
                                    <a href="#"
                                       className="text-gray-300 text-sm flex items-center hover:text-gray-100 before:contents-[''] before:w-1 before:h-1 before:rounded-full before:bg-gray-300 before:mr-3">Manage
                                        services</a>
                                </li>
                            </ul>
                        </li>
                        <li className="mb-1 group">
                            <a href="#"
                               className="flex items-center py-2 px-4 text-gray-300 hover:bg-teal-950 hover:text-gray-100 rounded-md group-[.active]:bg-teal-800 group-[.active]:text-white group-[.selected]:bg-teal-950 group-[.selected]:text-gray-100">
                                <i className="ri-settings-2-line mr-3 text-lg"></i>
                                <span className="text-sm">Settings</span>
                            </a>
                        </li>
                    </ul>
                </div>
                <div className="fixed top-0 left-0 w-full h-full bg-black/50 z-40 md:hidden sidebar-overlay"></div>
                <main className="w-full md:w-[calc(100%-256px)] md:ml-64 bg-gray-50 min-h-screen transition-all main">
                    <div
                        className="py-2 px-6 bg-white flex justify-between items-center shadow-md shadow-black/5 sticky top-0 left-0 z-30">
                        <div className={"flex items-center gap-1"}>
                            <button type="button"
                                    className="text-lg text-gray-600 border px-2 pb-1 rounded-lg  sidebar-toggle">
                                <KeyboardBackspaceIcon stroke={"currentColor"} viewBox="0 0 24 24"

                                                       fontSize="small"/>
                            </button>

                            <div
                                className="flex w-full flex-grow items-center gap-2 overflow-ellipsis whitespace-nowrap">
                                <div
                                    className="w-7 h-7 flex-shrink-0 rounded flex justify-center items-center bg-zinc-80 transition-all hover:bg-zinc-90 cursor-pointer group md:hidden">
                                    <svg xmlns="http://www.w3.org/2000/svg" width="14" height="14" viewBox="0 0 24 24"
                                         fill="none" stroke="currentColor" stroke-width="2" stroke-linecap="round"
                                         stroke-linejoin="round"
                                         className="lucide lucide-menu text-custom-text-200 group-hover:text-custom-text-100 transition-all">
                                        <line x1="4" x2="20" y1="12" y2="12"></line>
                                        <line x1="4" x2="20" y1="6" y2="6"></line>
                                        <line x1="4" x2="20" y1="18" y2="18"></line>
                                    </svg>
                                </div>
                                <div className="flex items-center justify-between w-full">
                                    <div className="flex items-center space-x-2 overflow-hidden">
                                        <div className="flex items-center gap-2.5 flex">
                                            <li className="flex items-center space-x-2" tabIndex="-1">
                                                <div className="flex flex-wrap items-center gap-2.5">
                                                    <div
                                                        className="flex cursor-default items-center gap-1 text-sm font-medium text-custom-text-100">
                                                        <div
                                                            className="flex h-5 w-5 items-center justify-center overflow-hidden">
                                                            <svg xmlns="http://www.w3.org/2000/svg" width="24"
                                                                 height="24"
                                                                 viewBox="0 0 24 24" fill="none" stroke="currentColor"
                                                                 stroke-width="2" stroke-linecap="round"
                                                                 stroke-linejoin="round"
                                                                 className="lucide lucide-bar-chart2 h-4 w-4 text-custom-text-300">
                                                                <line x1="18" x2="18" y1="20" y2="10"></line>
                                                                <line x1="12" x2="12" y1="20" y2="4"></line>
                                                                <line x1="6" x2="6" y1="20" y2="14"></line>
                                                            </svg>
                                                        </div>
                                                        <div
                                                            className="relative line-clamp-1 block max-w-[150px] overflow-hidden truncate">Analytics
                                                        </div>
                                                    </div>
                                                </div>
                                            </li>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                        <div>
                            j
                        </div>
                    </div>
                    <div className={"h-full w-full overflow-hidden"}>
                        <div className={"relative h-full w-full overflow-x-hidden overflow-y-scroll"}>
                            <div
                                className={"space-y-7 p-7 bg-zinc-90 h-full w-full flex flex-col overflow-y-auto vertical-scrollbar scrollbar-lg"}>

                                <div><h3 className="text-xl font-semibold">Good afternoon, May belhassan</h3>
                                    <h6 className="flex items-center gap-2 font-medium text-zinc-400">
                                        <div>🌥️</div>
                                        <div>Tuesday, Mar 19 15:28</div>
                                    </h6>
                                </div>


                                <div className={"grid lg:grid-cols-2 gap-7"}>
                                    <div className="lg:col-span-2">
                                        <div
                                            className="bg-zinc-100 rounded-xl border-[0.5px] border-custom-border-200 w-full grid lg:grid-cols-4 md:grid-cols-2 sm:grid-cols-2 grid-cols-2  p-0.5 hover:shadow-4xl duration-300 [&amp;>div>a>div]:border-r [&amp;>div:last-child>a>div]:border-0 [&amp;>div>a>div]:border-custom-border-200 [&amp;>div:nth-child(2)>a>div]:border-0 [&amp;>div:nth-child(2)>a>div]:lg:border-r ">
                                            <div
                                                className="w-full flex flex-col gap-2 hover:bg-zinc-80 rounded-tl-xl lg:rounded-l-xl">
                                                <a className="py-4 duration-300 rounded-[10px] w-full "
                                                   href="/quis-magnirem-labor/workspace-views/assigned">
                                                    <div
                                                        className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                                                        <div><h5 className="font-semibold text-xl">0</h5><p
                                                            className="text-custom-text-300 text-sm xl:text-base">Issues
                                                            assigned</p></div>
                                                    </div>
                                                </a></div>
                                            <div
                                                className="w-full flex flex-col gap-2 hover:bg-zinc-80 rounded-tr-xl lg:rounded-[0px]">
                                                <a className="py-4 duration-300 rounded-[10px] w-full "
                                                   href="/quis-magnirem-labor/workspace-views/assigned?state_group=backlog,unstarted,started&amp;target_date=2024-03-19;before">
                                                    <div
                                                        className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                                                        <div><h5 className="font-semibold text-xl">0</h5><p
                                                            className="text-custom-text-300 text-sm xl:text-base">Issues
                                                            overdue</p></div>
                                                    </div>
                                                </a></div>
                                            <div
                                                className="w-full flex flex-col gap-2 hover:bg-zinc-80 rounded-bl-xl lg:rounded-[0px]">
                                                <a className="py-4 duration-300 rounded-[10px] w-full "
                                                   href="/quis-magnirem-labor/workspace-views/created">
                                                    <div
                                                        className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                                                        <div><h5 className="font-semibold text-xl">0</h5><p
                                                            className="text-custom-text-300 text-sm xl:text-base">Issues
                                                            created</p></div>
                                                    </div>
                                                </a></div>
                                            <div
                                                className="w-full flex flex-col gap-2 hover:bg-zinc-80 rounded-xl lg:rounded-r-xl">
                                                <a className="py-4 duration-300 rounded-[10px] w-full "
                                                   href="/quis-magnirem-labor/workspace-views/assigned?state_group=completed">
                                                    <div
                                                        className="relative flex pl-10 sm:pl-20 md:pl-20 lg:pl-20 items-center">
                                                        <div><h5 className="font-semibold text-xl">0</h5><p
                                                            className="text-custom-text-300 text-sm xl:text-base">Issues
                                                            completed</p></div>
                                                    </div>
                                                </a></div>
                                        </div>
                                    </div>

                                <Barchart/>
                                </div>
                            </div>
                        </div>
                    </div>
                </main>
            </section>
        </>)
}

export default App
