import {Empty, Flex, Grid, theme, Typography} from "antd";
import backgroundPattern from "../../assets/svg/pattern.svg";
import {Wave} from "../../components/wave/Wave.jsx";
import {useTranslation} from "react-i18next";

const {useToken} = theme
const {useBreakpoint} = Grid;

export function SponsorsView() {
    const {token} = useToken()
    const screens = useBreakpoint();
    const blogViewPadding = screens.lg ? '3rem 5rem' : '3rem 3rem'
    const {t} = useTranslation()

    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                minHeight: '100%',
                backgroundColor: token.colorPrimary,
                backgroundImage: `url(${backgroundPattern})`,
            }}
        >
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                style={{
                    width: '100%',
                    padding: blogViewPadding
                }}
            >
                <Typography.Title style={{color: 'white'}}>
                    {t('app.mainNavigation.sponsors')}
                </Typography.Title>
                <Flex
                    vertical
                    align={"center"}
                    justify={"center"}
                    style={{
                        width: '100%',
                        minHeight: '200px',
                        backgroundColor: token.colorBgBase,
                        borderRadius: token.borderRadius,
                        padding: token.padding
                    }}
                >
                    <Empty description={'No sponsors yet'}/>
                </Flex>
            </Flex>
            {/*<Wave width={'100%'} height={'auto'} fill={token.colorPrimary} style={{transform: 'scaleY(-1) translateY(-2px)'}}/>*/}
        </Flex>
    )
}
