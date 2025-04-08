import {Flex, Grid, theme} from "antd";
import backgroundPattern from "../../assets/svg/pattern.svg";
import {Faq} from "../../components/Faq/Faq.jsx";
import {useTranslation} from "react-i18next";
import {Helmet} from "react-helmet-async";
import {Wave} from "../../components/wave/Wave.jsx";

const {useToken} = theme
const {useBreakpoint} = Grid;

export function FaqView() {
    const {token} = useToken()
    const screens = useBreakpoint();
    const {t} = useTranslation();
    const faqViewPadding = screens.lg ? '3rem 5rem' : '3rem 2rem'

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
                    backgroundColor: token.colorPrimary,
                }}
            >
                <Flex
                    align={"center"}
                    justify={"center"}
                    style={{
                        width: '100%',
                        backgroundImage: `url(${backgroundPattern})`,
                        backgroundSize: 'fit',
                        backgroundPosition: 'center',
                        padding: faqViewPadding,
                        position: 'relative',
                    }}
                >
                    <Faq />
                </Flex>
                <Wave width={'100%'} height={'auto'} fill={token.colorPrimary} style={{transform: 'scaleY(-1) translateY(-2px)'}}/>
            </Flex>
        </>
    )
}
