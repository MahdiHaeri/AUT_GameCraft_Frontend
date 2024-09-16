import {Divider, Flex, theme, Typography} from "antd";
import {useTranslation} from "react-i18next";
import {TeamMemberContainer} from "./component/TeamMemberContainer.jsx";
import {TeamNameCard} from "./component/TeamNameCard.jsx";


const {useToken} = theme

export function TeamStatusView() {
    const {t} = useTranslation()
    const {token} = useToken()

    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
            }}
            // gap={"small"}
        >
            <Typography.Title level={3} style={{margin: 0}}>
                {t('app.dashboard.teamStatus.label')}
            </Typography.Title>
            <Divider type={"horizontal"} variant={"dashed"}/>
            <TeamNameCard/>
            <TeamMemberContainer/>
        </Flex>
    )
}