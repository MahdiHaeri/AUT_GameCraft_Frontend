import {Col, Flex, Row, Typography} from "antd";
import {useTranslation} from "react-i18next";
import bubbleImg from '/src/assets/svg/bubble-light-purple.svg'
import {PrizeCard} from "./component/PrizeCard.jsx";
import {usePrizes} from "../../config/PrizeConfig.jsx";

export function Prizes({padding, backgroundColor}) {
    const {t} = useTranslation()
    const PRIZES = usePrizes()
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
            <Typography.Title
                level={1}
                style={{
                    fontWeight: 950,
                }}
            >
                {t('app.prizes.title')}
            </Typography.Title>
            <Row align={"middle"} justify={"center"} style={{width: '100%'}} gutter={[16, 16]}>
                {PRIZES.map((prize, index) => (
                    <Col span={24} lg={12} key={index}>
                        <PrizeCard teamImage={prize.teamImage} teamTitle={prize.teamTitle} teamPrize={prize.teamPrize}/>
                    </Col>
                ))}
            </Row>
        </Flex>
    )
}
