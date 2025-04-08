import {Flex, theme, Typography, Collapse, Space, Card} from "antd";
import {useTranslation} from "react-i18next";
import {QuestionCircleOutlined} from '@ant-design/icons';

const {useToken} = theme

export function Faq() {
    const {token} = useToken()
    const {t} = useTranslation()

    const items = [
        {
            key: '1',
            label: (
                <Space>
                    <QuestionCircleOutlined style={{ color: token.colorPrimary }} />
                    <Typography.Text strong style={{ fontSize: '16px' }}>
                        {t('app.faq.howToParticipate.title')}
                    </Typography.Text>
                </Space>
            ),
            children: (
                <Typography.Paragraph style={{ fontSize: '16px', lineHeight: 1.6 }}>
                    {t('app.faq.howToParticipate.content')}
                </Typography.Paragraph>
            ),
        },
        {
            key: '2',
            label: (
                <Space>
                    <QuestionCircleOutlined style={{ color: token.colorPrimary }} />
                    <Typography.Text strong style={{ fontSize: '16px' }}>
                        {t('app.faq.competitionRules.title')}
                    </Typography.Text>
                </Space>
            ),
            children: (
                <Typography.Paragraph style={{ fontSize: '16px', lineHeight: 1.6 }}>
                    {t('app.faq.competitionRules.content')}
                </Typography.Paragraph>
            ),
        },
        {
            key: '3',
            label: (
                <Space>
                    <QuestionCircleOutlined style={{ color: token.colorPrimary }} />
                    <Typography.Text strong style={{ fontSize: '16px' }}>
                        {t('app.faq.judgingCriteria.title')}
                    </Typography.Text>
                </Space>
            ),
            children: (
                <Typography.Paragraph style={{ fontSize: '16px', lineHeight: 1.6 }}>
                    {t('app.faq.judgingCriteria.content')}
                </Typography.Paragraph>
            ),
        },
        {
            key: '4',
            label: (
                <Space>
                    <QuestionCircleOutlined style={{ color: token.colorPrimary }} />
                    <Typography.Text strong style={{ fontSize: '16px' }}>
                        {t('app.faq.submissionDeadline.title')}
                    </Typography.Text>
                </Space>
            ),
            children: (
                <Typography.Paragraph style={{ fontSize: '16px', lineHeight: 1.6 }}>
                    {t('app.faq.submissionDeadline.content')}
                </Typography.Paragraph>
            ),
        },
    ];

    return (
        <Card
            style={{
                backgroundColor: token.colorBgBase,
                width: '100%',
                maxWidth: '1000px',
                borderRadius: token.borderRadiusLG,
                boxShadow: token.boxShadow,
                border: 'none',
            }}
        >
            <Flex vertical align="center" gap="large" style={{ width: '100%' }}>
                <Space direction="vertical" align="center" size={16}>
                    <Typography.Title
                        level={1}
                        style={{
                            fontWeight: 900,
                            color: token.colorPrimary,
                            textAlign: 'center',
                            margin: 0,
                        }}
                    >
                        {t('app.faq.title')}
                    </Typography.Title>

                    <Typography.Title
                        level={3}
                        style={{
                            color: token.colorTextSecondary,
                            textAlign: 'center',
                            fontWeight: 500,
                            marginTop: '0.5rem',
                        }}
                    >
                        {t('app.faq.competitionConditions')}
                    </Typography.Title>
                </Space>

                <Collapse
                    items={items}
                    style={{ width: '100%' }}
                    size="large"
                    expandIconPosition="end"
                    bordered={false}
                    defaultActiveKey={['1']}
                />
            </Flex>
        </Card>
    )
}
