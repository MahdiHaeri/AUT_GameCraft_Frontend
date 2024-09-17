import {Flex, theme, Typography} from "antd";
import {useTranslation} from "react-i18next";

const {useToken} = theme

export function TeamNameCard() {
    const {token} = useToken()
    const {t} = useTranslation()

    return (
        <Flex align={"center"} justify={"center"}
              style={{
                  width: '30%',
                  height: '80px',
                  borderRadius: token.borderRadius
              }}
        >
            <Typography.Title level={3} style={{margin: 0, fontWeight: 900, color: token.colorAction}}>
                {t('app.dashboard.teamStatus.teamName')}
            </Typography.Title>
        </Flex>
    )
}