const Ticketing = () => {
    return (
        <div className="relative flex-1">
            <div>
                <div className="md:flex md:items-center md:justify-between">
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
            </div>
        </div>
    );
}


export default Ticketing
