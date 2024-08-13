import {Col, Flex, Layout, Row} from "antd";

export function LoginPage() {
    return (
        <Layout style={{height: '100vh', width: "auto"}}>
            <Row
                gutter={0}
                align={"middle"}
            >
                <Col
                    span={24}
                    md={{span: 12, order :1}}
                    xs={{span: 24, order: 2}}
                >
                    <Flex
                        align={"center"}
                        justify={"center"}
                        style={{height: '100%'}}
                    >
                        <h1>Login Form</h1>
                    </Flex>
                </Col>
                <Col
                    span={24}
                    md={{span: 12, order: 2}}
                    xs={{span: 24, order: 1}}
                >
                    <Flex
                        align={"center"}
                        justify={"center"}
                        style={{height: '100%'}}
                    >
                        <h1>Logo</h1>
                    </Flex>
                </Col>
            </Row>
        </Layout>
    )
}
