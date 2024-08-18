import {Layout} from "antd";
import {AppHeader} from "/src/components/header/AppHeader.jsx";
import {AppFooter} from "/src/components/footer/AppFooter.jsx";

export function MainLayout({children}) {
    return (
        <Layout>
            <AppHeader/>
            <Layout.Content>
                {children}
            </Layout.Content>
            <AppFooter/>
        </Layout>
    )
}
