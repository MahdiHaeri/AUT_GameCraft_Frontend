import {Flex, Grid, theme, Typography} from "antd";
import {Wave} from "../wave/Wave.jsx";
import {WorkshopCard} from "../workshopCard/WorkshopCard.jsx";

const {useToken} = theme
const {useBreakpoint} = Grid;

export function OnlineWorkshop({padding, backgroundColor}) {
    const {token} = useToken()
    const screens = useBreakpoint();

    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                backgroundColor: backgroundColor,
            }}
        >
            <Wave width={'100%'} height={'auto'} fill={'#4F7B79'}/>
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                style={{
                    width: '100%',
                    padding: padding,
                }}
                gap={"large"}
            >
                <Typography.Title
                    level={screens.md ? 1 : 2}
                    style={{
                        margin: 0,
                        fontWeight: 900,
                        textAlign: "center"
                    }}
                >
                    Online Workshop
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
                </Flex>
            </Flex>
            <Wave width={'100%'} height={'auto'} fill={token.colorPrimary}
                  style={{transform: 'scaleY(-1) translateY(-2px)'}}/>
        </Flex>
    )
}
