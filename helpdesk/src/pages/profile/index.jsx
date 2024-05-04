

import { Row, Card, Col, Button, Descriptions } from "antd";
import {ErrorMessage, Field, Form, Formik} from "formik";
import {useDispatch, useSelector} from "react-redux";
import {fetchUserInfo, selectUserInfo} from "../../redux/features/userSlice.js";
import {useMutation} from "@tanstack/react-query";
import axiosClient from "../../apis/apiCient.js";
import {toast} from "react-toastify";
export default function Profile() {

    const userInfo = useSelector(selectUserInfo);
    const dispatch=useDispatch();

    const initialValues = {
        firstName: userInfo.name.split(' ')[0] || '',
        surname: userInfo.name.split(' ')[1] || '',
        email: userInfo.email || '',
        nationalCode: userInfo.nationalCode || '',
        phoneNumber: userInfo.phone_number || '',
        dateOfBirth: userInfo.date_of_birth || '',
    };


    const { mutate: updateUser } = useMutation({
        mutationFn: async ({values, id}) => axiosClient.put(`/user-profile/${id}`,values)  ,
        onSuccess: () => {
            toast.success("Profile updated!");
            dispatch(fetchUserInfo());
        },

    });
    const handleSubmit = async (values, { setSubmitting }) => {
        try {
            await updateUser({ values, id: userInfo.id });

        } catch (error) {
            toast.error("An error occurred while updating the profile!");
        }
        setSubmitting(false);
    };

    return (
        <>

            <div className="flex flex-col items-center justify-center -m-[28px] ">
                <div className="w-full  mx-auto bg-white  shadow-md">
                    <div className="relative"> <img
                        src="https://images.unsplash.com/photo-1507525428034-b723cf961d3e?ixlib=rb-1.2.1&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=1170&q=80"
                        alt="Background image" className="w-full h-40  object-cover"/>

                        <img src="/images/Ellipse.png" alt="Profile picture"
                             className="w-32 h-32 rounded-full absolute -bottom-[44%] border-solid border-4 border-[#26B893] border-opacity-50 border-10 left-10"/>
                    </div>
                    <div className="p-4 ml-44">
                        <div className="flex items-center justify-between">
                            <div className="flex items-center">
                                <div className="text-lg font-semibold text-gray-700">{userInfo.name}</div>
                            </div>

                        </div>
                        <div className="mt-1">
                            <p className="text-sm text-gray-500">Your account is ready, you can now apply for
                                advice.</p>
                        </div>
                    </div>
                </div>
            </div>


            <div
                className="profile-nav-bg"
            />


            <Row gutter={[24, 0]}>
                <Col span={24} md={18} className="mb-24">
                    <Card
                        bordered={false}
                        className="header-solid h-full"
                        title={<h6 className="font-semibold m-0">Edit Profile</h6>}
                    >
                        <Formik
                            initialValues={initialValues}

                            onSubmit={handleSubmit}
                        >
                            {({ isSubmitting }) => (
                                <Form>
                                    <div className="px-6 py-4">
                                        <h1 className="text-2xl font-bold text-gray-800 mb-4">Edit Profile</h1>
                                        <div className="grid grid-cols-2 gap-4">
                                            <div>
                                                <label htmlFor="firstName" className="block text-gray-700 font-medium">First Name</label>
                                                <Field type="text" id="firstName" name="firstName" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                                <ErrorMessage name="firstName" component="div" className="text-red-600" />
                                            </div>
                                            <div>
                                                <label htmlFor="surname" className="block text-gray-700 font-medium">Surname</label>
                                                <Field type="text" id="surname" name="surname" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                                <ErrorMessage name="surname" component="div" className="text-red-600" />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="email" className="block text-gray-700 font-medium">Email</label>
                                            <Field type="email" id="email" name="email" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" disabled />
                                            <ErrorMessage name="email" component="div" className="text-red-600" />
                                        </div>
                                        <div className="grid grid-cols-2 gap-4 mt-4">
                                            <div>
                                                <label htmlFor="nationalCode" className="block text-gray-700 font-medium">National Code</label>
                                                <Field type="text" id="nationalCode" name="nationalCode" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                                <ErrorMessage name="nationalCode" component="div" className="text-red-600" />
                                            </div>
                                            <div>
                                                <label htmlFor="phoneNumber" className="block text-gray-700 font-medium">Phone Number</label>
                                                <Field type="tel" id="phoneNumber" name="phoneNumber" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                                <ErrorMessage name="phoneNumber" component="div" className="text-red-600" />
                                            </div>
                                        </div>
                                        <div className="mt-4">
                                            <label htmlFor="dateOfBirth" className="block text-gray-700 font-medium">Date of Birth</label>
                                            <Field type="date" id="dateOfBirth" name="dateOfBirth" className="w-full px-3 py-2 border border-gray-300 rounded-lg focus:outline-none focus:border-blue-500" />
                                            <ErrorMessage name="dateOfBirth" component="div" className="text-red-600" />
                                        </div>
                                        <div className="mt-6">
                                            <button type="submit" disabled={isSubmitting} className="bg-green-500 hover:bg-green-600 text-white font-medium py-2 px-4 rounded-lg w-full">
                                                {isSubmitting ? 'Saving...' : 'Save'}
                                            </button>
                                        </div>
                                    </div>
                                </Form>
                            )}
                        </Formik>
                    </Card>
                </Col>
                <Col span={24} md={6} className="mb-24">
                    <Card
                        bordered={false}
                        title={<h6 className="font-semibold m-0">Profile Information</h6>}
                        className="header-solid h-full card-profile-information"

                        bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
                    >

                        <Descriptions title="personal data">
                            <Descriptions.Item label="Full Name" span={3}>
                                {userInfo.name}
                            </Descriptions.Item>
                            <Descriptions.Item label="Mobile" span={3}>
                                {userInfo.phone_number}
                            </Descriptions.Item>
                            <Descriptions.Item label="Email" span={3}>
                                {userInfo.email}
                            </Descriptions.Item>


                        </Descriptions>
                    </Card>
                </Col>


            </Row>



        </>
    );
}
