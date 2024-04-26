import {Button, Card, Col, Descriptions, Row} from "antd";


const UserProfile = () => {
    return (
        <>



            <Row >
                <Col  className=" w-full">
                    <Card

                    >
                        <div className="px-6 py-4">
                            <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit Profile</h1>
                            <div className="grid grid-cols-2 gap-4">
                                <div>
                                    <label htmlFor="first-name" className="block text-gray-700 font-medium">First Name</label>
                                    <input type="text" id="first-name" name="first-name" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="mobina" />
                                </div>
                                <div>
                                    <label htmlFor="surname" className="block text-gray-700 font-medium">Surname</label>
                                    <input type="text" id="surname" name="surname" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Mir" />
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                                <input type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Value" />
                            </div>
                            <div className="grid grid-cols-2 gap-4 mt-4">
                                <div>
                                    <label htmlFor="national-code" className="block text-gray-700 font-medium">National Code</label>
                                    <input type="text" id="national-code" name="national-code" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Value" />
                                </div>
                                <div>
                                    <label htmlFor="phone-number" className="block text-gray-700 font-medium">Phone Number</label>
                                    <div className="flex items-center">
                                        <span className="px-3 py-2 bg-gray-200 rounded-l-lg">+98</span>
                                        <input type="tel" id="phone-number" name="phone-number" className="w-full px-3 py-2 border border-gray-300 rounded-r-lg focus:outline-none focus:border-blue-500" placeholder="9120000000" />
                                    </div>
                                </div>
                            </div>
                            <div className="mt-4">
                                <label htmlFor="date-of-birth" className="block text-gray-700 font-medium">Date of birth</label>
                                <input type="text" id="date-of-birth" name="date-of-birth" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" placeholder="Enter Value" />
                            </div>

                            <div className="mt-6">
                                <button className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg w-full">Save</button>
                            </div>
                        </div>
                    </Card>
                </Col>

            </Row>



        </>
    )
}

export default UserProfile;
