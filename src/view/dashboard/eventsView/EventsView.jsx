import {Flex, theme, Typography} from "antd";
import {WorkshopCard} from "../../../components/workshopCard/WorkshopCard.jsx";

const {useToken} = theme

export function EventsView() {
    const {token} = useToken()

    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                padding: token.padding
            }}
            gap={"large"}
        >
            <Flex
                vertical
                align={"start"}
                justify={"center"}
                style={{
                    width: '100%',
                }}
                gap={"small"}
            >
                <Typography.Title level={4} style={{fontWeight: 800}}>
                    کارگاه ها
                </Typography.Title>
                <WorkshopCard/>
                <WorkshopCard/>
                <WorkshopCard/>
            </Flex>

            <Flex
                vertical
                align={"start"}
                justify={"center"}
                style={{
                    width: '100%',
                }}
                gap={"small"}
            >
                <Typography.Title level={4} style={{fontWeight: 800}}>
                    ارائه ها
                </Typography.Title>
                <WorkshopCard/>
                <WorkshopCard/>
                <WorkshopCard/>
                <WorkshopCard/>
            </Flex>
        </Flex>
    )
}