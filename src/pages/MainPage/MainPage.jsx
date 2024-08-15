import {Flex, Layout} from "antd";
import {AppHeader} from "../../components/header/AppHeader.jsx";
import {Outlet} from "react-router";
import {Helmet} from "react-helmet-async";

export function MainPage() {
    return (
        <>
            <Helmet>
                <title> Home </title>
            </Helmet>

            <Flex style={{width: '100vw', height: '100vh'}}>
                <Layout>
                    <AppHeader/>
                    <div style={{height: '10vh'}}/>
                    <Outlet/>
                </Layout>
            </Flex>
        </>
    );
}
