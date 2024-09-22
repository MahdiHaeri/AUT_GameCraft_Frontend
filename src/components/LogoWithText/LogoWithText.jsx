import {Avatar, Flex, Typography} from "antd";
import logo from '/src/assets/svg/dark-3d.svg'
import {useTranslation} from "react-i18next";

export function LogoWithText() {
    const {t} = useTranslation()

    return (
        <Flex
            align={"center"}
            justify={"center"}
        >
            <Typography.Title
                level={3}
                type={"secondary"}
                style={{
                    margin: '-5px',
                    fontWeight: 1000,
                    opacity: '0.2',
                    color: 'white',
                }}
            >
                {t('app.logo.game')}
            </Typography.Title>

            <img src={logo} alt={logo} width={'100px'} height={'100px'} style={{zIndex: '10'}}/>

            <Typography.Title
                level={3}
                type={"secondary"}
                style={{
                    margin: '-5px',
                    fontWeight: 1000,
                    opacity: '0.2',
                    color: 'white',
                }}
            >
                {t('app.logo.craft')}
            </Typography.Title>
        </Flex>
    )
}
