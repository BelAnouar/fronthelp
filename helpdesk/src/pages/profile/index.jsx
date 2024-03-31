

import { Row, Card, Col, Button, Descriptions, Avatar, Radio, Switch } from "antd";
export default function Profile() {
    return (
        <>
            <div
                className="profile-nav-bg"
                style={{ backgroundImage: `url('https://img.freepik.com/free-photo/green-field-tree-blue-skygreat-as-backgroundweb-banner-generative-ai_1258-158277.jpg?w=1380&t=st=1711233751~exp=1711234351~hmac=adcb2f7c2ffe5491b29a04ebe07b634ac5f841f750aa2f0dfe309acc7b66ded7')` }}
            />

            <Card
                className="card-profile-head"
                bodyStyle={{ display: "none" }}
                title={
                    <Row justify="space-between" align="middle" gutter={[24, 0]}>
                        <Col span={24} md={12} className="col-info">
                            <Avatar.Group>
                                <Avatar size={74} shape="square" src="https://t3.ftcdn.net/jpg/03/80/27/88/360_F_380278806_hU362lmcYRqkb8reIageNj4Qh7ID9mIg.jpg" />
                                <div className="avatar-info">
                                    <h4 className="font-semibold m-0">Hassan Jaraf</h4>
                                    <p>Magazinier</p>
                                </div>
                            </Avatar.Group>
                        </Col>
                        <Col
                            span={24}
                            md={12}
                            style={{
                                display: "flex",
                                justifyContent: "flex-end",
                                alignItems: "center",
                            }}
                        >
                            <Radio.Group defaultValue="a">
                                <Radio.Button value="a">test</Radio.Button>
                                <Radio.Button value="a">test</Radio.Button>
                                <Radio.Button value="a">test</Radio.Button>
                            </Radio.Group>
                        </Col>
                    </Row>
                }
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
