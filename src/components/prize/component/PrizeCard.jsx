import {Flex, Typography} from "antd";
import {useTranslation} from "react-i18next";

export function PrizeCard({teamImage, teamTitle, teamPrize}) {
    const {t} = useTranslation()
    return (
        <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}} gap={"small"}>
            <img src={teamImage} alt={'team-image'} width={'40%'} height={'auto'}/>
            <Typography.Title
                level={2}
                style={{
                    margin: 0,
                    fontWeight: 800
                }}
            >
                {teamTitle}
            </Typography.Title>
            <Typography.Title
                level={3}
                type={"secondary"}
                style={{
                    margin: 0,
                    fontFamily: 'Vazirmatn',
                    fontWeight: 400
                }}
            >
                {teamPrize}
            </Typography.Title>
        </Flex>
    )
}
