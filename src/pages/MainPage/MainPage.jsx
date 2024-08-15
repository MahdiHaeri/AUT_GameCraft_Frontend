import {Flex, Layout} from "antd";
import {AppHeader} from "../../components/header/AppHeader.jsx";
import {Outlet} from "react-router";
import {Helmet} from "react-helmet-async";
import {useRef} from "react";

export function MainPage() {
    const parentRef = useRef(null);

    return (
        <>
            <Helmet>
                <title> Home </title>
            </Helmet>

            <Flex ref={parentRef} style={{width: '100vw', height: '100vh', overflow: "auto"}}>
                <Layout>
                    <AppHeader parentRef={parentRef}/>
                    <Layout.Content style={{marginTop: '10vh'}}>
                        <Outlet/>
                    </Layout.Content>
                </Layout>
            </Flex>
        </>
    );
}
