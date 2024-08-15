import {Flex, theme} from "antd";
import backgroundPattern from "../../assets/svg/pattern.svg";
import {Sponsors} from "../../components/sponsor/Sponsors.jsx";

const {useToken} = theme

export function HomeView() {
    const {token} = useToken()

    return (
        <Flex
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                backgroundColor: token.colorPrimary,
                backgroundImage: `url(${backgroundPattern})`,
                padding: '5rem',
            }}
        >
            <Sponsors />
        </Flex>
    )
}
