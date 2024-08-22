import {Collapse, Flex, theme} from "antd";
import {WorkshopCollapseLabel} from "./component/WorkshopCollapseLabel.jsx";
import {WorkshopCollapseChildren} from "./component/WorkshopCollapseChildren.jsx";
import {useState} from "react";

const {useToken} = theme

export function WorkshopCard() {
    const {token} = useToken()
    const [isActive, setIsActive] = useState()

    const items = [
        {
            key: '1',
            label: <WorkshopCollapseLabel isActive={isActive}/>,
            children: <WorkshopCollapseChildren/>,
            showArrow: false
        },
    ]

    return (
        <Flex
            align={"stretch"}
            justify={"center"}
            style={{
                width: '100%',
                backgroundColor: '#FFE0B1',
                borderRadius: token.borderRadius,
                overflow: "hidden"
            }}
        >
            <div style={{height: '100%', flex: 2}}/>
            <Collapse
                onChange={() => setIsActive(!isActive)}
                bordered={false}
                size={"large"}
                style={{
                    width: '100%',
                    background: token.colorBgBase,
                    borderRadius: 0,
                    flex: 100,
                }}
                items={items}
            />
        </Flex>
    )
}
