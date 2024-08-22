import {Flex, Grid, theme} from "antd";
import backgroundPattern from "../../assets/svg/pattern.svg";
import {Faq} from "../../components/Faq/Faq.jsx";

const {useToken} = theme
const {useBreakpoint} = Grid;

export function FaqView() {
    const {token} = useToken()
    const screens = useBreakpoint();
    const faqViewPadding = screens.lg ? '3rem 5rem' : '3rem 2rem'

    return (
        <Flex
            align={"center"}
            justify={"center"}
            vertical
            style={{
                width: '100%',
                backgroundColor: token.colorPrimary,
                backgroundImage: `url(${backgroundPattern})`,
                padding: faqViewPadding,
            }}
            gap={"large"}
        >
            <Faq/>
        </Flex>)
}
