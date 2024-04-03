const Ticketing = () => {
    return (
        <div className="relative flex-1">
            <div>
                <div className="md:flex md:items-center md:justify-between py-4">
                    <div className="flex-1 min-w-0">
                        <h1 className="py-0.5 text-2xl font-semibold text-gray-900">Tickets</h1>
                    </div>
                    <div className="mt-4 flex md:mt-0 md:ml-4">
                        <a
                            className="bg-blue-500 py-2 px-5 text-white font-semibold shadow-sm rounded-md mr-4"
                            href="/dashboard/tickets/new"
                        >
                            Create ticket
                        </a>
                    </div>
                </div>
                <div className="w-full bg-white shadow-xl rounded-lg flex  custom-scrollbar p-4">
                <div className=" " >

                    <div className="bg-gray-100 mb-6">
                        <ul>
                            <li className="flex items-center border-y hover:bg-gray-200 px-4">
                                <input type="checkbox" className="focus:ring-0 border-2 border-gray-400"/>
                                    <div className="w-full flex items-center justify-between p-1 my-1 cursor-pointer">
                                        <div className="flex items-center">

                                            <span className="w-56 pr-2 truncate">William Livingston</span>
                                            <span className="w-56 truncate">Lorem ipsum dolor sit amet</span>
                                            <span className="mx-1">-</span>
                                            <span className="w-72 text-gray-600 text-sm truncate">Sed ut perspiciatis unde ...</span>
                                        </div>
                                        <div className="w-32 flex items-center justify-end">
                                            <div x-show="messageHover" className="flex items-center space-x-2"
                                                 style={{display: "none"}}>
                                                <button title="Archive">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="text-gray-500 hover:text-gray-900 h-5 w-5"
                                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M8 4H6a2 2 0 00-2 2v12a2 2 0 002 2h12a2 2 0 002-2V6a2 2 0 00-2-2h-2m-4-1v8m0 0l3-3m-3 3L9 8m-5 5h2.586a1 1 0 01.707.293l2.414 2.414a1 1 0 00.707.293h3.172a1 1 0 00.707-.293l2.414-2.414a1 1 0 01.707-.293H20"></path>
                                                    </svg>
                                                </button>
                                                <button title="Delete">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="text-gray-500 hover:text-gray-900 h-5 w-5"
                                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M19 7l-.867 12.142A2 2 0 0116.138 21H7.862a2 2 0 01-1.995-1.858L5 7m5 4v6m4-6v6m1-10V4a1 1 0 00-1-1h-4a1 1 0 00-1 1v3M4 7h16"></path>
                                                    </svg>
                                                </button>
                                                <button title="Mark As Unread">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="text-gray-500 hover:text-gray-900 h-5 w-5"
                                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M3 8l7.89 5.26a2 2 0 002.22 0L21 8M5 19h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v10a2 2 0 002 2z"></path>
                                                    </svg>
                                                </button>
                                                <button title="Snooze">
                                                    <svg xmlns="http://www.w3.org/2000/svg"
                                                         className="text-gray-500 hover:text-gray-900 h-5 w-5"
                                                         fill="none" viewBox="0 0 24 24" stroke="currentColor">
                                                        <path stroke-linecap="round" stroke-linejoin="round"
                                                              stroke-width="2"
                                                              d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"></path>
                                                    </svg>
                                                </button>
                                            </div>
                                            <span className="text-sm text-gray-500">
                                          3:05 PM
                                            </span>
                                        </div>
                                    </div>

                            </li>


                        </ul>
                    </div>
                </div>
                </div>
            </div>
        </div>
);
}


export default Ticketing
