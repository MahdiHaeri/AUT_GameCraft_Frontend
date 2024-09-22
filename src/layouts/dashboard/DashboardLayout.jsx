import {Divider, Flex, Grid, theme, Typography} from "antd";
import backgroundPattern from "/src/assets/svg/pattern.svg";
import {useLocation} from "react-router";
import {useDashboardNavigations} from "../../config/DashboardNavigations.jsx";
import {DashboardHeader} from "./component/DashboardHeader.jsx";
import {LogoWithText} from "../../components/LogoWithText/LogoWithText.jsx";
import {DashboardNavigationCard} from "./component/DashboardNavigationCard.jsx";

const {useToken} = theme
const {useBreakpoint} = Grid;

export function DashboardLayout({children}) {
    const screens = useBreakpoint()
    const {token} = useToken()
    const dashboardNavigations = useDashboardNavigations()
    const location = useLocation()

    return (
        <Flex
            vertical
            style={{
                width: '100%',
                minHeight: '100vh',
            }}
        >
            <DashboardHeader/>
            <Flex
                align={"center"}
                justify={"start"}
                vertical
                style={{
                    width: '100%',
                    height: '100%',
                    backgroundColor: token.colorPrimary,
                    backgroundImage: `url(${backgroundPattern})`,
                    padding: '1rem',
                }}
                gap={"large"}
            >
                {screens.lg ?
                    <Flex align={"center"} justify={"center"} style={{width: '100%'}}>
                        <LogoWithText/>
                    </Flex>
                    :
                    <></>
                }
                <Flex
                    align={"start"}
                    justify={"center"}
                    style={{
                        width: '100%'
                    }}
                    gap={"small"}
                >
                    {screens.lg ?
                        <Flex flex={1} style={{position: "sticky", top: '10px'}}>
                            <DashboardNavigationCard/>
                        </Flex>
                        :
                        <></>
                    }
                    <Flex
                        flex={3}
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
                        <Typography.Title level={3} style={{margin: 0, fontWeight: 950}}>
                            {dashboardNavigations.find(item => item.route === location.pathname)?.name}
                        </Typography.Title>
                        <Divider type={"horizontal"} variant={"dashed"}/>
                        {children}
                    </Flex>
                </Flex>
            </Flex>
        </Flex>
    )
}
