import {Button, Divider, Flex, Grid, Input, theme, Typography, Upload} from "antd";
import {GameCard} from "../../../components/game/GameCard.jsx";
import {PlusOutlined} from "@ant-design/icons";

const {useToken} = theme
const {useBreakpoint} = Grid;

export function GameView() {
    const {token} = useToken()
    const screens = useBreakpoint();

    return (
        <Flex
            vertical={!screens.lg}
            flex={1}
            style={{
                width: '100%',
                // height: '100%',
                padding: token.padding,
            }}
            gap={"small"}
        >
            <Flex
                vertical
                align={"center"}
                justify={"space-between"}
                flex={2}
                style={{
                    height: '100%',
                }}
                gap={"large"}
            >
                <Flex
                    vertical
                    align={"center"}
                    justify={"center"}
                    style={{
                        width: '100%'
                    }}
                    gap={"small"}
                >
                    <Upload
                        type={"drag"}
                        multiple={false}
                        listType={'picture'}
                        showUploadList={false}
                        style={{
                            width: '100px',
                            height: '100px',
                            borderRadius: token.borderRadius,
                        }}
                    >
                        <Flex
                            vertical
                            align={"center"}
                            justify={"center"}
                            style={{
                                width: '100%',
                                height: '100%'
                            }}
                            gap={"small"}
                        >
                            <PlusOutlined/>
                            <Typography.Text>
                                Upload
                            </Typography.Text>
                        </Flex>
                    </Upload>
                    <Flex
                        style={{
                            width: '100%'
                        }}
                        gap={"small"}
                    >
                        <Input
                            variant={"filled"}
                            placeholder={"نام بازی"}
                            size={"large"}
                            allowClear
                        />
                        <Input
                            variant={"filled"}
                            placeholder={"لینک بازی"}
                            size={"large"}
                            allowClear
                        />
                    </Flex>

                    <Input.TextArea
                        variant={"filled"}
                        placeholder={"توضیحات بازی"}
                        autoSize={{minRows: 4, maxRows: 4}}
                        allowClear
                    />
                </Flex>

                <Button
                    block
                    type={"primary"}
                    size={"large"}
                >
                    ثبت بازی
                </Button>
            </Flex>
            <Divider
                variant={"dashed"}
                type={screens.lg ? "vertical" : "horizontal"}
                style={{height: '100%'}}
            >
                <Typography.Text type={"secondary"}>
                    Preview
                </Typography.Text>
            </Divider>
            <Flex
                flex={1}
                align={"start"}
                justify={"center"}
                style={{
                    height: '100%',
                }}
            >
                <GameCard/>
            </Flex>
        </Flex>
    )
}