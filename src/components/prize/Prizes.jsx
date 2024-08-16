import {Col, Flex, Row, Typography} from "antd";
import firstPrizeLogo from '/src/assets/svg/prize-1.svg'
import secondPrizeLogo from '/src/assets/svg/prize-2.svg'
import thirdPrizeLogo from '/src/assets/svg/prize-3.svg'

export function Prizes() {
    return (
        <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}}>
            <Typography.Title level={1} style={{fontWeight: 'bolder'}}>Contest prizes</Typography.Title>
            <Row align={"middle"} justify={"center"} style={{width: '100%'}} gutter={[16, 16]}>
                <Col span={24} lg={12}>
                    <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}} gap={"small"}>
                        <img src={firstPrizeLogo} alt={'first-prize-logo'} width={'40%'} height={'auto'}/>
                        <Typography.Title level={2} style={{margin: 0}}>Team 1</Typography.Title>
                        <Typography.Title level={4} style={{margin: 0}}>9 Million Toman</Typography.Title>
                    </Flex>
                </Col>
                <Col span={24} lg={12}>
                    <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}} gap={"small"}>
                        <img src={secondPrizeLogo} alt={'second-prize-logo'} width={'40%'} height={'auto'}/>
                        <Typography.Title level={2} style={{margin: 0}}>Team 2</Typography.Title>
                        <Typography.Title level={4} style={{margin: 0}}>6 Million Toman</Typography.Title>
                    </Flex>
                </Col>
                <Col span={24} lg={12}>
                    <Flex vertical align={"center"} justify={"center"} style={{width: '100%'}} gap={"small"}>
                        <img src={thirdPrizeLogo} alt={'third-prize-logo'} width={'40%'} height={'auto'}/>
                        <Typography.Title level={2} style={{margin: 0}}>Team 3</Typography.Title>
                        <Typography.Title level={4} style={{margin: 0}}>3 Million Toman</Typography.Title>
                    </Flex>
                </Col>
            </Row>
        </Flex>
    )
}
