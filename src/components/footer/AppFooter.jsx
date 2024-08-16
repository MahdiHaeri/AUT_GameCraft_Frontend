import {Footer} from "antd/es/layout/layout.js";
import {Button, Divider, Flex, theme, Typography} from "antd";
import logo from '/src/assets/svg/dark-3d.svg'
import autComputerEngineeringLogo from '/src/assets/images/logo/ssc_white.png'
import tehranArtLogo from '/src/assets/images/logo/Asset 4.png'

import {
    FacebookFilled,
    InstagramOutlined,
    LinkedinFilled,
    XOutlined,
    YoutubeFilled
} from "@ant-design/icons";
import {useTranslation} from "react-i18next";

const {useToken} = theme

export function AppFooter() {
    const {token} = useToken();
    const {t} = useTranslation()

    return (
        <Footer
            style={{
                backgroundColor: token.colorPrimary,
                textAlign: 'center',
                width: '100%',
                padding: token.padding,
            }}
        >
            <Typography.Title level={2}>
                {t('app.footer.autGameCraft')}
            </Typography.Title>
            <Flex align={"center"} justify={"space-between"} style={{width: '100%'}}>
                <Flex
                    align={"center"}
                    justify={"center"}
                    flex={1}
                    gap={"large"}
                >
                    <img
                        src={logo}
                        alt={'logo'}
                        width={'10%'}
                        height={'auto'}
                    />
                    <img
                        src={autComputerEngineeringLogo}
                        alt={'aut-computer-engineering-logo'}
                        width={'10%'}
                        height={'auto'}
                    />
                    <img
                        src={tehranArtLogo}
                        alt={'tehran-art-logo'}
                        width={'10%'}
                        height={'auto'}
                    />
                </Flex>
                <Flex
                    align={"center"}
                    justify={"center"}
                    flex={1}
                    gap={"small"}
                >
                    <Button type={"text"} shape={"circle"} size={"large"} icon={<YoutubeFilled/>}/>
                    <Button type={"text"} shape={"circle"} size={"large"} icon={<XOutlined/>}/>
                    <Button type={"text"} shape={"circle"} size={"large"} icon={<InstagramOutlined/>}/>
                    <Button type={"text"} shape={"circle"} size={"large"} icon={<FacebookFilled/>}/>
                    <Button type={"text"} shape={"circle"} size={"large"} icon={<LinkedinFilled/>}/>
                </Flex>
            </Flex>
            <Divider>
                <Typography.Text type={"secondary"}>
                    {t('app.footer.copyRight')}
                </Typography.Text>
            </Divider>
        </Footer>
    )
}
