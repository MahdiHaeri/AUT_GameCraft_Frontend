import {Flex} from "antd";

export function TimelineLabel({logo}) {
    return (
        <Flex vertical align={"center"} justify={"start"} style={{width: '100%', height: "auto"}}>
            <img src={logo} alt={'timeline-1'} width={'30%'} height={'auto'}/>
        </Flex>
    )
}
