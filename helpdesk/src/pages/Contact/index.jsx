import FacebookIcon from '@mui/icons-material/Facebook';
import XIcon from '@mui/icons-material/X';
import InstagramIcon from '@mui/icons-material/Instagram';
const Contact = () => {
    return (<>

            <main className={"bg-[#f7f8fc] "}>
                <setion className="bg-gray-100">
                <div className=" mx-auto py-8 px-2 sm:px-2 lg:px-4">
                    <h1 className="text-3xl capitalize font-semibold text-green-700 text-center py-8">We're here to help.</h1>
                    <div className="mx-auto grid grid-cols-1 px-16 lg:grid-cols-2  gap-8">
                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-4">
                                <h2 className="text-lg font-semibold mb-2">Sales</h2>
                                <p className="text-gray-700 text-sm">Already a customer? Get world-class support from
                                    our dedicated customer service team.</p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50">
                                <button
                                    className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">Contact
                                    sales
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-4">
                                <h2 className="text-lg font-semibold mb-2">Customer Support</h2>
                                <p className="text-gray-700 text-sm">Already a customer? Get world-class support from
                                    our dedicated customer service team.</p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50">
                                <button className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">Chat
                                    to support
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-4">
                                <h2 className="text-lg font-semibold mb-2">Partnerships</h2>
                                <p className="text-gray-700 text-sm">Get in touch with our Partnerships team to learn
                                    more.</p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50">
                                <button
                                    className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">Contact
                                    partnerships
                                </button>
                            </div>
                        </div>

                        <div className="bg-white rounded-lg shadow-md overflow-hidden">
                            <div className="px-6 py-4">
                                <h2 className="text-lg font-semibold mb-2">Media Inquiries</h2>
                                <p className="text-gray-700 text-sm">If you want to write something about us, reach out
                                    to our PR team today.</p>
                            </div>
                            <div className="px-6 py-4 bg-gray-50">
                                <button
                                    className="bg-green-700 text-white px-4 py-2 rounded-md hover:bg-green-800">Speak to
                                    PR
                                </button>
                            </div>
                        </div>
                    </div>
                </div>
                </setion>
                <section className=" w-[90%] p-4 mx-auto  bg-white rounded-lg shadow-lg overflow-hidden">
                    <dev
                        className="relative z-10 overflow-hidden   py-20 lg:py-[120px]"
                    >
                        <div className="container mx-auto">
                            <div className="flex flex-wrap items-center -mx-4 lg:justify-between">
                                <div className="px-8 py-10 w-1/2">
                                    <h4 type="headline_m" color="purple_base" className="py-3 text-semibold text-purple-700">CONTACT
                                        US</h4>
                                    <h1 className=" text-5xl font-bold text-purple-700 mb-6">We'd love to <span
                                        className="text-purple-400">hear from you.</span></h1>
                                    <p className="text-gray-600 mb-8">While we're good with smoke signals, there are easier ways
                                        to get in touch.</p>
                                    <div className="flex justify-center mb-10">
                                        <img src="https://carrier.formcarry.com/website-assets/sumbul_contact@2x.png" width="138" alt="Contact Us!"/>
                                    </div>
                                    <div className="flex space-x-4 justify-center mb-10">
                                        <a href="#" className="text-purple-700 hover:text-purple-500">
                                            <FacebookIcon/>
                                        </a>
                                        <a href="#" className="text-purple-700 hover:text-purple-500">
                                           <XIcon/>
                                        </a>
                                        <a href="#" className="text-purple-700 hover:text-purple-500">
                                            <InstagramIcon/>
                                        </a>
                                    </div>
                                </div>
                                <div className="w-full px-4 lg:w-1/2 xl:w-5/12">
                                    <div
                                        className="relative p-8 rounded-lg border shadow-lg  sm:p-12"
                                    >
                                        <form className="grid grid-cols-1 gap-6" action="#" method="post"><label
                                            className="block"><label
                                            className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                            data-nc-id="Label">Full name</label><input type="text"
                                                                                       className="block w-full
                                                                           border border-gray-600 outline-0 text-white  dark:bg-transparent focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                                                       placeholder="Example Doe"/></label><label
                                            className="block"><label
                                            className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                            data-nc-id="Label">Email address</label><input type="email"
                                                                                           className="block w-full
                                                                                border border-gray-600 outline-0 text-white  dark:bg-transparent focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 rounded-2xl text-sm font-normal h-11 px-4 py-3 mt-1"
                                                                                           placeholder="example@example.com"/></label><label
                                            className="block"><label
                                            className="nc-Label text-sm font-medium text-neutral-700 dark:text-neutral-300 "
                                            data-nc-id="Label">Message</label><textarea
                                            className="block border border-gray-600 outline-0 text-white  dark:bg-transparent w-full text-sm rounded-2xl px-4 py-2  focus:border-primary-300 focus:ring focus:ring-primary-200 focus:ring-opacity-50 bg-white dark:border-neutral-700 dark:focus:ring-primary-6000 dark:focus:ring-opacity-25 dark:bg-neutral-900 mt-1"
                                            rows="6"></textarea></label>
                                            <div bis_skin_checked="1">
                                                <button
                                                    className="nc-Button relative h-auto inline-flex items-center justify-center rounded-full transition-colors text-sm sm:text-base font-medium px-4 py-3 sm:px-6  ttnc-ButtonPrimary  disabled:bg-opacity-70 bg-primary-6000 hover:bg-primary-700 text-neutral-50 bg-[#4F46E5] focus:outline-none focus:ring-2 focus:ring-offset-2 focus:ring-primary-6000 dark:focus:ring-offset-0"
                                                    type="submit">Send Message
                                                </button>
                                            </div>
                                        </form>

                                    </div>
                                </div>
                            </div>
                        </div>
                    </dev>
                </section>


            </main>
        </>
    )
}


export default Contact
