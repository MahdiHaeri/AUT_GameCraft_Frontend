import {StaffCard} from "./StaffCard.jsx";
import {Col, Flex, Row, theme, Typography} from "antd";
import {useStaffs} from '/src/config/Staffs.jsx'

const {useToken} = theme

export function StaffContainer() {
    const {token} = useToken()
    const staffs = useStaffs()

    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                backgroundColor: token.colorBgBase,
                borderRadius: token.borderRadius,
                padding: '3rem 3rem',
            }}
        >
            <Typography.Title level={1} style={{fontWeight: "bolder", color: token.colorPrimary}}>
                Gamecraft Team
            </Typography.Title>
            <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}} gap={"large"}>
                {staffs.map((team, index) => (
                    <Flex key={index} vertical align={"center"} justify={"center"} style={{width: '100%'}}>
                        <Typography.Title level={3}> {team.teamTitle}</Typography.Title>
                        <Row
                            align={"middle"}
                            justify={"center"}
                            gutter={[16, 16]}
                            style={{
                                width: '100%',
                            }}
                        >
                            {team.teamMembers.map((staff, index) => (
                                <Col key={index}>
                                    <StaffCard staff={staff}/>
                                </Col>
                            ))}
                        </Row>
                    </Flex>
                ))}
            </Flex>
        </Flex>
    )
}
