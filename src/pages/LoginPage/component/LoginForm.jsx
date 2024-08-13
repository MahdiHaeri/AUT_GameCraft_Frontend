import {Button, Flex, Grid, Input, theme, Typography,} from "antd";
import {NavLink} from "react-router-dom";
import logo from '/src/assets/svg/light-3d-bulb.svg'
import ROUTES from "../../../config/routes.js";

const {useBreakpoint} = Grid;


const {useToken} = theme

export function LoginForm() {
    const {token} = useToken()
    const screens = useBreakpoint()

    return (
        <Flex
            vertical
            align={"center"}
            justify={"space-between"}
            style={
                {
                    padding: '1rem',
                    borderRadius: token.borderRadius,
                    width: '50%',
                    minWidth: '300px',
                    backgroundColor: token.colorBgBase,
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
                <img src={logo} alt={logo} width={'20%'} height={'auto'}/>

                <Input placeholder={"Email"} size={'large'} variant={'filled'}/>

                <Input.Password placeholder={"Password"} size={"large"} variant={'filled'}/>

                <Flex align={"center"} justify={"start"} style={{width: '100%'}}>
                    <NavLink to={"/forgot-password"} style={{fontSize: 'small'}}>Forgot Password?</NavLink>
                </Flex>
            </Flex>
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                style={{width: '100%'}}
                gap={"small"}
            >
                <Button type={"primary"} size={"large"} style={{width: '100%'}}>Login</Button>
                <Typography.Text type={'secondary'}> Don't have an account? <NavLink
                    to={ROUTES.SIGNUP}>Register</NavLink></Typography.Text>
            </Flex>
        </Flex>
    )
}
