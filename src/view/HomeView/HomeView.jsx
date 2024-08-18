import {Flex, Grid, theme} from "antd";
import backgroundPattern from "../../assets/svg/pattern.svg";
import {Sponsors} from "../../components/sponsor/Sponsors.jsx";
import {GameCraftIntro} from "../../components/introduction/GameCraftIntro.jsx";
import {AboutUs} from "../../components/aboutUs/AboutUs.jsx";
import {Prizes} from "../../components/prize/Prizes.jsx";
import {GameCraftTimeline} from "../../components/Timeline/GameCraftTimeline.jsx";
import wavePurple from '/src/assets/svg/wave-purple.svg'
import wavePurpleLite from '/src/assets/svg/wave-purple-light.svg'
import waveGreen from '/src/assets/svg/wave-green.svg'
import router from "../../routes/index.jsx";

const {useToken} = theme
const {useBreakpoint} = Grid;

export function HomeView() {
    const {token} = useToken()
    const screens = useBreakpoint();
    const homeViewPadding = screens.lg ? '0 5rem' : '0 3rem'

    return (
        <Flex
            align={"center"}
            justify={"center"}
            vertical
            style={{
                width: '100%',
                backgroundColor: 'white',
                // backgroundColor: token.colorPrimary,
                // backgroundImage: `url(${backgroundPattern})`,
                // padding: screens.xl ? '3rem 8rem' : screens.lg ? '3rem 6rem' : screens.md ? '3rem 4rem' : '3rem 2rem',
            }}
        >
            <GameCraftIntro padding={homeViewPadding} backgroundColor={token.colorPrimary}/>
            <img src={wavePurple} alt={'wave-purple'} width={'100%'} height={'auto'}/>
            <GameCraftTimeline padding={homeViewPadding} backgroundColor={'white'}/>
            <Prizes padding={homeViewPadding} backgroundColor={'white'}/>
            <img
                src={wavePurple}
                alt={'wave-purple'}
                width={'100%'}
                height={'auto'}
                style={{transform: 'scaleY(-1) translateY(-2px)'}}
            />
            <Sponsors padding={homeViewPadding} backgroundColor={token.colorPrimary}/>
            <img src={wavePurple} alt={'wave-purple'} width={'100%'} height={'auto'}/>
            <AboutUs padding={homeViewPadding} backgroundColor={'white'}/>
            <img
                src={wavePurple}
                alt={'wave-purple'}
                width={'100%'}
                height={'auto'}
                style={{transform: 'scaleY(-1) translateY(-2px)'}}
            />
        </Flex>
    )
}
