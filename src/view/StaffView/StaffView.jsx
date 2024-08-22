import {StaffContainer} from "./component/StaffContainer.jsx";
import {Flex, Grid, theme} from "antd";
import backgroundPattern from '/src/assets/svg/pattern.svg'

const {useToken} = theme
const {useBreakpoint} = Grid;

export function StaffView() {
    const {token} = useToken()
    const screens = useBreakpoint();
    const staffViewPadding = screens.lg ? '3rem 5rem' : '3rem 2rem'

    return (
        <Flex
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                backgroundColor: token.colorPrimary,
                backgroundImage: `url(${backgroundPattern})`,
                padding: staffViewPadding
            }}
        >
            <StaffContainer/>
        </Flex>
    )
}
