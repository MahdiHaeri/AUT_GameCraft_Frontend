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
            }}
        >
            <Flex
                align={"center"}
                justify={"center"}
                style={{
                    width: '100%',
                    height: '100%',
                    borderRadius: '50%',
                    backgroundColor: 'darkgreen',
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
        </Flex>
    )
}
