import {Button, Col, ConfigProvider, Flex, Row, Typography} from "antd";
import {useTranslation} from "react-i18next";
import {useSponsors} from "/src/config/Sponsors.jsx";
import {darkTheme} from "../../config/theme/darkTheme.js";

export function Sponsors({padding, backgroundColor}) {
    const {t} = useTranslation()
    const sponsors = useSponsors()
    return (
        <ConfigProvider theme={darkTheme}>
            <Flex
                vertical
                align={"center"}
                justify={"space-between"}
                style={{
                    width: '100%',
                    padding: padding,
                    backgroundColor: backgroundColor
                }}
            >
                <Typography.Title
                    level={1}
                    style={{
                        fontWeight: 900
                    }}
                >
                    {t('app.sponsors.title')}
                </Typography.Title>
                <Row align={"middle"} justify={"center"} style={{width: '100%'}} gutter={[32, 32]}>
                    {sponsors.map((sponsor, index) => (
                        <Col span={24} xxl={4} lg={6} md={8} sm={12} key={index} style={{height: '200px'}}>
                            <Flex
                                align={"center"}
                                justify={"center"}
                                style={{
                                    width: '100%',
                                    height: '100%',
                                    borderRadius: 10,
                                }}
                            >
                                <Button
                                    type={'text'}
                                    style={{width: '100%', height: '100%'}}
                                    href={sponsor.link}
                                >
                                    <img
                                        src={sponsor.logo}
                                        alt={sponsor.name}
                                        style={{
                                            width: 'auto',
                                            height: 'auto',
                                            maxWidth: '100%',
                                            maxHeight: '100%'
                                        }}
                                    />
                                </Button>
                            </Flex>
                        </Col>
                    ))}
                </Row>
            </Flex>
        </ConfigProvider>
    )
}
