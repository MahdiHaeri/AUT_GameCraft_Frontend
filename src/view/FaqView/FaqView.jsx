import {Flex, Grid, theme} from "antd";
import backgroundPattern from "../../assets/svg/pattern.svg";
import {Faq} from "../../components/Faq/Faq.jsx";
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet-async";

const {useToken} = theme
const {useBreakpoint} = Grid;

export function FaqView() {
    const {token} = useToken()
    const screens = useBreakpoint();
    const {t} = useTranslation();
    const faqViewPadding = screens.lg ? '4rem 5rem' : '3rem 2rem'

    return (
        <>
            <Helmet>
                <title>{t('app.faq.title')} | {t('app.name')}</title>
            </Helmet>
            <Flex
                align={"center"}
                justify={"center"}
                vertical
                style={{
                    width: '100%',
                    minHeight: '100vh',
                    backgroundColor: token.colorPrimary,
                    backgroundImage: `url(${backgroundPattern})`,
                    backgroundSize: 'cover',
                    backgroundPosition: 'center',
                    backgroundAttachment: 'fixed',
                    padding: faqViewPadding,
                    position: 'relative',
                }}
                gap={"large"}
            >
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    bottom: 0,
                    backgroundColor: 'rgba(0, 0, 0, 0.4)',
                    zIndex: 1,
                }} />
                <div style={{ position: 'relative', zIndex: 2, width: '100%' }}>
                    <Faq />
                </div>
            </Flex>
        </>
    )
}
