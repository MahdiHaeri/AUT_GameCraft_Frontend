import {Flex, Grid, Typography} from "antd";
import {WorkshopGrid} from "../WorkshopGrid/WorkshopGrid";
import {useTranslation} from "react-i18next";

const {useBreakpoint} = Grid;

export function OfflineWorkshop({padding, backgroundColor}) {
    const screens = useBreakpoint();
    const {t} = useTranslation();
    
    // Sample offline workshop data
    const offlineWorkshops = [
        {
            title: "کارگاه گیم دیزاین",
            description: "آشنایی با اصول طراحی بازی و مکانیک‌های جذاب برای بازی‌سازها",
            instructor: "حسن محمدی",
            date: "1404/2/5، 09:00",
            price: "25,000",
            isInPerson: true,
            onAddToCart: () => console.log("Added Game Design workshop to cart")
        },
        {
            title: "آموزش موتور Unreal",
            description: "آشنایی با محیط توسعه آنریل انجین و ساخت بازی سه بعدی",
            instructor: "امیر حسینی",
            date: "1404/2/10، 13:00",
            price: "30,000",
            isInPerson: true,
            onAddToCart: () => console.log("Added Unreal Engine workshop to cart")
        },
        {
            title: "تست و دیباگ بازی",
            description: "روش‌های تست و عیب‌یابی در فرآیند توسعه بازی‌های ویدیویی",
            instructor: "زهرا کریمی",
            date: "1404/2/15، 10:00",
            price: "20,000",
            isInPerson: true,
            onAddToCart: () => console.log("Added Testing workshop to cart")
        },
        {
            title: "مدیریت پروژه بازی",
            description: "اصول مدیریت و برنامه‌ریزی پروژه‌های بازی‌سازی",
            instructor: "دکتر علی احمدی",
            date: "1404/2/20، 14:00",
            price: "22,000",
            isInPerson: true,
            onAddToCart: () => console.log("Added Project Management workshop to cart")
        },
        {
            title: "بازاریابی بازی‌های موبایل",
            description: "استراتژی‌های بازاریابی و مانتیزیشن برای بازی‌های موبایلی",
            instructor: "سارا رضایی",
            date: "1404/2/25، 16:00",
            price: "18,000",
            isInPerson: true,
            onAddToCart: () => console.log("Added Mobile Game Marketing workshop to cart")
        }
    ];

    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                padding: padding,
                backgroundColor: backgroundColor
            }}
            gap={"large"}
        >
            <Typography.Title
                level={screens.md ? 1 : 2}
                style={{
                    margin: '0',
                    fontWeight: 900,
                    textAlign: "center"
                }}
            >
                {t('workshop.offlineWorkshops')}
            </Typography.Title>
            
            <WorkshopGrid workshops={offlineWorkshops} />
        </Flex>
    )
}
