import {Flex, Typography} from "antd";
import {WorkshopCard} from "../workshopCard/WorkshopCard.jsx";

export function OfflineWorkshop({padding, backgroundColor}) {
    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                padding: padding,
                backgroundColor: backgroundColor
            }}
            gap={"large"}
        >
            <Typography.Title level={1} style={{margin: '0'}}>
                Offline Workshop
            </Typography.Title>
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                style={{width: '100%'}}
                gap={"small"}
            >
                <WorkshopCard/>
                <WorkshopCard/>
                <WorkshopCard/>
                <WorkshopCard/>
                <WorkshopCard/>
                <WorkshopCard/>
                <WorkshopCard/>
            </Flex>
        </Flex>
    )
}
