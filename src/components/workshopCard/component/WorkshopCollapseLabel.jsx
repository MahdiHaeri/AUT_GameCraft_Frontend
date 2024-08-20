import {Button, Flex, theme, Typography} from "antd";
import {CaretRightOutlined} from "@ant-design/icons";
import {useTranslation} from "react-i18next";

const {useToken} = theme

export function WorkshopCollapseLabel({isActive}) {
    const {token} = useToken()
    const {t, i18n} = useTranslation()

    return (
        <Flex align={"center"} justify={"center"} style={{width: '100%'}} gap={"small"}>
            <CaretRightOutlined style={{rotate: isActive ? '-90deg' : '90deg', transition: '.3s'}}/>
            <Flex align={"center"} justify={"space-between"} style={{width: '100%'}}>
                <Typography.Text>Workshop Title</Typography.Text>
                <Typography.Text>Start Time</Typography.Text>
                <Typography.Text>Capacity 10</Typography.Text>
                <Button
                    type={"dashed"}
                    style={{
                        zIndex: '100',
                    }}
                    onClick={(event) => {
                        event.stopPropagation()
                    }}
                >
                    Register
                </Button>
            </Flex>
        </Flex>
    )
}
