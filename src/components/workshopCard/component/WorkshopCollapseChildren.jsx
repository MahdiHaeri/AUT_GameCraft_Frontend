import {Col, Flex, Row, Typography} from "antd";
import {StaffCard} from "/src/view/StaffView/component/StaffCard.jsx";

export function WorkshopCollapseChildren() {
    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{width: '100%'}}
            gap={"small"}
        >
            <Flex
                vertical
                align={"start"}
                justify={"center"}
                style={{
                    width: '100%'
                }}
                gap={"small"}
            >
                <Typography.Paragraph>
                    Description: Lorem ipsum dolor sit amet, consectetur adipisicing elit. Accusantium aliquid,
                    asperiores beatae blanditiis distinctio enim eum excepturi exercitationem expedita, itaque maxime
                    nam praesentium, quidem repellat reprehenderit rerum sed sint voluptas?
                </Typography.Paragraph>
                <Typography.Text>
                    Time of Workshop 6:00 to 9:00
                </Typography.Text>
                <Typography.Text>
                    Const: 100000$
                </Typography.Text>
            </Flex>
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                style={{width: '100%'}}
                gap={"small"}
            >
                <Typography.Title level={2}>
                    Presenters
                </Typography.Title>
                <Row
                    align={"middle"}
                    justify={"center"}
                    gutter={[16, 16]}
                    style={{
                        width: '100%',
                    }}
                >
                    <Col span={24} sm={12} md={8} lg={6} xxl={4}>
                        <StaffCard staff={
                            {
                                imageUrl: 'https://avatar.iran.liara.run/public/1',
                                name: 'John Doe',
                                role: 'Project Manager'
                            }
                        }/>
                    </Col>
                    <Col span={24} sm={12} md={8} lg={6} xxl={4}>
                        <StaffCard staff={
                            {
                                imageUrl: 'https://avatar.iran.liara.run/public/1',
                                name: 'John Doe',
                                role: 'Project Manager'
                            }
                        }/>
                    </Col>
                    <Col span={24} sm={12} md={8} lg={6} xxl={4}>
                        <StaffCard staff={
                            {
                                imageUrl: 'https://avatar.iran.liara.run/public/1',
                                name: 'John Doe',
                                role: 'Project Manager'
                            }
                        }/>
                    </Col>

                </Row>
            </Flex>
        </Flex>
    )
}
