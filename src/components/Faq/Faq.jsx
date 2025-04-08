import {Flex, theme, Typography, Collapse, Space, Divider, Card} from "antd";
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
                    <span>{t('app.faq.howToParticipate.title')}</span>
                </Space>
            ),
            children: (
                <Typography.Paragraph style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                    {t('app.faq.howToParticipate.content')}
                </Typography.Paragraph>
            ),
        },
        {
            key: '2',
            label: (
                <Space>
                    <QuestionCircleOutlined style={{ color: token.colorPrimary }} />
                    <span>{t('app.faq.competitionRules.title')}</span>
                </Space>
            ),
            children: (
                <Typography.Paragraph style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                    {t('app.faq.competitionRules.content')}
                </Typography.Paragraph>
            ),
        },
        {
            key: '3',
            label: (
                <Space>
                    <QuestionCircleOutlined style={{ color: token.colorPrimary }} />
                    <span>{t('app.faq.judgingCriteria.title')}</span>
                </Space>
            ),
            children: (
                <Typography.Paragraph style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                    {t('app.faq.judgingCriteria.content')}
                </Typography.Paragraph>
            ),
        },
        {
            key: '4',
            label: (
                <Space>
                    <QuestionCircleOutlined style={{ color: token.colorPrimary }} />
                    <span>{t('app.faq.submissionDeadline.title')}</span>
                </Space>
            ),
            children: (
                <Typography.Paragraph style={{ fontSize: '1rem', lineHeight: 1.6 }}>
                    {t('app.faq.submissionDeadline.content')}
                </Typography.Paragraph>
            ),
        },
    ];

    return (
        <Flex
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                maxWidth: '1000px',
                margin: '0 auto',
            }}
            vertical
            gap="large"
        >
            <Card
                style={{
                    width: '100%',
                    backgroundColor: token.colorBgBase,
                    borderRadius: token.borderRadiusLG,
                    boxShadow: '0 8px 24px rgba(0, 0, 0, 0.12)',
                    border: 'none',
                    overflow: 'hidden',
                }}
                bodyStyle={{
                    padding: '3rem',
                }}
            >
                <Space direction="vertical" align="center" size="large" style={{ width: '100%' }}>
                    <div style={{ 
                        textAlign: 'center', 
                        marginBottom: '2rem',
                        position: 'relative',
                    }}>
                        <Typography.Title 
                            level={1} 
                            style={{
                                fontWeight: "bolder", 
                                color: token.colorPrimary,
                                margin: 0,
                                fontSize: '2.5rem',
                                background: `linear-gradient(135deg, ${token.colorPrimary} 0%, ${token.colorPrimaryBg} 100%)`,
                                WebkitBackgroundClip: 'text',
                                WebkitTextFillColor: 'transparent',
                            }}
                        >
                            {t('app.faq.title')}
                        </Typography.Title>
                        
                        <Divider style={{ 
                            margin: '1rem 0', 
                            borderColor: token.colorBorderSecondary,
                            width: '80%',
                            margin: '1rem auto',
                        }} />
                        
                        <Typography.Title 
                            level={3} 
                            style={{
                                color: token.colorTextSecondary,
                                margin: 0,
                                fontWeight: 500,
                            }}
                        >
                            {t('app.faq.competitionConditions')}
                        </Typography.Title>
                    </div>
                    
                    <Collapse 
                        items={items} 
                        style={{
                            width: '100%',
                        }}
                        expandIconPosition="end"
                        ghost
                    />
                </Space>
            </Card>
        </Flex>
    )
}
