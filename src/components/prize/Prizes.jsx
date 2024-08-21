import {Col, Flex, Row, Typography} from "antd";
import firstPrizeLogo from '/src/assets/svg/prize-1.svg'
import secondPrizeLogo from '/src/assets/svg/prize-2.svg'
import thirdPrizeLogo from '/src/assets/svg/prize-3.svg'
import {useTranslation} from "react-i18next";
import bubbleImg from '/src/assets/svg/bubble-light-purple.svg'

export function Prizes({padding, backgroundColor}) {
    const {t} = useTranslation()
    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                padding: padding,
                backgroundColor: backgroundColor,
            }}
        >
            <Flex
                align={"center"}
                justify={"start"}
                style={{
                    width: '100%',
                    height: '100%',
                    position: 'absolute',
                    padding: padding,
                }}
            >
                <img
                    src={bubbleImg}
                    height={'100%'}
                    width={'100%'}
                    alt={'bubble-image'}
                    style={{
                        transform: 'scaleX(-1)',
                        opacity: '0.5',
                    }}
                />
            </Flex>
            <Typography.Title level={1} style={{fontWeight: 'bolder'}}>
                {t('app.prizes.title')}
            </Typography.Title>
            <Row align={"middle"} justify={"center"} style={{width: '100%'}} gutter={[16, 16]}>
                <Col span={24} lg={12}>
                    <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}} gap={"small"}>
                        <img src={firstPrizeLogo} alt={'first-prize-logo'} width={'40%'} height={'auto'}/>
                        <Typography.Title level={2} style={{margin: 0}}>
                            {t('app.prizes.firstTeam')}
                        </Typography.Title>
                        <Typography.Title level={4} style={{margin: 0}}>
                            {t('app.prizes.firstTeamPrize')}
                        </Typography.Title>
                    </Flex>
                </Col>
                <Col span={24} lg={12}>
                    <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}} gap={"small"}>
                        <img src={secondPrizeLogo} alt={'second-prize-logo'} width={'40%'} height={'auto'}/>
                        <Typography.Title level={2} style={{margin: 0}}>
                            {t('app.prizes.secondTeam')}
                        </Typography.Title>
                        <Typography.Title level={4} style={{margin: 0}}>
                            {t('app.prizes.secondTeamPrize')}
                        </Typography.Title>
                    </Flex>
                </Col>
                <Col span={24} lg={12}>
                    <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}} gap={"small"}>
                        <img src={thirdPrizeLogo} alt={'third-prize-logo'} width={'40%'} height={'auto'}/>
                        <Typography.Title level={2} style={{margin: 0}}>
                            {t('app.prizes.thirdTeam')}
                        </Typography.Title>
                        <Typography.Title level={4} style={{margin: 0}}>
                            {t('app.prizes.thirdTeamPrize')}
                        </Typography.Title>
                    </Flex>
                </Col>
            </Row>
        </Flex>
    )
}
