import {Flex, theme, Typography} from "antd";
import Constants from "../../../config/Constants.js";
import mahdiHaeri from '/src/assets/images/2024/staffs/mahdiHaeri.jpg'

const {useToken} = theme

export function TeamMemberCard() {
    const {token} = useToken()
    return (
        <Flex
            align={"center"}
            justify={"start"}
            style={{
                width: '100%',
                height: '80px',
                backgroundColor: token.colorBgContainer,
                boxShadow: token.boxShadowCard,
                borderRadius: token.borderRadius,
                padding: token.padding
            }}
            gap={"small"}
        >
            <img
                src={mahdiHaeri}
                alt={'user-image'}
                width={'auto'}
                height={'auto'}
                style={{
                    maxHeight: '100%',
                    maxWidth: '100%',
                    borderRadius: '50%'
                }}
            />
            <Typography.Text> Mahdi Haeri </Typography.Text>
        </Flex>
    )
}