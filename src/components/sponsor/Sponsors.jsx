import {Col, Flex, Row, Typography} from "antd";
import dropoutLogo from '/src/assets/images/logo/dropout.png'
import avagamesLogo from '/src/assets/images/logo/avngames.png'
import medrickLogo from '/src/assets/images/logo/medrick-logo.png'
import dreamEventLogo from '/src/assets/images/logo/dream-event.png'
import pgjLogo from '/src/assets/images/logo/pgj.png'
import myketLogo from '/src/assets/images/logo/myket.png'
import {useTranslation} from "react-i18next";

export function Sponsors({padding, backgroundColor}) {
    const {t} = useTranslation()
    return (
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
            <Row align={"middle"} justify={"center"} gutter={[32, 32]}>
                <Col span={24} xxl={4} lg={6} md={8} sm={12}>
                    <img
                        src={dropoutLogo}
                        alt={'dropoutLogo'}
                        style={{width: '100%', height: "auto"}}
                    />
                </Col>
                <Col span={24} xxl={4} lg={6} md={8} sm={12}>
                    <img
                        src={avagamesLogo}
                        alt={'dropoutLogo'}
                        style={{width: '100%', height: "auto"}}
                    />
                </Col>
                <Col span={24} xxl={4} lg={6} md={8} sm={12}>
                    <img
                        src={medrickLogo}
                        alt={'dropoutLogo'}
                        style={{width: '100%', height: "auto"}}
                    />
                </Col>
                <Col span={24} xxl={4} lg={6} md={8} sm={12}>
                    <img
                        src={dreamEventLogo}
                        alt={'dropoutLogo'}
                        style={{width: '100%', height: "auto"}}
                    />
                </Col>
                <Col span={24} xxl={4} lg={6} md={8} sm={12}>
                    <img
                        src={pgjLogo}
                        alt={'dropoutLogo'}
                        style={{width: '100%', height: "auto"}}
                    />
                </Col>
                <Col span={24} xxl={4} lg={6} md={8} sm={12}>
                    <img
                        src={myketLogo}
                        alt={'dropoutLogo'}
                        style={{width: '100%', height: "auto"}}
                    />
                </Col>
            </Row>
        </Flex>
    )
}
