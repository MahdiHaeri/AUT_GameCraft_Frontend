import {Flex, theme, Typography} from "antd";
import logo from '/src/assets/svg/dark-3d.svg'
import {useTranslation} from "react-i18next";

const {useToken} = theme

export function LogoWithText() {
    const {t} = useTranslation()
    const {token} = useToken();

    return (
        <Flex
            align={"center"}
            justify={"center"}
        >
            <Typography.Title
                level={3}
                style={{
                    margin: '-5px',
                    fontWeight: 'bolder',
                    opacity: '0.2',
                    color: 'white',
                    fontFamily: 'Estedad-black'
                }}
            >
                {t('app.logo.game')}
            </Typography.Title>

            <img src={logo} alt={logo} width={'100px'} height={'100px'} style={{zIndex: '10'}}/>

            <Typography.Title
                level={3}
                style={{
                    margin: '-5px',
                    fontWeight: 'bolder',
                    opacity: '0.2',
                    color: 'white',
                    fontFamily: 'Estedad-black'
                }}
            >
                {t('app.logo.craft')}
            </Typography.Title>
        </Flex>
    )
}
