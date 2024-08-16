import {Button, Col, Flex, Row, theme, Typography} from "antd";
import autGameCraftLogo from '/src/assets/images/logo/folan.png'
import {useNavigate} from "react-router";
import ROUTES from "../../config/routes.js";

const {useToken} = theme

export function AboutUs() {
    const {token} = useToken();
    const navigate = useNavigate()

    return (
        <Flex align={"center"} justify={"center"} style={{width: '100%'}}>
            <Row align={"middle"} justify={"space-around"} style={{width: '100%'}}>
                <Col span={24} lg={12}>
                    <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}} gap={"small"}>
                        <Flex vertical align={"start"} justify={"center"} style={{width: '100%'}}>
                            <Typography.Title level={1} style={{margin: '0px', fontWeight: 'bolder'}}>
                                About us
                            </Typography.Title>
                            <Typography.Title level={4} style={{margin: '0px'}}>
                                Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores aspernatur atque culpa, cumque cupiditate, distinctio, error ipsam iste iure officiis optio sed sequi ut voluptatibus voluptatum. Ad, assumenda deleniti ea eaque fugiat fugit hic itaque laudantium magni, molestias nam natus nesciunt nobis obcaecati, omnis possimus quaerat quam quibusdam suscipit veritatis. Consectetur consequuntur debitis, earum eligendi enim eveniet hic iure quia.
                            </Typography.Title>
                        </Flex>
                        <Button type={"primary"} size={"large"} style={{backgroundColor: token.colorAction}} onClick={() => navigate(ROUTES.STAFFS)}>Staffs</Button>
                    </Flex>
                </Col>
                <Col span={24} lg={12}>
                    <Flex align={"center"} justify={"center"} style={{width: '100%'}}>
                        <img src={autGameCraftLogo} width={'50%'} height={'auto'} alt={'gamecraft-logo'}/>
                    </Flex>
                </Col>
            </Row>
        </Flex>
    )
}
