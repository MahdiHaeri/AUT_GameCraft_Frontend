import {Button, Divider, Flex, Layout, Space, Switch, theme} from "antd";
import {useEffect, useState} from "react";
import logo from '/src/assets/svg/dark-3d.svg';
import {useLocation, useNavigate} from "react-router";
import ROUTES from "../../config/routes.js";
import {useMainNavigations} from "../../config/MainNavigations.jsx";
import {useTranslation} from "react-i18next";

const {useToken} = theme
const {Header} = Layout

export function AppHeader() {
    const MainNavigations = useMainNavigations()
    const [shadow, setShadow] = useState(false);
    const navigate = useNavigate()
    const location = useLocation(); // Get the current location
    const {token} = useToken();
    const {t, i18n} = useTranslation()

    const handleScroll = () => {
        if (window.scrollY > 0) {
            setShadow(true);
        } else {
            setShadow(false);
        }
    };

    useEffect(() => {
        window.addEventListener('scroll', handleScroll);
        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    const isActive = (path) => location.pathname === path;

    return (
        <Header
            style={{
                position: 'sticky',
                top: 0,
                right: 0,
                zIndex: 10000,
                width: '100%',
                height: '10vh',
                minHeight: '60px',
                maxHeight: '100px',
                background: token.colorPrimary,
                transition: 'box-shadow 0.3s',
                boxShadow: shadow ? '0 10px 20px rgba(0, 0, 0, 0.5)' : 'none',
                padding: '0.5rem 2rem',
            }}
        >
            <Flex align={"center"} justify={"space-between"} style={{width: '100%', height: '100%'}}>
                <Flex align={"center"} justify={"center"} style={{height: '100%'}} gap={"large"}>
                    <img
                        src={logo}
                        alt={'gamecraft-logo'}
                        style={{height: '80%', width: "auto", maxHeight: '60px'}}
                    />

                    <Space size={"small"}>
                        {MainNavigations.map(item => (
                            <Button
                                key={item.route}
                                type={"primary"}
                                onClick={() => navigate(item.route)}
                                style={{
                                    fontWeight: "bolder",
                                    ...(isActive(item.route) ? {color: token.colorAction} : {})
                                }}
                            >
                                {item.name}
                            </Button>
                        ))}
                    </Space>
                </Flex>

                <Flex align={"center"} justify={"center"} style={{height: '100%'}} gap={"small"}>
                    <Switch
                        checkedChildren={"En"}
                        unCheckedChildren={"Fa"}
                        checked={i18n.language !== 'fa'}
                        defaultChecked
                        size={'default'}
                        onClick={() => {
                            i18n.changeLanguage(i18n.language === 'fa' ? 'en' : 'fa')
                            //sleep 1 second
                        }}
                    />
                    <Divider type={"vertical"}
                             style={{height: '50%', borderWidth: '4px', borderRadius: '8px', margin: 0}}/>
                    <Space size={"small"}>
                        <Button
                            type={"primary"}
                            style={{fontWeight: "bolder"}}
                            onClick={() => navigate(ROUTES.SIGNUP)}
                        >
                            {t('app.auth.signUp')}
                        </Button>
                        <Button
                            type={"primary"}
                            style={{fontWeight: "bolder"}}
                            onClick={() => navigate(ROUTES.LOGIN)}
                        >
                            {t('app.auth.login')}
                        </Button>
                    </Space>
                </Flex>
            </Flex>
        </Header>
    )
}
