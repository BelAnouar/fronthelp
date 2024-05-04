






const Footer=()=>{
    return(
        <footer className="bg-white dark:bg-[#012635] mt-6">
            <div className="max-w-screen-xl p-4 py-6 mx-auto lg:py-16 md:p-8 lg:p-10">
                <div className="text-center">
                    <a href="#"
                       className="flex items-center justify-center mb-5 text-2xl font-bold text-[#012E4A] dark:text-white">

                        <svg width="50" height="40" viewBox="0 0 40 40" fill="none" xmlns="http://www.w3.org/2000/svg">
                            <path
                                d="M30.07 0.86C27.82 0.34 24.123 0 19.943 0C15.763 0 12.065 0.34 9.816 0.86C5.33 1.804 1.799 5.346 0.858 9.844C0.338 12.1 0 15.808 0 20C0 24.192 0.339 27.9 0.858 30.156C1.799 34.654 5.331 38.196 9.816 39.14C12.066 39.66 15.763 40 19.943 40C24.123 40 27.821 39.66 30.07 39.14C34.555 38.196 38.087 34.654 39.028 30.156C39.548 27.9 39.886 24.192 39.886 20C39.886 15.808 39.547 12.1 39.028 9.844C38.087 5.346 34.555 1.804 30.07 0.86Z"
                                fill="#00BD82"/>
                            <path
                                d="M29.7853 25.1907C29.2844 27.0876 28.0322 28.7474 26.1538 29.6959C24.9016 30.2887 23.5242 30.7629 21.8962 30.8814C21.2701 31 20.644 31 20.0179 31C18.5152 31 17.0125 30.7629 15.5098 30.4072C13.6315 29.8144 12.1288 28.9845 11.127 27.5619C10.3757 26.732 10 25.7835 10 24.835C10 23.6495 10.6261 22.5825 11.7531 22.1082C13.0054 21.5155 14.2576 21.634 15.2594 22.3454C15.8855 22.8196 16.2612 23.2938 16.6369 23.768C17.3882 24.7165 18.0143 25.1907 18.7657 25.3093C20.0179 25.5464 21.0197 25.5464 21.8962 25.0722C22.6476 24.7165 22.7728 24.3608 22.7728 24.0052C22.7728 23.768 22.7728 23.5309 22.3971 23.2938C22.1467 23.0567 21.6458 22.9381 21.1449 22.9381L20.7692 22.8196C20.1431 22.701 19.517 22.4639 18.8909 22.3454C17.6386 21.9897 16.2612 21.7526 15.0089 21.3969C13.6315 21.0412 12.3792 20.3299 11.5027 19.2629C10.5009 18.1959 10.1252 16.7732 10.1252 14.9948C10.1252 12.8608 11.0018 11.201 12.6297 10.0155C13.7567 9.18557 15.0089 8.71134 16.3864 8.35567C17.1377 8.23711 17.8891 8.11856 18.39 8.11856L18.8909 8H19.0161C22.2719 8 24.6512 8.71134 26.6547 10.0155C27.7818 10.7268 28.5331 11.6753 28.7835 12.6237C29.1592 13.6907 28.9088 14.6392 28.2826 15.3505C27.6565 16.1804 26.5295 16.5361 25.4025 16.5361C24.2755 16.5361 23.5241 15.9433 23.0233 15.4691C22.898 15.3505 22.7728 15.232 22.6476 15.1134C22.3971 14.8763 22.1467 14.6392 21.8962 14.4021C21.1449 13.8093 20.1431 13.5722 18.8909 13.6907C18.5152 13.6907 18.0143 13.8093 17.6386 14.0464C17.263 14.1649 17.1377 14.6392 17.1377 14.8763C17.1377 14.9948 17.1377 15.1134 17.5134 15.232C18.1395 15.4691 18.7657 15.7062 19.3918 15.8247C20.0179 15.9433 20.7692 16.1804 21.3953 16.299C22.3971 16.5361 23.5242 16.7732 24.5259 17.0103C26.2791 17.4845 27.6565 18.433 28.6583 19.7371C29.9106 21.2783 30.2862 23.2938 29.7853 25.1907Z"
                                fill="#FFFEFF"/>
                        </svg>
                        <div>  <span className="text-2xl font-bold ">SupportX</span></div>

                    </a>
                    <span className="block text-sm text-center text-gray-500 dark:text-gray-400">© 2024 SwiftGoals, Inc. All Rights Reserved.
      </span>
                    <ul className="flex justify-center mt-5 space-x-5">
                        <li>
                            <a href="#"
                               className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M12 2C6.477 2 2 6.484 2 12.017c0 4.425 2.865 8.18 6.839 9.504.5.092.682-.217.682-.483 0-.237-.008-.868-.013-1.703-2.782.605-3.369-1.343-3.369-1.343-.454-1.158-1.11-1.466-1.11-1.466-.908-.62.069-.608.069-.608 1.003.07 1.531 1.032 1.531 1.032.892 1.53 2.341 1.088 2.91.832.092-.647.35-1.088.636-1.338-2.22-.253-4.555-1.113-4.555-4.951 0-1.093.39-1.988 1.029-2.688-.103-.253-.446-1.272.098-2.65 0 0 .84-.27 2.75 1.026A9.564 9.564 0 0112 6.844c.85.004 1.705.115 2.504.337 1.909-1.296 2.747-1.027 2.747-1.027.546 1.379.202 2.398.1 2.651.64.7 1.028 1.595 1.028 2.688 0 3.848-2.339 4.695-4.566 4.943.359.309.678.92.678 1.855 0 1.338-.012 2.419-.012 2.747 0 .268.18.58.688.482A10.019 10.019 0 0022 12.017C22 6.484 17.522 2 12 2z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path
                                        d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"/>
                                </svg>
                            </a>
                        </li>
                        <li>
                            <a href="#"
                               className="text-gray-500 hover:text-gray-900 dark:hover:text-white dark:text-gray-400">
                                <svg className="w-5 h-5" fill="currentColor" viewBox="0 0 24 24" aria-hidden="true">
                                    <path fill-rule="evenodd"
                                          d="M22 12c0-5.523-4.477-10-10-10S2 6.477 2 12c0 4.991 3.657 9.128 8.438 9.878v-6.987h-2.54V12h2.54V9.797c0-2.506 1.492-3.89 3.777-3.89 1.094 0 2.238.195 2.238.195v2.46h-1.26c-1.243 0-1.63.771-1.63 1.562V12h2.773l-.443 2.89h-2.33v6.988C18.343 21.128 22 16.991 22 12z"
                                          clip-rule="evenodd"/>
                                </svg>
                            </a>
                        </li>
                    </ul>
                </div>
            </div>
        </footer>
    )
}



export  default Footer
