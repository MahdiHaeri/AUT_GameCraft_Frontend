import {Avatar, Button, Flex, theme, Typography} from "antd";
import {
    InstagramOutlined,
    UserOutlined,
    XOutlined,
    YoutubeFilled
} from "@ant-design/icons";
import Constants from "/src/config/Constants.js";

const {useToken} = theme

export function StaffCard() {

    const {token} = useToken()

    return (
        <Flex
            align={"center"}
            justify={"center"}
            vertical
            style={{
                width: '400px',
                height: '300px',
                backgroundColor: 'white',
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
                src={Constants.avatarUrl}
            />
            <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}}>
                <Typography.Title level={4} style={{margin: 0, fontWeight: 'bolder', color: token.colorPrimary}}>Staff Name</Typography.Title>
                <Typography.Text type={'secondary'}>Staff Position</Typography.Text>
            </Flex>
            <Flex
                justify={"space-around"}
                align={"center"}
                style={{
                    width: '50%',
                    padding: token.padding,
                }}
            >
                <Button shape={'circle'} style={{color: 'purple'}} icon={<InstagramOutlined/>}></Button>
                <Button shape={'circle'} style={{color: 'black'}} icon={<XOutlined/>}></Button>
                <Button shape={'circle'} style={{color: 'red'}} icon={<YoutubeFilled/>}></Button>
            </Flex>
        </Flex>
    )
}
