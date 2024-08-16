import {Flex, theme, Typography} from "antd";

const {useToken} = theme

export function Faq() {
    const {token} = useToken()

    return (
        <Flex
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                backgroundColor: token.colorBgBase,
                borderRadius: token.borderRadius,
                padding: '3rem 3rem',
            }}
            vertical
        >
            <Typography.Title level={1} style={{fontWeight: "bolder", color: token.colorPrimary}}>Competition conditions</Typography.Title>
            <Flex
                vertical
                align={"start"}
                justify={"center"}
                style={{width: '100%'}}
            >
                <Typography.Title level={3}>
                    How to participate?
                </Typography.Title>
                <Typography.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi at commodi debitis eaque error, et exercitationem fugit harum impedit incidunt ipsam itaque minus neque, optio perspiciatis praesentium quasi rerum saepe sunt ullam veniam voluptas! Accusamus assumenda atque autem commodi cupiditate dolores, ex impedit ipsum itaque non, officiis repellat velit.
                </Typography.Text>

                <Typography.Title level={3}>
                    Competition rules
                </Typography.Title>
                <Typography.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi at commodi debitis eaque error, et exercitationem fugit harum impedit incidunt ipsam itaque minus neque, optio perspiciatis praesentium quasi rerum saepe sunt ullam veniam voluptas! Accusamus assumenda atque autem commodi cupiditate dolores, ex impedit ipsum itaque non, officiis repellat velit.
                </Typography.Text>

                <Typography.Title level={3}>
                    judging criteria and prizes
                </Typography.Title>
                <Typography.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi at commodi debitis eaque error, et exercitationem fugit harum impedit incidunt ipsam itaque minus neque, optio perspiciatis praesentium quasi rerum saepe sunt ullam veniam voluptas! Accusamus assumenda atque autem commodi cupiditate dolores, ex impedit ipsum itaque non, officiis repellat velit.
                </Typography.Text>

                <Typography.Title level={3}>
                    The deadline for submitting works
                </Typography.Title>
                <Typography.Text>
                    Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aliquid animi at commodi debitis eaque error, et exercitationem fugit harum impedit incidunt ipsam itaque minus neque, optio perspiciatis praesentium quasi rerum saepe sunt ullam veniam voluptas! Accusamus assumenda atque autem commodi cupiditate dolores, ex impedit ipsum itaque non, officiis repellat velit.
                </Typography.Text>
            </Flex>
        </Flex>
    )
}
