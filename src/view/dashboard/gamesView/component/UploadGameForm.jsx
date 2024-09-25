import {Button, Flex, Input, theme, Typography, Upload} from "antd";
import {PlusOutlined} from "@ant-design/icons";

const {useToken} = theme

export function UploadGameForm() {
    const {token} = useToken()

    return (
        <Flex
            vertical
            align={"center"}
            justify={"space-between"}
            style={{
                width: '100%',
            }}
            gap={"small"}
        >
            <Upload
                type={"drag"}
                listType={'text'}
                // showUploadList={false}
                style={{
                    height: '100px',
                    width: '100px',
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
                vertical
                align={"center"}
                justify={"center"}
                style={{
                    width: '100%'
                }}
                gap={"small"}
            >
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
    )
}