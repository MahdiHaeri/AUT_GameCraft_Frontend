import {Button, Divider, Flex, Input, theme, Typography,} from "antd";
import {NavLink} from "react-router-dom";
import logo from '/src/assets/svg/light-3d-bulb.svg'
import ROUTES from "../../../config/routes.js";
import {useTranslation} from "react-i18next";


const {useToken} = theme

export function LoginForm() {
    const {token} = useToken()
    const {t} = useTranslation()

    return (
        <Flex
            vertical
            align={"center"}
            justify={"space-between"}
            style={
                {
                    padding: '1rem',
                    borderRadius: token.borderRadius,
                    minWidth: '300px',
                    minHeight: '400px',
                    backgroundColor: token.colorBgBase,
                    width: '25vw',
                    height: '50vh'
                }
            }
        >
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                gap={"small"}
                style={{width: '100%'}}
            >
                <Divider type={'horizontal'} variant={'solid'} style={{margin: 0}}>
                    <img src={logo} alt={logo} width={'auto'} height={'50px'}/>
                </Divider>

                <Input placeholder={t('app.auth.email')} size={'large'} variant={'filled'}/>

                <Input.Password placeholder={t('app.auth.password')} size={"large"} variant={'filled'}/>

                <Flex align={"center"} justify={"start"} style={{width: '100%'}}>
                    <NavLink to={"/forgot-password"} replace={true} style={{fontSize: 'small'}}>
                        {t('app.auth.forgotPassword')}
                    </NavLink>
                </Flex>
            </Flex>
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                style={{width: '100%'}}
                gap={"small"}
            >
                <Button type={"primary"} size={"large"} style={{width: '100%'}}>
                    {t('app.auth.login')}
                </Button>
                <Flex align={"center"} justify={"center"} gap={"small"}>
                    <Typography.Text type={'secondary'}>
                        {t('app.auth.doNotHaveAccount')}
                    </Typography.Text>
                    <NavLink to={ROUTES.SIGNUP} replace={true}>
                        {t('app.auth.signup')}
                    </NavLink>
                </Flex>
            </Flex>
        </Flex>
    )
}
