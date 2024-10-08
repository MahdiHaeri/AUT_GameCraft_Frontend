import {Flex, Layout} from "antd";
import {AppHeader} from "../../components/header/AppHeader.jsx";
import {Outlet} from "react-router";
import {Helmet} from "react-helmet-async";
import {AppFooter} from "../../components/footer/AppFooter.jsx";
import {useTranslation} from "react-i18next";
import {MainLayout} from "../../layouts/main/MainLayout.jsx";

export function MainPage() {
    const {t} = useTranslation()
    return (
        <>
            <Helmet>
                <title> {t('app.pages.main')}</title>
            </Helmet>

            <Flex style={{width: '100vw', minHeight: '100vh'}}>
                <MainLayout>
                    <Outlet/>
                </MainLayout>
            </Flex>
        </>
    );
}
