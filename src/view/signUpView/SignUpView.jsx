import {Col, Flex, Row, theme, Typography} from "antd";
import {SignUpForm} from "./component/SignUpForm.jsx";
import logo from "../../assets/svg/dark-3d.svg";
import {useTranslation} from "react-i18next";

const {useToken} = theme

export function SignUpView() {
    const {token} = useToken()
    const {t} = useTranslation()

    return (
        <Flex style={{width: '100%', height: '100%', padding: '1rem'}}>
            <Row style={{height: '100%', width: '100%'}}>
                <Col
                    span={24}
                    order={2}
                    md={{span: 12, order: 1}}
                >
                    <Flex
                        align={"center"}
                        justify={"center"}
                        style={{width: '100%', height: '100%'}}
                    >
                        <SignUpForm/>
                    </Flex>
                </Col>
                <Col
                    span={24}
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
                            {t('app.auth.signUp')}
                        </Typography.Title>
                        <img src={logo} alt={'logo'} width={'auto'} height={'100px'}/>
                    </Flex>
                </Col>
            </Row>
        </Flex>
    )
}
