import {Button, Flex, theme, Typography} from "antd";
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
            <Flex
                align={"center"}
                justify={"center"}
                style={{
                    width: '100%',
                }}
                gap={"middle"}
            >
                <Typography.Title
                    level={4}
                    style={{
                        color: token.colorAction,
                        fontWeight: 700,
                        margin: 0
                    }}
                >
                    ۱۲۰۰۰۰ تومان
                </Typography.Title>
                <Button type={'primary'} size={"large"} style={{backgroundColor: token.colorAction}}>
                    پرداخت
                </Button>
            </Flex>

        </Flex>
    )
}