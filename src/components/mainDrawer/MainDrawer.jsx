import {Button, Drawer, Flex, theme} from "antd";
import {useTranslation} from "react-i18next";
import {useMainNavigations} from "../../config/MainNavigations.jsx";
import {useLocation, useNavigate} from "react-router";

const {useToken} = theme

export function MainDrawer({open, toggleDrawerOpen}) {
    const {t, i18n} = useTranslation()
    const MainNavigations = useMainNavigations()
    const navigate = useNavigate()
    const location = useLocation(); // Get the current location
    const {token} = useToken();

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
                    {MainNavigations.map(item => (
                        <Button
                            key={item.route}
                            type={"dashed"}
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
                </Flex>
            </Flex>
        </Drawer>
    )
}
