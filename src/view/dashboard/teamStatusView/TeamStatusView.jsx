import {Flex, theme, Typography} from "antd";
import {useTranslation} from "react-i18next";
import {TeamMemberContainer} from "./component/TeamMemberContainer.jsx";


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
        >
            <Typography.Title level={3} style={{margin: 0, fontWeight: 900, color: token.colorAction}}>
                {t('app.dashboard.teamStatus.teamName')}
            </Typography.Title>
            <TeamMemberContainer/>
        </Flex>
    )
}