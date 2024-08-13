import {Col, Flex, Layout, Row, Grid, Typography} from "antd";
import backgroundImage from '/src/assets/svg/pattern.svg'
import {theme} from "antd";
import {LoginForm} from "./component/LoginForm.jsx";
import logo from '/src/assets/svg/dark-3d.svg'

const {useToken} = theme
const {useBreakpoint} = Grid;


export function LoginPage() {
    const {token} = useToken()
    const screens = useBreakpoint()

    return (
        <Layout
            style={{
                height: '100vh',
                width: "auto",
                backgroundImage: `url(${backgroundImage})`,
                backgroundColor: token.colorPrimary
            }}
        >
            <Row style={{height: '100%'}}>
                <Col
                    span={24}
                    order={2}
                    md={{span: 12, order: 1}}
                    style={{
                        ...(screens.md ? {height: '100%'} : {height: '80%'})
                    }}
                >
                    <Flex align={"center"} justify={"center"} style={{width: '100%', height: '100%', padding: '1rem'}}>
                        <LoginForm/>
                    </Flex>
                </Col>
                <Col
                    span={24}
                    order={1}
                    md={{span: 12, order: 2}}
                    style={{
                        ...(screens.md ? {height: '100%'} : {height: '20%'})
                    }}
                >
                    <Flex
                        vertical
                        align={"center"}
                        justify={"center"}
                        style={{height: '100%', width: '100%', padding: '1rem'}}
                        gap={1}
                    >
                        <Typography.Title style={{color: token.colorAction, fontWeight: 'bolder'}}> Login </Typography.Title>
                        <img src={logo} alt={'logo'} width={'auto'} height={'100px'}/>
                    </Flex>
                </Col>
            </Row>
        </Layout>
    )
}
