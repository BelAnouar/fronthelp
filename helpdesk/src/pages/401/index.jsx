import {Link} from "react-router-dom";


const Page401 = () => {
    return (
        <div className="flex items-center justify-center min-h-screen bg-gray-100">
            <div className="max-w-lg p-8 bg-white rounded-lg shadow-lg">
                <div className="flex flex-col items-center">
                    <svg
                        className="w-20 h-20 mb-6 text-red-600"
                        fill="none"
                        stroke="currentColor"
                        viewBox="0 0 24 24"
                        xmlns="http://www.w3.org/2000/svg"
                    >
                        <path
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            strokeWidth={2}
                            d="M12 8v4m0 4h.01M21 12a9 9 0 11-18 0 9 9 0 0118 0z"
                        />
                    </svg>
                    <h2 className="text-3xl font-bold text-gray-800 mb-4">Unauthorized Access</h2>
                    <p className="text-lg text-gray-600 text-center mb-8">
                        You do not have permission to access this page. If you believe this is an error, please contact the site administrator.
                    </p>
                    <div className="flex justify-center">
                        <Link
                            to="/"
                            className="px-6 py-3 bg-red-600  rounded-md shadow-md hover:bg-red-700 transition duration-300 mr-4"
                        >
                            Go Back Home
                        </Link>

                    </div>
                </div>
            </div>
        </div>
    );
};

export default Page401;
