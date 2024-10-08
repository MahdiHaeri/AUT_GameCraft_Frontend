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
            <Typography.Title
                level={2}
                style={{
                    margin: 0,
                    fontWeight: 800
                }}
            >
                {title}
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
                {time}
            </Typography.Title>
        </Flex>
    )
}
