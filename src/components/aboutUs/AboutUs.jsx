import {Button, Col, Flex, Row, theme, Typography} from "antd";
import autGameCraftLogo from '/src/assets/images/logo/folan.png'
import {useNavigate} from "react-router";
import ROUTES from "../../config/routes.js";
import {useTranslation} from "react-i18next";

const {useToken} = theme

export function AboutUs({padding, backgroundColor}) {
    const {token} = useToken();
    const navigate = useNavigate()
    const {t} = useTranslation()

    return (
        <Flex
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                padding: padding,
                backgroundColor: backgroundColor,
            }}
        >
            <Row align={"middle"} justify={"space-around"} style={{width: '100%'}}>
                <Col span={24} lg={12}>
                    <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}} gap={"small"}>
                        <Flex vertical align={"start"} justify={"center"} style={{width: '100%'}}>
                            <Typography.Title level={1} style={{margin: '0px', fontWeight: 'bolder'}}>
                                {t('app.aboutUs.title')}
                            </Typography.Title>
                            <Typography.Title level={4} style={{margin: '0px'}}>
                                {t('app.aboutUs.description')}
                            </Typography.Title>
                        </Flex>
                        <Button
                            type={"primary"}
                            size={"large"}
                            style={{backgroundColor: token.colorAction}}
                            onClick={() => navigate(ROUTES.STAFFS)}
                        >
                            {t('button.staffs')}
                        </Button>
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
