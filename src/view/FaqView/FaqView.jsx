import {Flex, theme} from "antd";
import backgroundPattern from "../../assets/svg/pattern.svg";
import {Faq} from "../../components/Faq/Faq.jsx";

const {useToken} = theme

export function FaqView() {
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
            <Faq/>
        </Flex>)
}
