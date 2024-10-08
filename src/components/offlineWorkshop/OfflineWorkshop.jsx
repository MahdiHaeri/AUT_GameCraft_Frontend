import {Flex, Grid, Typography} from "antd";
import {WorkshopCard} from "../workshopCard/WorkshopCard.jsx";

const {useBreakpoint} = Grid;

export function OfflineWorkshop({padding, backgroundColor}) {
    const screens = useBreakpoint();

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
            <Typography.Title
                level={screens.md ? 1 : 2}
                style={{
                    margin: '0',
                    fontWeight: 900,
                    textAlign: "center"
                }}
            >
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
