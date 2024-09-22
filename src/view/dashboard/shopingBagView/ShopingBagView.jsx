import {Button, ConfigProvider, Flex, theme, Typography} from "antd";
import {WorkshopCard} from "../../../components/workshopCard/WorkshopCard.jsx";

const {useToken} = theme

export function ShoppingBagView() {
    const {token} = useToken()
    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
            }}
            gap={"large"}
        >
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
            <WorkshopCard/>
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
                <ConfigProvider
                    theme={
                        {
                            token: {
                                colorPrimary: token.colorAction
                            }
                        }
                    }
                >
                    <Button type={'dashed'}>
                        وارد کردن
                    </Button>
                </ConfigProvider>
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
                <ConfigProvider
                    theme={
                        {
                            token: {
                                colorPrimary: token.colorAction
                            }
                        }
                    }
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
                </ConfigProvider>
            </Flex>

        </Flex>
    )
}