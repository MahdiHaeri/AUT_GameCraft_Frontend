import {Avatar, Button, Flex, theme, Typography} from "antd";
import {
    InstagramOutlined,
    UserOutlined,
    XOutlined,
    YoutubeFilled
} from "@ant-design/icons";

const {useToken} = theme

export function StaffCard({staff}) {

    const {token} = useToken()

    return (
        <Flex
            align={"center"}
            justify={"center"}
            vertical
            style={{
                width: '100%',
                height: '300px',
                backgroundColor: token.colorFillAlter,
                boxShadow: '0 0 10px rgba(0,0,0,0.1)',
                borderRadius: '2rem',
                padding: token.padding,
                position: 'relative',
            }}
            gap={"small"}
        >
            <Avatar
                size={140}
                icon={<UserOutlined/>}
                src={staff.imageUrl}
            />
            <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}}>
                <Typography.Title level={4} style={{margin: 0, fontWeight: 'bolder'}}>
                    {staff.name}
                </Typography.Title>
                <Typography.Text type={'secondary'}>
                    {staff.role}
                </Typography.Text>
            </Flex>
            <Flex
                justify={"space-around"}
                align={"center"}
                style={{
                    width: '100%',
                    padding: token.padding,
                }}
            >
                <Button type={"text"} shape={'circle'} icon={<InstagramOutlined/>}></Button>
                <Button type={"text"} shape={'circle'} icon={<XOutlined/>}></Button>
                <Button type={"text"} shape={'circle'} icon={<YoutubeFilled/>}></Button>
            </Flex>
        </Flex>
    )
}
