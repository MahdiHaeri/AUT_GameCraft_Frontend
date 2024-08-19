import {Flex, Typography} from "antd";

export function TimelineChildren({title, time}) {
    return (
        <Flex
            vertical
            align={"center"}
            justify={"start"}
            style={{width: '100%', height: "auto", aspectRatio: '2/1'}}
            gap={"small"}
        >
            <Typography.Title level={1} style={{margin: 0}}>
                {title}
            </Typography.Title>
            <Typography.Title level={3} style={{margin: 0}}>
                {time}
            </Typography.Title>
        </Flex>
    )
}
