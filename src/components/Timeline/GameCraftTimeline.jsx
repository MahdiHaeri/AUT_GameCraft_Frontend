import {Flex, theme, Timeline, Typography} from "antd";
import timelineImage1 from '/src/assets/svg/timline-1.svg'
import timelineImage2 from '/src/assets/svg/timline-2.svg'
import timelineImage3 from '/src/assets/svg/timline-3.svg'
import timelineImage4 from '/src/assets/svg/timline-4.svg'
import timelineImage5 from '/src/assets/svg/timline-5.svg'
import timelineImage6 from '/src/assets/svg/timline-6.svg'
import {TimelineDot} from "./component/TimelineDot.jsx";
import {TimelineLabel} from "./component/TimelineLabel.jsx";
import {TimelineChildren} from "./component/TimelineChildren.jsx";
import {useTranslation} from "react-i18next";
import bubbleImg from '/src/assets/svg/bubble-light-purple.svg'

const {useToken} = theme

export function GameCraftTimeline({padding, backgroundColor}) {
    const {token} = useToken();
    const {t} = useTranslation()

    const items = [
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={t('app.timeline.step1.title')} time={t('app.timeline.step1.schedule')}/>,
            label: <TimelineLabel logo={timelineImage1}/>
        },
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={t('app.timeline.step2.title')} time={t('app.timeline.step2.schedule')}/>,
            label: <TimelineLabel logo={timelineImage2}/>
        },
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={t('app.timeline.step3.title')} time={t('app.timeline.step3.schedule')}/>,
            label: <TimelineLabel logo={timelineImage3}/>
        },
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={t('app.timeline.step4.title')} time={t('app.timeline.step4.schedule')}/>,
            label: <TimelineLabel logo={timelineImage4}/>
        },
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={t('app.timeline.step5.title')} time={t('app.timeline.step5.schedule')}/>,
            label: <TimelineLabel logo={timelineImage5}/>
        },
        {
            dot: <TimelineDot/>,
            children: <TimelineChildren title={t('app.timeline.step6.title')} time={t('app.timeline.step6.schedule')}/>,
            label: <TimelineLabel logo={timelineImage6}/>
        },
    ]
    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                padding: padding,
                backgroundColor: backgroundColor,
                position: 'relative',
                zIndex: '10'
            }}
            gap={"large"}
        >
            <img
                src={bubbleImg}
                alt={'bubble-img'}
                width={'auto'}
                height={'50%'}
                style={{
                    position: 'absolute',
                    zIndex: '-1',
                    opacity: '0.5',
                }}
            />
            <Typography.Title style={{marginBottom: '2rem'}}>
                {t('app.timeline.title')}
            </Typography.Title>
            <Timeline items={items} mode={'alternate'} style={{width: '100%'}}/>
        </Flex>
    )
}
