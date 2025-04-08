import {Button, Divider, Flex, Input, notification, theme, Typography} from "antd";
import {NavLink} from "react-router-dom";
import logo from '/src/assets/svg/light-3d-bulb.svg'
import ROUTES from "/src/config/routes.js";
import {useTranslation} from "react-i18next";
import {useState} from "react";
import {useNavigate} from "react-router";

const {useToken} = theme

export function ForgotPasswordForm() {
    const {token} = useToken()
    const {t} = useTranslation()
    const navigate = useNavigate()

    const [email, setEmail] = useState('')
    const [loading, setLoading] = useState(false)
    const [resetSent, setResetSent] = useState(false)

    const handleResetPassword = async () => {
        try {
            setLoading(true)
            // Here you would call your API to send a reset password email
            // For now, we'll simulate a successful API call
            await new Promise(resolve => setTimeout(resolve, 1000))
            
            setResetSent(true)
            notification.success({message: t('app.auth.resetLinkSent')})
        } catch (e) {
            console.error(e)
            notification.error({message: t('app.auth.resetLinkError')})
        } finally {
            setLoading(false)
        }
    }

    return <Flex
        vertical
        align={"center"}
        justify={"space-between"}
        style={{
            padding: '1rem',
            borderRadius: token.borderRadius,
            minWidth: '300px',
            minHeight: '400px',
            backgroundColor: token.colorBgBase,
            width: '25vw',
            height: '50vh'
        }}
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

            <Typography.Title level={4} style={{margin: '1rem 0', textAlign: 'center'}}>
                {t('app.auth.resetPassword')}
            </Typography.Title>

            <Typography.Paragraph style={{textAlign: 'center', marginBottom: '1rem'}}>
                {t('app.auth.resetPasswordInstructions')}
            </Typography.Paragraph>

            {!resetSent ? (
                <>
                    <Input
                        placeholder={t('app.auth.email')}
                        size={'large'}
                        variant={'filled'}
                        onChange={(e) => setEmail(e.target.value)}
                    />

                    <Button
                        type={"primary"}
                        size={"large"}
                        style={{width: '100%', marginTop: '1rem'}}
                        loading={loading}
                        onClick={handleResetPassword}
                    >
                        {t('button.sendResetLink')}
                    </Button>
                </>
            ) : (
                <Flex vertical align="center" justify="center" style={{width: '100%', gap: '1rem'}}>
                    <Typography.Text style={{textAlign: 'center', color: token.colorSuccess}}>
                        {t('app.auth.resetLinkSent')}
                    </Typography.Text>
                    <Button
                        type={"default"}
                        size={"large"}
                        style={{width: '100%'}}
                        onClick={() => navigate(ROUTES.LOGIN)}
                    >
                        {t('button.backToLogin')}
                    </Button>
                </Flex>
            )}
        </Flex>
        <Flex
            align={"center"}
            justify={"center"}
            style={{width: '100%'}}
        >
            <NavLink to={ROUTES.LOGIN} replace={true}>
                {t('button.backToLogin')}
            </NavLink>
        </Flex>
    </Flex>
} 