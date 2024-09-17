import {Button, Col, Flex, Row, theme, Typography} from "antd";
import {TeamMemberCard} from "./TeamMemberCard.jsx";
import {UserAddOutlined} from "@ant-design/icons";
import CrownBadge from "./CrownBadge.jsx";

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
            }}
            gap={"small"}
        >
            <Row
                align={"middle"}
                justify={"center"}
                style={{width: '100%'}}
                gutter={[16, 16]}
            >
                <Col span={24}>
                    <Typography.Title level={4} style={{marginBottom: '1.5rem'}}>
                        افراد تیم
                    </Typography.Title>
                </Col>
                {[1, 2, 3, 4].map((item, index) => (
                    <Col key={item} span={24} sm={12} lg={8}>
                        <TeamMemberCard isHead={index === 0}/>
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