import {Button, Flex, Grid, Layout, theme} from "antd";
import {MenuOutlined} from "@ant-design/icons";
import logo from "/src/assets/svg/dark-3d.svg";
import {DashboardDrawer} from "./DashboardDrawer.jsx";
import {useEffect, useState} from "react";

const {Header} = Layout
const {useToken} = theme
const {useBreakpoint} = Grid;

export function DashboardHeader() {
    const {token} = useToken()
    const screens = useBreakpoint()
    const [shadow, setShadow] = useState(false);
    const [drawerOpen, setDrawerOpen] = useState(false)

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

    function toggleDrawerOpen() {
        setDrawerOpen(!drawerOpen)
    }

    return (
        screens.lg ?
            <></>
            :
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
                    // boxShadow: shadow ? '0 10px 20px rgba(0, 0, 0, 0.5)' : 'none',
                    boxShadow: '0 1px 20px rgba(0, 0, 0, 0.3)',
                    padding: '0.5rem 2rem',
                }}
            >
                <Flex align={"center"} justify={"space-between"} style={{height: '100%', width: '100%'}}>
                    <Button shape={"circle"} type={"primary"} size={"large"} icon={<MenuOutlined/>}
                            onClick={() => toggleDrawerOpen()}/>
                    <img
                        src={logo}
                        alt={'gamecraft-logo'}
                        style={{height: '60%', width: "auto", maxHeight: '60px'}}
                    />
                    <DashboardDrawer open={drawerOpen} toggleDrawerOpen={toggleDrawerOpen}/>
                </Flex>
            </Header>
    )
}