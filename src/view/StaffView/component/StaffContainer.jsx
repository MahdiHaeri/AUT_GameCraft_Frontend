import {StaffCard} from "./StaffCard.jsx";
import {Col, Flex, Row, theme, Typography} from "antd";

const {useToken} = theme

export function StaffContainer() {
    const {token} = useToken()

    return (
        <Flex
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                backgroundColor: token.colorBgBase,
                borderRadius: token.borderRadius,
                padding: '3rem 3rem',
            }}
            vertical
        >
            <Typography.Title level={1} style={{fontWeight: "bolder", color: token.colorPrimary}}>Gamecraft Team</Typography.Title>
            <Typography.Title level={2} style={{fontWeight: "bolder", color: token.colorAction}}>Technical Team</Typography.Title>
            <Row
                align={"middle"}
                justify={"center"}
                gutter={[16, 16]}
            >
                {Array.from({length: 41}).map((item, index) => (
                    <Col key={index}>
                        <StaffCard key={index}/>
                    </Col>
                ))}
            </Row>
        </Flex>
    )
}
