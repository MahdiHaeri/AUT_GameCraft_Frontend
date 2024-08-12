import {Layout} from "antd";
import {AppHeader} from "../../components/header/AppHeader.jsx";
import {Outlet} from "react-router";

export function HomePage() {
    return (
        <Layout>
            <AppHeader/>
            <div style={{height: '10vh'}}/>
            <Outlet/>
        </Layout>
    );
}
