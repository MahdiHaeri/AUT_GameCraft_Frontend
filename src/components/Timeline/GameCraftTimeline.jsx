import {Flex, theme, Timeline} from "antd";
import timelineImage1 from '/src/assets/svg/timline-1.svg'
import timelineImage2 from '/src/assets/svg/timline-2.svg'
import timelineImage3 from '/src/assets/svg/timline-3.svg'
import timelineImage4 from '/src/assets/svg/timline-4.svg'
import timelineImage5 from '/src/assets/svg/timline-5.svg'
import timelineImage6 from '/src/assets/svg/timline-6.svg'
import {TimelineDot} from "./component/TimelineDot.jsx";
import {TimelineLabel} from "./component/TimelineLabel.jsx";
import {TimelineChildren} from "./component/TimelineChildren.jsx";

const {useToken} = theme

export function GameCraftTimeline() {
    const {token} = useToken();

    const items = [
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={"Register"} time={"1st Augost"}/>,
            label: <TimelineLabel logo={timelineImage1}/>
        },
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={"Register"} time={"1st Augost"}/>,
            label: <TimelineLabel logo={timelineImage2}/>
        },
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={"Register"} time={"1st Augost"}/>,
            label: <TimelineLabel logo={timelineImage3}/>
        },
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={"Register"} time={"1st Augost"}/>,
            label: <TimelineLabel logo={timelineImage4}/>
        },
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={"Register"} time={"1st Augost"}/>,
            label: <TimelineLabel logo={timelineImage5}/>
        },
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={"Register"} time={"1st Augost"}/>,
            label: <TimelineLabel logo={timelineImage6}/>
        },
    ]
    return (
        <Flex
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                padding: token.padding
            }}
        >
            <Timeline items={items} mode={'alternate'} style={{width: '100%'}}/>
        </Flex>
    )
}
