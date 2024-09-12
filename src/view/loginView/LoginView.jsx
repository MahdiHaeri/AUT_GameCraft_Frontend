import {Col, Flex, Row, theme, Typography} from "antd";
import {LoginForm} from "./component/LoginForm.jsx";
import logo from "../../assets/svg/dark-3d.svg";
import {useTranslation} from "react-i18next";

const {useToken} = theme

export function LoginView() {
    const {token} = useToken()
    const {t} = useTranslation()

    return (
        <Flex style={{padding: '1rem', width: '100%', height: '100%'}}>
            <Row style={{height: '100%', width: '100%'}}>
                <Col
                    span={24}
                    order={2}
                    md={{span: 12, order: 1}}
                >
                    <Flex
                        align={"center"}
                        justify={"center"}
                        style={{width: '100%', height: '100%'}}>
                        <LoginForm/>
                    </Flex>
                </Col>
                <Col
                    span={0}
                    order={1}
                    md={{span: 12, order: 2}}
                >
                    <Flex
                        vertical
                        align={"center"}
                        justify={"center"}
                        style={{height: '100%', width: '100%'}}
                        gap={1}
                    >
                        <Typography.Title style={{color: token.colorAction, fontWeight: 'bolder'}}>
                            {t('app.auth.login')}
                        </Typography.Title>
                        <img src={logo} alt={'logo'} width={'auto'} height={'100px'}/>
                    </Flex>
                </Col>
            </Row>
        </Flex>
    )
}
