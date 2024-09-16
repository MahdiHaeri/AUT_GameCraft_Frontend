import {Flex, theme, Typography} from "antd";
import mahdiHaeri from '/src/assets/images/2024/staffs/mahdiHaeri.jpg'
import crown from '/src/assets/images/logo/crown.png'

const {useToken} = theme

export function TeamMemberCard({isHead}) {
    const {token} = useToken()
    return (
        <Flex
            align={"center"}
            justify={"start"}
            style={{
                width: '100%',
                height: '80px',
                backgroundColor: isHead ? "rgba(255,215,0, 0.5)" : token.colorBgContainer,
                // backgroundColor: token.colorBgContainer,
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
            {isHead ?
                <img
                    src={crown}
                    alt={'crown'}
                    width={'auto'}
                    height={'auto'}
                    style={{
                        maxWidth: '45px',
                        maxHeight: '45px',
                        position: 'absolute',
                        // left: 0,
                        right: -18,
                        top: -30,
                        rotate: '30deg'
                    }}
                /> : <></>
            }
        </Flex>
    )
}