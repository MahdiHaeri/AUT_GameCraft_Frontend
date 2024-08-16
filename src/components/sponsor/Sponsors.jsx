import {Col, Flex, Row, Typography} from "antd";
import dropoutLogo from '/src/assets/images/logo/dropout.png'
import avagamesLogo from '/src/assets/images/logo/avngames.png'
import medrickLogo from '/src/assets/images/logo/medrick-logo.png'
import dreamEventLogo from '/src/assets/images/logo/dream-event.png'
import pgjLogo from '/src/assets/images/logo/pgj.png'
import myketLogo from '/src/assets/images/logo/myket.png'
import {useTranslation} from "react-i18next";

export function Sponsors() {
    const {t} = useTranslation()
    return (
        <Flex align={"center"} justify={"space-between"} style={{width: '100%'}} vertical>
            <Typography.Title level={1} style={{fontWeight: 'bolder'}}>
                {t('app.sponsors.title')}
            </Typography.Title>
            <Row align={"middle"} justify={"center"} gutter={[100, 32]}>
                <Col>
                    <img
                        src={dropoutLogo}
                        alt={'dropoutLogo'}
                        style={{width: '300px', height: "auto"}}
                    />
                </Col>
                <Col>
                    <img
                        src={avagamesLogo}
                        alt={'dropoutLogo'}
                        style={{width: '300px', height: "auto"}}
                    />
                </Col>
                <Col>
                    <img
                        src={medrickLogo}
                        alt={'dropoutLogo'}
                        style={{width: '300px', height: "auto"}}
                    />
                </Col>
                <Col>
                    <img
                        src={dreamEventLogo}
                        alt={'dropoutLogo'}
                        style={{width: '300px', height: "auto"}}
                    />
                </Col>
                <Col>
                    <img
                        src={pgjLogo}
                        alt={'dropoutLogo'}
                        style={{width: '300px', height: "auto"}}
                    />
                </Col>
                <Col>
                    <img
                        src={myketLogo}
                        alt={'dropoutLogo'}
                        style={{width: '300px', height: "auto"}}
                    />
                </Col>
            </Row>
        </Flex>
    )
}
