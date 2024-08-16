import {Button, Divider, Flex, Input, theme, Typography,} from "antd";
import {NavLink} from "react-router-dom";
import logo from '/src/assets/svg/light-3d-bulb.svg'
import ROUTES from "../../../config/routes.js";


const {useToken} = theme

export function SignUpForm() {
    const {token} = useToken()

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

                <Input placeholder={"Display Name"} size={'large'} variant={'filled'}/>
                <Input placeholder={"Email"} size={'large'} variant={'filled'}/>
                <Input placeholder={"Phone Number"} size={'large'} variant={'filled'}/>
                <Input.Password placeholder={"Password"} size={"large"} variant={'filled'}/>
            </Flex>
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                style={{width: '100%'}}
                gap={"small"}
            >
                <Button type={"primary"} size={"large"} style={{width: '100%'}}>Register</Button>
                <Typography.Text type={'secondary'}>
                    Already have an account?
                    <NavLink to={ROUTES.LOGIN} replace={true}>Login</NavLink>
                </Typography.Text>
            </Flex>
        </Flex>
    )
}
