import {Empty, Flex, Grid, theme, Typography} from "antd";
import backgroundPattern from "../../assets/svg/pattern.svg";
import {Wave} from "../../components/wave/Wave.jsx";
import {useTranslation} from "react-i18next";

const {useToken} = theme
const {useBreakpoint} = Grid;

export function HistoryView() {
    const {token} = useToken()
    const screens = useBreakpoint();
    const historyViewPadding = screens.lg ? '3rem 5rem' : '3rem 2rem'
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
                    padding: historyViewPadding
                }}
            >
                <Typography.Title style={{color: 'white'}}>
                    {t('app.mainNavigation.history')}
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
                    <Empty description={'No history yet'}/>
                </Flex>
            </Flex>
            {/*<Wave width={'100%'} height={'auto'} fill={token.colorPrimary} style={{transform: 'scaleY(-1) translateY(-2px)'}}/>*/}
        </Flex>
    )
}