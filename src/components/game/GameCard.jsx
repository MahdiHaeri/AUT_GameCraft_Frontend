import {Button, Flex, theme, Typography} from "antd";
import testImage from '/src/assets/images/logo/gameTestImage.jpg'
import {HeartOutlined, HeartTwoTone} from "@ant-design/icons";

const {useToken} = theme

export function GameCard() {
    const {token} = useToken()

    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                height: '450px',
                padding: token.paddingXS,
                borderRadius: token.borderRadius,
                backgroundColor: token.colorBgContainer,
                boxShadow: '0 0 10px rgba(0,0,0,0.1)'
            }}
        >
            <Flex
                vertical
                flex={1}
                align={"center"}
                justify={"center"}
                style={{
                    width: '100%',
                }}
                gap={"small"}
            >
                <img
                    src={testImage}
                    width={100}
                    height={100}
                    style={{
                        borderRadius: token.borderRadius
                    }}
                    alt={'testImage'}
                />

                <Typography.Title level={4} style={{fontWeight: 900, margin: 0}}>
                    Game Name
                </Typography.Title>
            </Flex>

            <Flex
                vertical
                flex={2}
                align={"center"}
                justify={"space-between"}
                style={{
                    width: '100%',
                    borderRadius: token.borderRadius,
                    padding: token.paddingSM
                }}
            >
                <Typography.Paragraph>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Asperiores dicta obcaecati quae! Ab
                    aspernatur blanditiis dignissimos eum fugiat itaque maxime modi nisi non omnis ratione repellat sed
                    suscipit, totam vero.
                </Typography.Paragraph>

                <Flex
                    align={"center"}
                    justify={"center"}
                    style={{
                        width: '100%'
                    }}
                    gap={"small"}
                >
                    <Button
                        type={"dashed"}
                        shape={"circle"}
                        size={"large"}
                        icon={<HeartOutlined/>}
                    />
                    <Button
                        type={"dashed"}
                        size={"large"}
                        block
                    >
                        Download
                    </Button>
                </Flex>
            </Flex>
        </Flex>
    )
}