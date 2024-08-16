import dotLogo from '/src/assets/images/logo/hayahool.png'
import {Avatar, Flex} from "antd";

export function TimelineDot() {
    return (
        <Flex
            align={"center"}
            justify={"center"}
            style={{
                width: '5vw',
                aspectRatio: 1,
                borderRadius: '50%',
                backgroundColor: 'darkgreen',
                overflow: "hidden"
            }}>
            <Flex
                align={"center"}
                justify={"center"}
                style={{
                    width: '80%',
                    aspectRatio: 1,
                    borderRadius: '50%',
                    backgroundColor: 'white',
                    overflow: "hidden"
                }}>
                <Avatar src={dotLogo} shape={"square"} style={{width: '80%', height: '80%'}}/>
            </Flex>
        </Flex>
    )
}
