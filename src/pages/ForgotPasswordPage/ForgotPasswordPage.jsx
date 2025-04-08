import {Flex, Layout, theme} from "antd";
import backgroundImage from '/src/assets/svg/pattern.svg'
import {Helmet} from "react-helmet-async";
import {useTranslation} from "react-i18next";
import {ForgotPasswordView} from "../../view/forgotPasswordView/ForgotPasswordView.jsx";

const {useToken} = theme

export function ForgotPasswordPage() {
    const {token} = useToken()
    const {t} = useTranslation()

    return (
        <>
            <Helmet>
                <title> {t('app.pages.forgotPassword')}</title>
            </Helmet>

            <Flex style={{width: '100vw', height: '100vh'}}>
                <Layout
                    style={{
                        height: '100%',
                        width: '100%',
                        backgroundImage: `url(${backgroundImage})`,
                        backgroundColor: token.colorPrimary
                    }}
                >
                    <ForgotPasswordView/>
                </Layout>
            </Flex>
        </>
    )
} 