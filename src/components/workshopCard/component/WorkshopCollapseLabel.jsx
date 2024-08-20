import {Button, Col, Flex, Row, theme, Typography} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";

const {useToken} = theme

export function WorkshopCollapseLabel({isActive}) {
    const {token} = useToken()
    const {t} = useTranslation()

    return (
        <Flex align={"center"} justify={"space-between"} style={{width: '100%'}} gap={"small"}>
            <CaretRightOutlined style={{rotate: isActive ? '-90deg' : '90deg', transition: 'rotate .3s'}}/>
            <Row align={"middle"} justify={"center"} style={{width: '100%'}}>
                <Col span={24} lg={6} sm={12}>
                    <Typography.Text>
                        Workshop Title
                    </Typography.Text>
                </Col>
                <Col span={24} lg={6} sm={12}>
                    <Typography.Text>
                        Start Time
                    </Typography.Text>
                </Col>
                <Col span={24} lg={6} sm={12}>
                    <Typography.Text>
                        Capacity 10
                    </Typography.Text>
                </Col>
                <Col span={24} lg={6} sm={12}>
                    <Typography.Text>
                        Cost: 100000$
                    </Typography.Text>
                </Col>
            </Row>
            <Button
                type={"dashed"}
                style={{
                    zIndex: '100',
                }}
                onClick={(event) => {
                    event.stopPropagation()
                }}
            >
                Register
            </Button>
        </Flex>
    )
}
