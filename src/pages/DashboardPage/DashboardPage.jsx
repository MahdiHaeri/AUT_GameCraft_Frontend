import {Helmet} from "react-helmet-async";
import {Flex, Layout} from "antd";
import {AppHeader} from "../../components/header/AppHeader.jsx";
import {Outlet} from "react-router";
import {AppFooter} from "../../components/footer/AppFooter.jsx";
import {DashboardLayout} from "../../layouts/dashboard/DashboardLayout.jsx";

export function DashboardPage() {
    return (
        <>
            <Helmet>
                <title> Dashboard </title>
            </Helmet>


            <Flex style={{width: '100vw', minHeight: '100vh'}}>
                <DashboardLayout>
                    <Layout.Content>
                        <Outlet/>
                    </Layout.Content>
                </DashboardLayout>
            </Flex>
        </>
    )
}
