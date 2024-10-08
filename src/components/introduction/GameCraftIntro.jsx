import {Button, Col, ConfigProvider, Flex, Grid, Row, theme, Typography} from "antd";
import logo from '/src/assets/svg/dark-3d-bulb.svg'
import {InstagramOutlined, XOutlined, YoutubeFilled} from "@ant-design/icons";
import {useTranslation} from "react-i18next";
import bubbleImg from '/src/assets/svg/bubble-purple.svg'
import {darkTheme} from "../../config/theme/darkTheme.js";

const {useToken} = theme
const {useBreakpoint} = Grid;

export function GameCraftIntro({padding, backgroundColor}) {
    const {token} = useToken();
    const {t} = useTranslation()
    const screens = useBreakpoint();

    return (
        <ConfigProvider theme={darkTheme}>
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                style={{
                    width: '100%',
                    padding: padding,
                    backgroundColor: backgroundColor,
                }}
            >
                <Row align={"middle"} justify={"space-around"} gutter={[16, 16]} style={{width: '100%'}}>
                    <Col span={24} lg={12}>
                        <Flex
                            vertical
                            align={"start"}
                            justify={"start"}
                            style={{
                                width: '100%',
                                position: 'relative',
                                zIndex: 10
                            }}
                            gap={"small"}
                        >
                            <Flex align={"center"} justify={"center"} style={{
                                width: '100%',
                                height: '100%',
                                position: "absolute",
                                zIndex: -1,
                            }}>
                                <img
                                    src={bubbleImg}
                                    alt={'bubble-image'}
                                    width={'100%'}
                                    height={'100%'}
                                    style={{
                                        transform: 'scaleX(-1)',
                                    }}
                                />
                            </Flex>
                            <Typography.Title level={1} style={{
                                color: token.colorAction,
                                fontWeight: 1000,
                                fontSize: screens.lg ? '5rem' : screens.md ? '4rem' : '3rem',
                                marginBottom: '1rem'
                            }}>
                                {t('app.intro.title')}
                            </Typography.Title>
                            <Typography.Title
                                level={3}
                                style={{
                                    fontWeight: 900,
                                    margin: 0
                                }}
                            >
                                {t('app.intro.subtitle')}
                            </Typography.Title>
                            <Typography.Paragraph>
                                {t('app.intro.description')}
                            </Typography.Paragraph>
                            <Flex align={"center"} justify={"start"} style={{width: '100%'}} gap={"small"} wrap>
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
        </ConfigProvider>
    )
}
