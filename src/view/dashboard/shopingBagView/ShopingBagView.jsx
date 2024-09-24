import {Flex, theme} from "antd";
import {WorkshopCard} from "../../../components/workshopCard/WorkshopCard.jsx";
import {PayBox} from "./component/PayBox.jsx";

const {useToken} = theme

export function ShoppingBagView() {
    const {token} = useToken()
    return (
        <Flex
            vertical
            flex={1}
            style={{
                width: '100%',
                overflow: "hidden"
            }}
        >
            <Flex
                vertical
                align={"center"}
                justify={"center"}
                flex={1}
                style={{
                    width: '100%',
                    padding: token.padding,
                    paddingBottom: 0,
                    paddingTop: 0,
                    overflow: "hidden",
                }}
                gap={"small"}
            >
                <Flex
                    vertical
                    style={{
                        width: '100%',
                        height: '100%',
                        overflowY: "scroll",
                        borderRadius: token.borderRadius
                    }}
                    gap={"small"}
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
                </Flex>
            </Flex>
            <PayBox/>
        </Flex>
    )
}