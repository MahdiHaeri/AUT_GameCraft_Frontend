import {Button, Drawer, Flex, Switch, theme} from "antd";
import {useTranslation} from "react-i18next";
import {useMainNavigations} from "../../config/MainNavigations.jsx";
import {useLocation, useNavigate} from "react-router";
import ROUTES from "../../config/routes.js";
import {MoonFilled, SunFilled} from "@ant-design/icons";
import {useContext} from "react";
import {ThemeContext} from "../../hooks/context/ThemeContext.jsx";

const {useToken} = theme

export function MainDrawer({open, toggleDrawerOpen}) {
    const {t, i18n} = useTranslation()
    const MainNavigations = useMainNavigations()
    const navigate = useNavigate()
    const location = useLocation(); // Get the current location
    const {token} = useToken();
    const {darkMode, toggleTheme} = useContext(ThemeContext)


    const isActive = (path) => location.pathname === path;

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
                    vertical
                    align={"center"}
                    justify={"center"}
                    gap={"small"}
                    style={{
                        width: '100%',
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
                    {MainNavigations.map(item => (
                        <Button
                            key={item.route}
                            type={"dashed"}
                            size={"large"}
                            onClick={() => {
                                toggleDrawerOpen()
                                navigate(item.route)
                            }}
                            style={{
                                width: '100%',
                                fontWeight: "bolder",
                                ...(isActive(item.route) ? {color: token.colorAction} : {})
                            }}
                        >
                            {item.name}
                        </Button>
                    ))}
                    <Flex
                        align={"center"}
                        justify={"center"}
                        gap={"small"}
                        style={{
                            width: '100%'
                        }}
                    >
                        <Button
                            style={{flex: 1}}
                            size={"large"}
                            type={'dashed'}
                            onClick={() => {
                                toggleDrawerOpen()
                                navigate(ROUTES.LOGIN)
                            }}
                        >
                            {t('app.auth.login')}
                        </Button>
                        <Button
                            style={{flex: 1}}
                            type={'primary'}
                            size={"large"}
                            onClick={() => {
                                toggleDrawerOpen()
                                navigate(ROUTES.SIGNUP)
                            }}
                        >
                            {t('app.auth.signUp')}
                        </Button>
                    </Flex>
                </Flex>
            </Flex>
        </Drawer>
    )
}
