

import { Row, Card, Col, Button, Descriptions, Avatar, Radio, Switch } from "antd";
export default function Profile() {
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
                                <div className="text-lg font-semibold text-gray-700">Mobina Mirbagheri</div>
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
                        title={<h6 className="font-semibold m-0">Platform Settings</h6>}
                    >
                        <ul className="list settings-list">
                            <li>
                                <h6 className="list-header text-sm text-muted">tasks</h6>
                            </li>
                            <li>
                                <Switch defaultChecked />
                                <span>task 1</span>
                            </li>

                        </ul>
                    </Card>
                </Col>
                <Col span={24} md={6} className="mb-24">
                    <Card
                        bordered={false}
                        title={<h6 className="font-semibold m-0">Profile Information</h6>}
                        className="header-solid h-full card-profile-information"
                        extra={
                            <Button type="link">
                               icon
                            </Button>
                        }
                        bodyStyle={{ paddingTop: 0, paddingBottom: 16 }}
                    >
                        <p className="text-dark">
                            Lorem ipsum dolor sit amet consectetur adipisicing elit. Voluptatibus sequi quasi optio perspiciatis, quaerat dolor. Dolor odit quaerat numquam vitae sequi ea ducimus nulla vel? Quos tenetur beatae deleniti! Incidunt.
                        </p>
                        <hr className="my-25" />
                        <Descriptions title="personal data">
                            <Descriptions.Item label="Full Name" span={3}>
                                Hassan Jaraf
                            </Descriptions.Item>
                            <Descriptions.Item label="Mobile" span={3}>
                                +212 687065428
                            </Descriptions.Item>
                            <Descriptions.Item label="Email" span={3}>
                                HassanJaraf@mail.com
                            </Descriptions.Item>
                            <Descriptions.Item label="Location" span={3}>
                                SAFI
                            </Descriptions.Item>

                        </Descriptions>
                    </Card>
                </Col>


            </Row>


            <Row>

            </Row>
        </>
    );
}
