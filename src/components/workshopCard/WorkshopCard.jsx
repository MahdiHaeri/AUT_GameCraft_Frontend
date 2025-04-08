import { Card, Typography, Space, Avatar, Button, Flex, theme, Badge } from 'antd';
import { ClockCircleOutlined, UserOutlined, ShoppingCartOutlined } from '@ant-design/icons';
import { useTranslation } from 'react-i18next';

const { useToken } = theme;

export function WorkshopCard({ 
    title, 
    description, 
    instructor,
    instructorImage,
    date,
    price,
    isInPerson,
    coverImage,
    onAddToCart 
}) {
    const { token } = useToken();
    const { t } = useTranslation();

    // Color palette based on theme
    const cardBg = token.colorBgElevated;
    const colorStripes = ['#4CAF50', '#2196F3', '#FFC107', '#F44336']; // Keep these colorful regardless of theme
    const textPrimary = token.colorText;
    const textSecondary = token.colorTextSecondary;
    const headerBg = coverImage ? `url(${coverImage})` : token.colorBgContainer;
    const borderColor = token.colorBorder;

    return (
        <Card
            style={{
                width: '100%',
                minWidth: '250px',
                maxWidth: '100%',
                borderRadius: token.borderRadiusLG,
                overflow: 'hidden',
                border: 'none',
                backgroundColor: cardBg,
                boxShadow: token.boxShadow,
                height: '100%',
                display: 'flex',
                flexDirection: 'column',
            }}
            bodyStyle={{ 
                padding: 0,
                flex: 1,
                display: 'flex',
                flexDirection: 'column',
            }}
        >
            {/* Header Image with Stripes */}
            <div style={{ 
                position: 'relative', 
                paddingTop: '56.25%', // 16:9 aspect ratio
                background: headerBg,
                backgroundSize: 'cover',
                backgroundPosition: 'center',
            }}>
                {/* Colored Stripes */}
                <div style={{
                    position: 'absolute',
                    top: 0,
                    left: 0,
                    right: 0,
                    display: 'flex',
                }}>
                    {colorStripes.map((color, index) => (
                        <div key={index} style={{ height: '4px', flex: 1, backgroundColor: color }} />
                    ))}
                </div>
            </div>

            {/* Content */}
            <Flex 
                vertical 
                style={{ 
                    padding: '16px',
                    flex: 1,
                    gap: '12px'
                }}
            >
                {/* Title and Badge */}
                <Flex vertical gap="small">
                    <Typography.Title 
                        level={4} 
                        style={{ 
                            margin: 0,
                            fontSize: '18px',
                            lineHeight: 1.4,
                        }}
                        ellipsis={{ rows: 2 }}
                    >
                        {title}
                    </Typography.Title>
                    {isInPerson && (
                        <Badge
                            style={{ 
                                backgroundColor: 'transparent',
                                color: token.colorPrimary,
                                border: `1px solid ${token.colorPrimary}`,
                                borderRadius: '4px',
                                padding: '0 8px',
                            }}
                            count={t('workshop.inPerson')}
                        />
                    )}
                </Flex>

                {/* Description */}
                <Typography.Paragraph
                    style={{
                        color: textSecondary,
                        margin: 0,
                        fontSize: '14px',
                        lineHeight: 1.6,
                    }}
                    ellipsis={{ rows: 3 }}
                >
                    {description}
                </Typography.Paragraph>

                {/* Date and Time */}
                <Flex align="center" gap="small">
                    <ClockCircleOutlined style={{ color: token.colorPrimary }} />
                    <Typography.Text style={{ color: textSecondary, fontSize: '14px' }}>
                        {date}
                    </Typography.Text>
                </Flex>

                {/* Presenters Label */}
                <Typography.Text style={{ 
                    color: textSecondary, 
                    fontSize: '14px',
                    opacity: 0.7,
                }}>
                    {t('workshop.presenters')}:
                </Typography.Text>

                {/* Instructor */}
                <Flex gap="small" align="center">
                    <Avatar 
                        src={instructorImage}
                        icon={!instructorImage && <UserOutlined />}
                        size={32}
                    />
                    <Typography.Text style={{ 
                        color: textPrimary,
                        fontSize: '14px'
                    }}
                    ellipsis
                    >
                        {instructor}
                    </Typography.Text>
                </Flex>

                {/* Price and Add to Cart */}
                <Flex 
                    justify="space-between" 
                    align="center" 
                    style={{ 
                        marginTop: 'auto',
                        paddingTop: '12px',
                        borderTop: `1px solid ${borderColor}`,
                    }}
                >
                    <Typography.Title 
                        level={5} 
                        style={{ 
                            margin: 0,
                            fontSize: '16px',
                        }}
                    >
                        {price} {t('common.currency')}
                    </Typography.Title>
                    <Button
                        type="primary"
                        icon={<ShoppingCartOutlined />}
                        onClick={onAddToCart}
                        style={{
                            borderRadius: '8px',
                            height: '36px',
                        }}
                    >
                        {t('workshop.addToCart')}
                    </Button>
                </Flex>
            </Flex>
        </Card>
    );
}
