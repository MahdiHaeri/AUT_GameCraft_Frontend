import {Helmet} from "react-helmet-async";
import {Flex, Layout} from "antd";
import {Outlet} from "react-router";
import {DashboardLayout} from "../../layouts/dashboard/DashboardLayout.jsx";
import {useTranslation} from "react-i18next";

export function DashboardPage() {
    const {t} = useTranslation()
    return (
        <>
            <Helmet>
                <title> {t('app.pages.dashboard')}</title>
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
