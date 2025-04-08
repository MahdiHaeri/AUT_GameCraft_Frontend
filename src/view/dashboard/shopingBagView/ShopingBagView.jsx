import {Flex, theme, Row, Col, Typography} from "antd";
import {WorkshopCard} from "../../../components/workshopCard/WorkshopCard.jsx";
import {PayBox} from "./component/PayBox.jsx";
import { useTranslation } from 'react-i18next';

const {useToken} = theme

export function ShoppingBagView() {
    const {token} = useToken();
    const { t } = useTranslation();
    
    // Sample cart items
    const cartItems = [
        {
            title: "توسعه بازی با Unity",
            description: "آموزش اصول پایه ای برنامه نویسی و توسعه بازی های دو بعدی و سه بعدی با موتور یونیتی",
            instructor: "امیر حسینی",
            date: "1404/1/22، 9:00",
            price: "25,000",
            isInPerson: true,
            onAddToCart: () => console.log("Removing Unity workshop from cart")
        },
        {
            title: "طراحی گرافیک برای بازی‌ها",
            description: "اصول طراحی شخصیت، محیط و رابط کاربری برای بازی های دیجیتال",
            instructor: "سارا محمدی",
            date: "1404/2/5، 14:00",
            price: "20,000",
            isInPerson: false,
            onAddToCart: () => console.log("Removing Graphics workshop from cart")
        },
        {
            title: "برنامه‌نویسی پیشرفته بازی",
            description: "تکنیک‌های پیشرفته برنامه‌نویسی، بهینه‌سازی کد و الگوریتم‌های هوش مصنوعی",
            instructor: "محمد رضایی",
            date: "1404/2/10، 10:30",
            price: "30,000",
            isInPerson: true,
            onAddToCart: () => console.log("Removing Advanced Programming workshop from cart")
        }
    ];
    
    return (
        <Flex
            vertical
            flex={1}
            style={{
                width: '100%',
                overflow: "hidden"
            }}
        >
            <Flex
                vertical
                align={"center"}
                justify={"flex-start"}
                flex={1}
                style={{
                    width: '100%',
                    padding: token.padding,
                    paddingBottom: 0,
                    overflow: "auto",
                }}
                gap={"medium"}
            >
                <Typography.Title level={4} style={{fontWeight: 800, alignSelf: 'flex-start', margin: 0}}>
                    {t('app.dashboard.shoppingBag')}
                </Typography.Title>
                
                <Row 
                    gutter={[
                        { xs: 16, sm: 20, md: 24, lg: 24 },
                        { xs: 16, sm: 20, md: 24, lg: 24 }
                    ]}
                    style={{
                        width: '100%',
                        padding: '16px 0',
                    }}
                >
                    {cartItems.map((item, index) => (
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
                            <WorkshopCard {...item} />
                        </Col>
                    ))}
                </Row>
            </Flex>
            <PayBox/>
        </Flex>
    )
}