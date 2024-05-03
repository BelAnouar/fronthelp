import {Link} from "react-router-dom";

const Header=()=>{
    return(   <header className='font-sans shadow-md'>
            <nav className="flex items-center justify-between bg-[#00bd82] text-white text-right">
                <div className="bg-[#20b486] py-4 px-8 rounded-r-full">
                    <p className="flex items-center font-medium">
                        🪄 <span className="px-2">Your first stop for seamless support and solutions – welcome to our helpdesk!</span>
                    </p>
                </div>
                <div className="px-8 py-4">
                    <p className="text-sm">

                        <span className={"px-4"}>Contact No:</span> +212 687563348 😉
                    </p>
                </div>
            </nav>

            <div
                className='relative z-10 px-6 bg-white '>
                <nav className={"flex flex-row flex-nowrap  items-center static bg-transparent h-24"}>
                    <div className={'ml-12 '}><a className={"flex items-center"}>
                        <svg width="50" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30.07 0.86C27.82 0.34 24.123 0 19.943 0C15.763 0 12.065 0.34 9.816 0.86C5.33 1.804 1.799 5.346 0.858 9.844C0.338 12.1 0 15.808 0 20C0 24.192 0.339 27.9 0.858 30.156C1.799 34.654 5.331 38.196 9.816 39.14C12.066 39.66 15.763 40 19.943 40C24.123 40 27.821 39.66 30.07 39.14C34.555 38.196 38.087 34.654 39.028 30.156C39.548 27.9 39.886 24.192 39.886 20C39.886 15.808 39.547 12.1 39.028 9.844C38.087 5.346 34.555 1.804 30.07 0.86Z"
                                fill="#00BD82"/>
                            <path
                                d="M29.7853 25.1907C29.2844 27.0876 28.0322 28.7474 26.1538 29.6959C24.9016 30.2887 23.5242 30.7629 21.8962 30.8814C21.2701 31 20.644 31 20.0179 31C18.5152 31 17.0125 30.7629 15.5098 30.4072C13.6315 29.8144 12.1288 28.9845 11.127 27.5619C10.3757 26.732 10 25.7835 10 24.835C10 23.6495 10.6261 22.5825 11.7531 22.1082C13.0054 21.5155 14.2576 21.634 15.2594 22.3454C15.8855 22.8196 16.2612 23.2938 16.6369 23.768C17.3882 24.7165 18.0143 25.1907 18.7657 25.3093C20.0179 25.5464 21.0197 25.5464 21.8962 25.0722C22.6476 24.7165 22.7728 24.3608 22.7728 24.0052C22.7728 23.768 22.7728 23.5309 22.3971 23.2938C22.1467 23.0567 21.6458 22.9381 21.1449 22.9381L20.7692 22.8196C20.1431 22.701 19.517 22.4639 18.8909 22.3454C17.6386 21.9897 16.2612 21.7526 15.0089 21.3969C13.6315 21.0412 12.3792 20.3299 11.5027 19.2629C10.5009 18.1959 10.1252 16.7732 10.1252 14.9948C10.1252 12.8608 11.0018 11.201 12.6297 10.0155C13.7567 9.18557 15.0089 8.71134 16.3864 8.35567C17.1377 8.23711 17.8891 8.11856 18.39 8.11856L18.8909 8H19.0161C22.2719 8 24.6512 8.71134 26.6547 10.0155C27.7818 10.7268 28.5331 11.6753 28.7835 12.6237C29.1592 13.6907 28.9088 14.6392 28.2826 15.3505C27.6565 16.1804 26.5295 16.5361 25.4025 16.5361C24.2755 16.5361 23.5241 15.9433 23.0233 15.4691C22.898 15.3505 22.7728 15.232 22.6476 15.1134C22.3971 14.8763 22.1467 14.6392 21.8962 14.4021C21.1449 13.8093 20.1431 13.5722 18.8909 13.6907C18.5152 13.6907 18.0143 13.8093 17.6386 14.0464C17.263 14.1649 17.1377 14.6392 17.1377 14.8763C17.1377 14.9948 17.1377 15.1134 17.5134 15.232C18.1395 15.4691 18.7657 15.7062 19.3918 15.8247C20.0179 15.9433 20.7692 16.1804 21.3953 16.299C22.3971 16.5361 23.5242 16.7732 24.5259 17.0103C26.2791 17.4845 27.6565 18.433 28.6583 19.7371C29.9106 21.2783 30.2862 23.2938 29.7853 25.1907Z"
                                fill="#FFFEFF"/>
                        </svg>
                      <div>  <span className="text-xl font-bold text-[#012635]">SupportX</span></div>
                    </a>
                    </div>
                    <div className='flex max-lg:ml-auto lg:order-1'>
                        <button id="toggle" className='lg:hidden'>
                            <svg className="w-7 h-7" fill="#000" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg">
                                <path fillRule="evenodd"
                                      d="M3 5a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 10a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1zM3 15a1 1 0 011-1h12a1 1 0 110 2H4a1 1 0 01-1-1z"
                                      clipRule="evenodd"></path>
                            </svg>
                        </button>
                    </div>
                    <ul id="collapseMenu" className="flex items-center justify-start flex-1 ml-16 space-x-6">
                        <li>
                            <Link to="/"
                               className="text-base text-lg font-normal leading-5 text-gray-700 hover:text-gray-900">Home</Link>
                        </li>

                        <li>
                            <Link to="/blog"
                               className="text-base text-lg font-normal leading-5 text-gray-700 hover:text-gray-900">Blog</Link>
                        </li>
                        <li>
                            <Link to="about"
                               className="text-base text-lg font-normal leading-5 text-gray-700 hover:text-gray-900">About</Link>
                        </li>
                        <li>
                            <Link to="contact"
                               className="text-base text-lg font-normal leading-5 text-gray-700 hover:text-gray-900">Contact</Link>
                        </li>
                    </ul>
                    <div className={"flex flex-0 items-center"}>
                        <Link to="#"
                           className="inline-block px-5 py-3 overflow-auto font-medium text-center text-white bg-green-500 rounded-full cursor-pointer whitespace-nowrap">Get
                            free access</Link>

                    </div>
                </nav>
            </div>
        </header>
    )
}



export  default Header
