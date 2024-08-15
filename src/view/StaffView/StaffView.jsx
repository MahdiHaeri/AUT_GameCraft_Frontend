import {StaffContainer} from "./component/StaffContainer.jsx";
import {Flex, theme} from "antd";
import backgroundPattern from '/src/assets/svg/pattern.svg'

const {useToken} = theme


export function StaffView() {
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
                paddingTop: '5rem',
            }}
        >
            <StaffContainer/>
        </Flex>
    )
}
