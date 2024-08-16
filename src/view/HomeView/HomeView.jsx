import {Flex, theme} from "antd";
import backgroundPattern from "../../assets/svg/pattern.svg";
import {Sponsors} from "../../components/sponsor/Sponsors.jsx";
import {GameCraftIntro} from "../../components/introduction/GameCraftIntro.jsx";
import {AboutUs} from "../../components/aboutUs/AboutUs.jsx";
import {Prizes} from "../../components/prize/Prizes.jsx";
import {GameCraftTimeline} from "../../components/Timeline/GameCraftTimeline.jsx";

const {useToken} = theme

export function HomeView() {
    const {token} = useToken()

    return (
        <Flex
            align={"center"}
            justify={"center"}
            vertical
            style={{
                width: '100%',
                backgroundColor: token.colorPrimary,
                backgroundImage: `url(${backgroundPattern})`,
                padding: '5rem',
            }}
            gap={"large"}
        >
            <GameCraftIntro/>
            <AboutUs/>
            <GameCraftTimeline/>
            <Prizes/>
            <Sponsors />
        </Flex>
    )
}
