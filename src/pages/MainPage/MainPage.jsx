import {Flex, Layout} from "antd";
import {AppHeader} from "../../components/header/AppHeader.jsx";
import {Outlet} from "react-router";
import {Helmet} from "react-helmet-async";
import {AppFooter} from "../../components/footer/AppFooter.jsx";

export function MainPage() {
    return (
        <>
            <Helmet>
                <title> Home </title>
            </Helmet>

            <Flex style={{width: '100vw', minHeight: '100vh'}}>
                <Layout>
                    <AppHeader/>
                    <Layout.Content>
                        <Outlet/>
                    </Layout.Content>
                    <AppFooter/>
                </Layout>
            </Flex>
        </>
    );
}
