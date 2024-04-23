

const UserProfile=()=>{

    return(<>

<form className={"flex flex-col"}>
        <label htmlFor="username" className="mt-5 mb-3 text-sm font-semibold text-stone-800 max-md:max-w-full">Your
            Email</label>
        <div className="relative mx-auto w-full ">
            <input
                className="flex gap-3 pl-12 py-4 w-full bg-transparent focus:outline-none text-sm font-medium rounded-xl border border-zinc-100 text-neutral-400"
                placeholder="email@gmail.com"/>
                <i className="fa-regular fa-envelope absolute left-3.5 top-7 fa-lg text-neutral-400"></i>
        </div>
        <label htmlFor="" className="mt-5 mb-3 text-sm font-semibold text-stone-800 max-md:max-w-full">Username</label>
        <div className="relative mx-auto w-full ">
            <input
                className="flex gap-3 pl-12 py-4 w-full bg-transparent focus:outline-none text-sm font-medium rounded-xl border border-zinc-100 text-neutral-400"
                placeholder="Username"/>
                <i className="fa-solid fa-at absolute left-3.5 top-7 fa-lg text-neutral-400"></i>
        </div>
        <label htmlFor="" className="mt-5 mb-3 text-sm font-semibold text-stone-800 max-md:max-w-full">Username</label>
        <div className="relative mx-auto w-full ">
            <input
                className="flex gap-3 pl-12 py-4 w-full bg-transparent focus:outline-none text-sm font-medium rounded-xl border border-zinc-100 text-neutral-400"
                placeholder="Username"/>
                <i className="fa-solid fa-at absolute left-3.5 top-7 fa-lg text-neutral-400"></i>
        </div>
        <label htmlFor="username"
               className="mt-5 mb-3 text-sm font-semibold text-stone-800 max-md:max-w-full">Password</label>
        <div className="relative mx-auto w-full ">
            <input type="password"
                   className="flex gap-3 pl-12 py-4 w-full bg-transparent focus:outline-none text-sm font-medium rounded-xl border border-zinc-100 text-neutral-400"
                   placeholder="Your Password"/>
                <i className="fa-solid fa-lock absolute left-3.5 top-7 fa-lg text-neutral-400"></i>
        </div>
        <div
            className="flex gap-5 justify-around mt-11 text-base font-bold tracking-normal whitespace-nowrap max-md:flex-wrap max-md:mt-10 max-md:max-w-full">
            <a href="#"
               className="rounded-md w-2/6 text-center px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-white text-white hover:border-[#1C70EC] transition duration-300 ease">
                <span
                    className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-[#1C70EC] top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span className="relative text-white transition duration-300 ease">Modify</span>
            </a>
            <a href="#"
               className="rounded-md w-2/6 text-center px-3.5 py-2 m-1 overflow-hidden relative group cursor-pointer border-2 font-medium border-red-600 text-white">
                <span
                    className="absolute w-64 h-0 transition-all duration-300 origin-center rotate-45 -translate-x-20 bg-red-600 top-1/2 group-hover:h-64 group-hover:-translate-y-32 ease"></span>
                <span
                    className="relative text-red-600 transition duration-300 group-hover:text-white ease">Logout</span>
            </a>
        </div>
</form>

    </>)
}


export default UserProfile
