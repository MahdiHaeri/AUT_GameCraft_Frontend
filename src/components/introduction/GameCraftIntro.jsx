import {Button, Col, Flex, Row, theme, Typography} from "antd";
import logo from '/src/assets/svg/dark-3d-bulb.svg'
import {InstagramOutlined, XOutlined, YoutubeFilled} from "@ant-design/icons";

const {useToken} = theme

export function GameCraftIntro() {
    const {token} = useToken();

    return (
        <Flex align={"center"} justify={"center"} style={{width: '100%'}}>
            <Row align={"middle"} justify={"space-around"} gutter={[16, 16]} style={{width: '100%'}}>
                <Col span={24} lg={12}>
                    <Flex
                        vertical
                        align={"start"}
                        justify={"start"}
                        style={{width: '100%'}}
                        gap={"small"}
                    >
                        <Typography.Title level={1} style={{color: token.colorAction, fontWeight: "bolder", fontSize: '5rem', marginBottom: '1rem'}}>GameCraft</Typography.Title>
                        <Typography.Title level={3} style={{fontWeight: "bold", margin: 0}}>Lorem ipsum dolor sit amet.</Typography.Title>
                        <Typography.Title level={4} style={{margin: '0px'}}>
                            Lorem ipsum dolor sit amet, consectetur adipisicing elit. Animi aperiam assumenda aut consequuntur corporis cum doloremque dolorum earum facilis, fugiat illum, ipsum libero minus molestias nulla officia praesentium provident quam ratione repellat repudiandae sapiente sunt tenetur, ullam vel voluptate voluptatem.
                        </Typography.Title>
                        <Flex align={"center"} justify={"center"} gap={"small"} wrap>
                            <Button
                                type={"primary"}
                                size={"large"}
                                shape={"circle"}
                                icon={<XOutlined style={{fontSize: '2rem'}}/>}
                                style={{
                                    width: '3.5rem',
                                    height: '3.5rem',
                                    background: token.colorAction
                                }}
                            />
                            <Button
                                type={"primary"}
                                size={"large"}
                                shape={"circle"}
                                icon={<InstagramOutlined style={{fontSize: '2rem'}}/>}
                                style={{
                                    width: '4rem',
                                    height: '4rem',
                                    background: token.colorAction
                                }}
                            />
                            <Button
                                type={"primary"}
                                size={"large"}
                                shape={"circle"}
                                icon={<YoutubeFilled style={{fontSize: '2rem'}}/>}
                                style={{
                                    width: '3.5rem',
                                    height: '3.5rem',
                                    background: token.colorAction
                                }}
                            />
                        </Flex>
                    </Flex>
                </Col>

                <Col span={24} lg={12}>
                    <Flex align={"center"} justify={"center"} style={{width: '100%'}}>
                        <img src={logo} alt={'logo'} width={'50%'} height={'auto'}/>
                    </Flex>
                </Col>
            </Row>
        </Flex>
    )
}
