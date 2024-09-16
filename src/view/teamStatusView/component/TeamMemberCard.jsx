import {Flex, theme, Typography} from "antd";
import mahdiHaeri from '/src/assets/images/2024/staffs/mahdiHaeri.jpg'
import crown from '/src/assets/images/logo/crown.png'
import CrownBadge from "./CrownBadge.jsx";

const {useToken} = theme

export function TeamMemberCard({isHead}) {
    const {token} = useToken()
    const memberCard = (
        <Flex
            align={"center"}
            justify={"start"}
            style={{
                width: '100%',
                height: '80px',
                backgroundColor: isHead ? "rgba(255,215,0, 0.5)" : token.colorBgContainer,
                boxShadow: token.boxShadowCard,
                borderRadius: token.borderRadius,
                padding: token.padding,
                position: 'relative'
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

    return (
        isHead ? <CrownBadge>{memberCard}</CrownBadge> : memberCard
    )
}