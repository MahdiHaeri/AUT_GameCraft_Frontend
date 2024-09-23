import {Button, Flex, Grid, Image, theme, Typography} from "antd";
import {useTranslation} from "react-i18next";
import mahdiHaeri from '/src/assets/images/2024/staffs/mahdiHaeri.jpg'
import userImage from '/src/assets/svg/avatar-1.svg'
import {useNavigate} from "react-router";
import {useDashboardNavigations} from "/src/config/DashboardNavigations.jsx";


const {useToken} = theme
const {useBreakpoint} = Grid;

export function DashboardNavigationCard({open, toggleDrawerOpen}) {
    const {t} = useTranslation()
    const {token} = useToken()
    const navigate = useNavigate()
    const dashboardNavigations = useDashboardNavigations()
    const screens = useBreakpoint()

    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                backgroundColor: token.colorBgBase,
                width: '100%',
                borderRadius: token.borderRadius,
                padding: screens.lg ? token.padding : 0
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
                            onClick={() => {
                                navigate(item.route, {replace: true})
                                toggleDrawerOpen()
                            }}
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
    )
}