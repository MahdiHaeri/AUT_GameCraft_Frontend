import { Row, Col, theme } from 'antd';
import { WorkshopCard } from '../workshopCard/WorkshopCard';

const { useToken } = theme;

export function WorkshopGrid({ workshops = [] }) {
    const { token } = useToken();

    return (
        <Row 
            gutter={[
                { xs: 16, sm: 20, md: 24, lg: 24 },
                { xs: 16, sm: 20, md: 24, lg: 24 }
            ]}
            style={{
                margin: '0 auto',
                maxWidth: '1200px',
                width: '100%',
                padding: '16px 0',
            }}
        >
            {workshops.map((workshop, index) => (
                <Col 
                    key={index}
                    xs={24}    // 1 card per row on mobile (<576px)
                    sm={24}    // 1 card per row on small screens (≥576px)
                    md={12}    // 2 cards per row on medium screens (≥768px)
                    lg={8}     // 3 cards per row on large and extra large screens (≥992px)
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '24px',
                    }}
                >
                    <WorkshopCard {...workshop} />
                </Col>
            ))}
        </Row>
    );
} 