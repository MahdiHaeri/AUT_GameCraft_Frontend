import {Drawer, Flex, theme} from "antd";
import {useTranslation} from "react-i18next";
import {DashboardNavigationCard} from "./DashboardNavigationCard.jsx";

const {useToken} = theme

export function DashboardDrawer({open, toggleDrawerOpen}) {
    const {t, i18n} = useTranslation()
    const {token} = useToken();

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
                <DashboardNavigationCard open={open} toggleDrawerOpen={toggleDrawerOpen}/>
            </Flex>
        </Drawer>
    )
}
