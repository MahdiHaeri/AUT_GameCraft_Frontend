import {Button, Drawer, Flex, Switch, theme} from "antd";
import {useTranslation} from "react-i18next";
import {DashboardNavigationCard} from "./DashboardNavigationCard.jsx";
import {MoonFilled, SunFilled} from "@ant-design/icons";
import {useContext} from "react";
import {ThemeContext} from "../../../hooks/context/ThemeContext.jsx";

const {useToken} = theme

export function DashboardDrawer({open, toggleDrawerOpen}) {
    const {t, i18n} = useTranslation()
    const {token} = useToken();
    const {darkMode, toggleTheme} = useContext(ThemeContext)

    return (
        <Drawer
            placement={i18n.dir() === 'rtl' ? 'right' : 'left'}
            open={open}
            width={300}
            closable={true}
            // closeIcon={false}
            title={
                t('app.name')
            }
            mask={true}
            maskClosable={true}
            onClose={() => toggleDrawerOpen()}
            zIndex={100000000}
            style={{
                backgroundColor: `${token.colorBgBase}`,
                backdropFilter: 'blur(10px)',
            }}
        >
            <Flex
                vertical
                align={"center"}
                justify={"start"}
                style={{
                    width: '100%',
                    height: '100%',
                }}
            >
                <Flex
                    align={"center"}
                    justify={"space-around"}
                    gap={"small"}
                    style={{
                        width: '100%'
                    }}
                >
                    <Button
                        type={"text"}
                        shape={"circle"}
                        onClick={() => toggleTheme()}
                        size={"large"}
                        icon={darkMode ? <MoonFilled/> : <SunFilled/>}
                    />
                    <Switch
                        checkedChildren={"En"}
                        unCheckedChildren={"Fa"}
                        checked={i18n.language !== 'fa'}
                        defaultChecked
                        onClick={() => {
                            i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa')
                        }}
                    />
                </Flex>
                <DashboardNavigationCard open={open} toggleDrawerOpen={toggleDrawerOpen}/>
            </Flex>
        </Drawer>
    )
}
