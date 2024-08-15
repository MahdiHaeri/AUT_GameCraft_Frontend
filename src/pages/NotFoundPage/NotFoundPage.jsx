import {Helmet} from "react-helmet-async";
import {Button, Flex, Typography} from "antd";
import sadLogo from '/src/assets/svg/sad-craft.svg'
import backgroundPattern from '/src/assets/svg/pattern.svg'
import {theme} from "antd";
import {useNavigate} from "react-router";

const {useToken} = theme

export function NotFoundPage() {
    const {token} = useToken()
    const navigate = useNavigate()

    return (
        <>
            <Helmet>
                <title> 404 Page Not Found </title>
            </Helmet>
            <Flex style={{width: '100vw', height: '100vh'}}>
                <Flex
                    align={"center"}
                    justify={"center"}
                    vertical
                    style={{
                        width: '100%',
                        height: '100%',
                        backgroundImage: `url(${backgroundPattern})`,
                        backgroundColor: '#222',
                        position: "relative"
                    }}
                    gap={"large"}
                >
                    <img src={sadLogo} alt={"404"} style={{height: 'auto', width: 'auto'}}/>
                    <Typography.Title type={"danger"}> 404 Page Not Found </Typography.Title>
                    <Button
                        type={'primary'}
                        size={"large"}
                        style={{
                            backgroundColor: token.colorAction,
                            color: 'black',
                            fontWeight: 'bolder',
                            position: "absolute",
                            bottom: '10%'
                        }}
                        onClick={() => navigate('/', {replace: true})}
                    >
                        Back to Home
                    </Button>
                </Flex>
            </Flex>
        </>
    )
}
