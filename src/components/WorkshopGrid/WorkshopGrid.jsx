import { Row, Col, theme } from 'antd';
import { WorkshopCard } from '../workshopCard/WorkshopCard';

const { useToken } = theme;

export function WorkshopGrid({ workshops = [] }) {
    const { token } = useToken();

    return (
        <Row 
            gutter={[
                { xs: 16, sm: 20, md: 24, lg: 32 },
                { xs: 16, sm: 20, md: 24, lg: 32 }
            ]}
            style={{
                margin: '0 auto',
                maxWidth: '1200px',
                width: '100%',
                padding: '16px',
            }}
        >
            {workshops.map((workshop, index) => (
                <Col 
                    key={index}
                    xs={24}    // 1 card per row on mobile (<576px)
                    sm={12}    // 2 cards per row on small screens (≥576px)
                    md={8}     // 3 cards per row on medium screens (≥768px)
                    lg={8}     // 3 cards per row on large screens (≥992px)
                    xl={6}     // 4 cards per row on extra large screens (≥1200px)
                    style={{
                        display: 'flex',
                        justifyContent: 'center',
                        marginBottom: '16px',
                    }}
                >
                    <WorkshopCard {...workshop} />
                </Col>
            ))}
        </Row>
    );
} 