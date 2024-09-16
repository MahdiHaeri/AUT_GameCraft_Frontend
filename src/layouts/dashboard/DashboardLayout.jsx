import {Button, Col, Divider, Flex, Image, Row, theme, Typography} from "antd";
import backgroundPattern from "/src/assets/svg/pattern.svg";
import {useLocation, useNavigate} from "react-router";
import {useDashboardNavigations} from "../../config/DashboardNavigations.jsx";
import userImage from '/src/assets/svg/avatar-1.svg'
import {useTranslation} from "react-i18next";
import {LogoWithText} from "../../components/LogoWithText/LogoWithText.jsx";
import mahdiHaeri from '/src/assets/images/2024/staffs/mahdiHaeri.jpg'

const {useToken} = theme

export function DashboardLayout({children}) {
    const {token} = useToken()
    const navigate = useNavigate()
    const dashboardNavigations = useDashboardNavigations()
    const {t} = useTranslation()
    const location = useLocation()

    return (
        <Flex
            align={"center"}
            justify={"start"}
            vertical
            style={{
                width: '100%',
                backgroundColor: token.colorPrimary,
                backgroundImage: `url(${backgroundPattern})`,
                padding: '1rem',
            }}
            gap={"large"}
        >
            <Flex align={"center"} justify={"center"} style={{width: '100%'}}>
                <LogoWithText/>
            </Flex>
            <Flex align={"center"} justify={"center"} style={{width: '100%'}}>
                <Row align={"top"} justify={"center"} style={{width: '100%'}} gutter={[16, 16]}>
                    <Col span={24} md={6}>
                        <Flex
                            vertical
                            align={"center"}
                            justify={"center"}
                            style={{
                                backgroundColor: token.colorBgBase,
                                width: '100%',
                                borderRadius: token.borderRadius,
                                padding: token.padding
                            }}
                        >
                            <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}} gap={"small"}>
                                <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}}
                                      gap={"small"}>
                                    <Flex
                                        style={{
                                            width: '30%',
                                            borderRadius: '50%',
                                            overflow: "hidden",
                                            aspectRatio: '1/1',
                                        }}
                                    >
                                        <Image
                                            src={mahdiHaeri}
                                            width={'100%'}
                                            height={'auto'}
                                            placeholder={
                                                <img src={userImage} alt={'user-image'} width={'100%'} height={'auto'}/>
                                            }
                                        />
                                    </Flex>
                                    <Typography.Title level={4} style={{fontWeight: 800}}>
                                        Mahdi Haeri
                                    </Typography.Title>

                                </Flex>
                                <Flex
                                    vertical
                                    align={"center"}
                                    justify={"center"}
                                    style={{width: '100%'}}
                                    gap={"small"}
                                >
                                    {dashboardNavigations.map(item => (
                                        <Button
                                            key={item.route}
                                            type={"dashed"}
                                            size={"large"}
                                            style={{width: '100%'}}
                                            onClick={() => navigate(item.route, {replace: true})}
                                        >
                                            {item.name}
                                        </Button>
                                    ))}
                                    <Button
                                        danger
                                        type={"dashed"}
                                        size={"large"}
                                        style={{width: '100%'}}
                                    >
                                        {t('app.auth.logout')}
                                    </Button>
                                </Flex>
                            </Flex>
                        </Flex>
                    </Col>
                    <Col span={24} md={18}>
                        <Flex
                            vertical
                            align={"center"}
                            justify={"center"}
                            style={{
                                backgroundColor: token.colorBgBase,
                                width: '100%',
                                borderRadius: token.borderRadius,
                                padding: token.padding
                            }}
                        >
                            <Typography.Title level={3} style={{margin: 0}}>
                                {dashboardNavigations.find(item => item.route === location.pathname)?.name}
                            </Typography.Title>
                            <Divider type={"horizontal"} variant={"dashed"}/>
                            {children}
                        </Flex>
                    </Col>
                </Row>
            </Flex>
        </Flex>
    )
}
