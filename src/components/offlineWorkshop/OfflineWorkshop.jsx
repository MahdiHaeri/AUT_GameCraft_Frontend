import {Flex, Typography} from "antd";

export function OfflineWorkshop({padding, backgroundColor}) {
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
        >
            <Typography.Title level={1} style={{margin: '0'}}>
                Offline Workshop
            </Typography.Title>
        </Flex>
    )
}
