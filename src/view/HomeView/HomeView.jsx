import {Flex, Grid, theme} from "antd";
import backgroundPattern from "../../assets/svg/pattern.svg";
import {Sponsors} from "../../components/sponsor/Sponsors.jsx";
import {GameCraftIntro} from "../../components/introduction/GameCraftIntro.jsx";
import {AboutUs} from "../../components/aboutUs/AboutUs.jsx";
import {Prizes} from "../../components/prize/Prizes.jsx";
import {GameCraftTimeline} from "../../components/Timeline/GameCraftTimeline.jsx";

const {useToken} = theme
const { useBreakpoint } = Grid;

export function HomeView() {
    const {token} = useToken()
    const screens = useBreakpoint();

    return (
        <Flex
            align={"center"}
            justify={"center"}
            vertical
            style={{
                width: '100%',
                backgroundColor: token.colorPrimary,
                backgroundImage: `url(${backgroundPattern})`,
                padding: screens.lg ? '5rem' : '3rem'
                // padding: screens.xl ? '3rem 8rem' : screens.lg ? '3rem 6rem' : screens.md ? '3rem 4rem' : '3rem 2rem',
            }}
            gap={"large"}
        >
            <GameCraftIntro/>
            <GameCraftTimeline/>
            <Prizes/>
            <AboutUs/>
            <Sponsors />
        </Flex>
    )
}
