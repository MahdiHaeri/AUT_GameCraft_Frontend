import {Flex, theme, Typography} from "antd";
import {Wave} from "../wave/Wave.jsx";

const {useToken} = theme

export function OnlineWorkshop({padding, backgroundColor}) {
    const {token} = useToken()

    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                backgroundColor: backgroundColor,
            }}
        >
            <Wave width={'100%'} height={'auto'} fill={'#4F7B79'}/>
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                style={{
                    width: '100%',
                    padding: padding,
                    paddingTop: '3rem',
                    paddingBottom: '3rem'
                }}
            >
                <Typography.Title level={1} style={{margin: 0}}>
                   Online Workshop
                </Typography.Title>
            </Flex>
            <Wave width={'100%'} height={'auto'} fill={token.colorPrimary} style={{transform: 'scaleY(-1) translateY(-2px)'}}/>
        </Flex>
    )
}
