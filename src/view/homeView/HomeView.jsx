import {Flex, Grid, theme} from "antd";
import {Sponsors} from "../../components/sponsor/Sponsors.jsx";
import {GameCraftIntro} from "../../components/introduction/GameCraftIntro.jsx";
import {AboutUs} from "../../components/aboutUs/AboutUs.jsx";
import {Prizes} from "../../components/prize/Prizes.jsx";
import {GameCraftTimeline} from "../../components/Timeline/GameCraftTimeline.jsx";
import {Wave} from "../../components/wave/Wave.jsx";
import {OnlineWorkshop} from "../../components/onlineWorkshop/OnlineWorkshop.jsx";
import {OfflineWorkshop} from "../../components/offlineWorkshop/OfflineWorkshop.jsx";

const {useToken} = theme
const {useBreakpoint} = Grid;

export function HomeView() {
    const {token} = useToken()
    const screens = useBreakpoint();
    const homeViewPadding = screens.lg ? '3rem 5rem' : '3rem 2rem'
    // padding: screens.xl ? '3rem 8rem' : screens.lg ? '3rem 6rem' : screens.md ? '3rem 4rem' : '3rem 2rem',

    return (
        <Flex
            align={"center"}
            justify={"center"}
            vertical
            style={{
                width: '100%',
                backgroundColor: token.colorBgBase,
            }}
        >
            <GameCraftIntro padding={homeViewPadding} backgroundColor={token.colorPrimary}/>
            <Wave width={'100%'} height={'auto'} fill={token.colorPrimary}/>

            <GameCraftTimeline padding={homeViewPadding} backgroundColor={token.colorBgBase}/>
            <Prizes padding={homeViewPadding} backgroundColor={token.colorBgBase}/>

            <Wave width={'100%'} height={'auto'} fill={'#4F7B79'} style={{transform: 'scaleY(-1) translateY(-2px)'}}/>
            <OfflineWorkshop padding={homeViewPadding} backgroundColor={'#4F7B79'}/>
            <OnlineWorkshop padding={homeViewPadding} backgroundColor={token.colorAction}/>
            <Sponsors padding={homeViewPadding} backgroundColor={token.colorPrimary}/>
            <Wave width={'100%'} height={'auto'} fill={token.colorPrimary}/>

            <AboutUs padding={homeViewPadding} backgroundColor={token.colorBgBase}/>
            <Wave width={'100%'} height={'auto'} fill={token.colorPrimary} style={{transform: 'scaleY(-1) translateY(-2px)'}}/>
        </Flex>
    )
}
