import {Button, ConfigProvider, Divider, Flex, theme, Typography} from "antd";

const {useToken} = theme

export function PayBox() {
    const {token} = useToken()

    return (
        <ConfigProvider theme={{token: {colorPrimary: token.colorAction}}}>
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                style={{
                    width: '100%',
                    padding: token.padding,
                    paddingTop: 0,
                    zIndex: 1000,
                }}
                gap={"small"}
            >
                <Divider variant={"dashed"} type={"horizontal"}/>
                <Flex
                    align={"center"}
                    justify={"space-between"}
                    style={{
                        width: '100%',
                    }}
                    gap={"middle"}
                >
                    <Typography.Text>
                        کد تخفیف دارید؟
                    </Typography.Text>
                    <Button type={'dashed'}>
                        وارد کردن
                    </Button>
                </Flex>
                <Flex
                    vertical
                    align={"center"}
                    justify={"center"}
                    style={{
                        width: '100%',
                    }}
                    gap={"middle"}
                >
                    <Button type={'primary'} size={"large"} block>
                        <Flex align={"center"} justify={"center"} gap={"small"}>
                            <Typography.Text style={{fontWeight: 900, color: 'white'}}>
                                پرداخت
                            </Typography.Text>
                            <Typography.Text style={{fontWeight: 900, color: 'white'}}>
                                ۱۲۰۰۰۰ تومان
                            </Typography.Text>
                        </Flex>
                    </Button>
                </Flex>
            </Flex>
        </ConfigProvider>
    )
}