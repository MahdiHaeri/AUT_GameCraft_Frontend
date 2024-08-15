import {Layout} from "antd";
import {AppHeader} from "../../components/header/AppHeader.jsx";
import {Outlet} from "react-router";
import {Helmet} from "react-helmet-async";

export function HomePage() {
    return (
        <>
            <Helmet>
                <title> Home </title>
            </Helmet>

            <Layout>
                <AppHeader/>
                <div style={{height: '10vh'}}/>
                <Outlet/>
            </Layout>
        </>
    );
}
