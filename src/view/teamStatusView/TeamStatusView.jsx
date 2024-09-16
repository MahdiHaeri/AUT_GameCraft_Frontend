import {Divider, Flex, theme, Typography} from "antd";
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
                // backgroundColor: 'red',
                // padding: token.padding
            }}
            gap={"small"}
        >
            <Typography.Title level={3}>
                {t('app.dashboard.teamStatus.label')}
            </Typography.Title>
            <Divider variant={"dashed"} type={'horizontal'}/>
            <Typography.Title level={3}>
                {t('app.dashboard.teamStatus.teamName')}
            </Typography.Title>
            {/*<Divider variant={"dashed"} type={'horizontal'}/>*/}
            <TeamMemberContainer/>
        </Flex>
    )
}