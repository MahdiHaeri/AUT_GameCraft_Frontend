import {Button, Col, Flex, Row, theme, Typography} from "antd";
import {TeamMemberCard} from "./TeamMemberCard.jsx";
import {UserAddOutlined} from "@ant-design/icons";

const {useToken} = theme

export function TeamMemberContainer() {
    const {token} = useToken()

    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                // backgroundColor: 'blue'
            }}
            gap={"small"}
        >
            <Typography.Title level={4}>
                افراد تیم
            </Typography.Title>
            <Row
                align={"middle"}
                justify={"center"}
                style={{width: '100%'}}
                gutter={[16, 16]}
            >
                {[1, 2, 3].map((item) => (
                    <Col key={item} span={24} sm={12} lg={8}>
                        <TeamMemberCard/>
                    </Col>
                ))}
                <Col span={24} sm={12} lg={8}>
                    <Button
                        type={"text"}
                        style={{
                            width: '100%',
                            height: '80px',
                            borderRadius: token.borderRadius,
                        }}
                        icon={
                            <UserAddOutlined style={{fontSize: "xx-large"}}/>
                        }
                    >
                        افزودن هم تیمی
                    </Button>
                </Col>
            </Row>
        </Flex>
    )
}