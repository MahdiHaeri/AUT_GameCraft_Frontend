import {Button, Divider, Flex, Grid, Input, theme, Typography, Upload} from "antd";
import {GameCard} from "../../../components/game/GameCard.jsx";
import {PlusOutlined} from "@ant-design/icons";
import {UploadGameForm} from "./component/UploadGameForm.jsx";

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
                padding: token.padding,
                paddingTop: 0
            }}
            gap={"small"}
        >
            <Flex
                align={"start"}
                justify={"center"}
                flex={2}
            >
                <UploadGameForm/>
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