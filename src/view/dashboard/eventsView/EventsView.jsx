import {Flex, theme, Typography} from "antd";
import {WorkshopGrid} from "../../../components/WorkshopGrid/WorkshopGrid";

const {useToken} = theme

export function EventsView() {
    const {token} = useToken()

    // Sample workshop data
    const workshopData = [
        {
            title: "توسعه بازی با Unity",
            description: "آموزش اصول پایه ای برنامه نویسی و توسعه بازی های دو بعدی و سه بعدی با موتور یونیتی",
            instructor: "امیر حسینی",
            date: "1404/1/22، 9:00",
            price: "25,000",
            isInPerson: true,
            onAddToCart: () => console.log("Added Unity workshop to cart")
        },
        {
            title: "طراحی گرافیک برای بازی‌ها",
            description: "اصول طراحی شخصیت، محیط و رابط کاربری برای بازی های دیجیتال",
            instructor: "سارا محمدی",
            date: "1404/2/5، 14:00",
            price: "20,000",
            isInPerson: false,
            onAddToCart: () => console.log("Added Graphics workshop to cart")
        },
        {
            title: "برنامه‌نویسی پیشرفته بازی",
            description: "تکنیک‌های پیشرفته برنامه‌نویسی، بهینه‌سازی کد و الگوریتم‌های هوش مصنوعی",
            instructor: "محمد رضایی",
            date: "1404/2/10، 10:30",
            price: "30,000",
            isInPerson: true,
            onAddToCart: () => console.log("Added Advanced Programming workshop to cart")
        }
    ];

    // Sample presentation data
    const presentationData = [
        {
            title: "آینده بازی‌های ویدیویی",
            description: "بررسی روند‌های آینده در صنعت بازی و تکنولوژی‌های نوظهور",
            instructor: "دکتر احمد صادقی",
            date: "1404/3/15، 16:00",
            price: "رایگان",
            isInPerson: true,
            onAddToCart: () => console.log("Added Future Games presentation to cart")
        },
        {
            title: "تجربه کاربری در بازی‌ها",
            description: "اصول طراحی تجربه کاربری و تاثیر آن بر موفقیت بازی‌ها",
            instructor: "مریم کریمی",
            date: "1404/3/17، 13:00",
            price: "رایگان",
            isInPerson: false,
            onAddToCart: () => console.log("Added UX presentation to cart")
        },
        {
            title: "بازاریابی و تجاری‌سازی بازی",
            description: "استراتژی‌های موفق برای بازاریابی و درآمدزایی از بازی‌های مستقل",
            instructor: "علی رضایی",
            date: "1404/3/20، 15:30",
            price: "15,000",
            isInPerson: true,
            onAddToCart: () => console.log("Added Marketing presentation to cart")
        },
        {
            title: "داستان‌سرایی در بازی‌ها",
            description: "تکنیک‌های روایت داستان، شخصیت‌پردازی و خلق دنیاهای جذاب",
            instructor: "زهرا احمدی",
            date: "1404/3/22، 11:00",
            price: "10,000",
            isInPerson: false,
            onAddToCart: () => console.log("Added Storytelling presentation to cart")
        }
    ];

    return (
        <Flex
            vertical
            align={"center"}
            justify={"center"}
            style={{
                width: '100%',
                padding: token.padding
            }}
            gap={"large"}
        >
            <Flex
                vertical
                align={"start"}
                justify={"center"}
                style={{
                    width: '100%',
                }}
                gap={"medium"}
            >
                <Typography.Title level={4} style={{fontWeight: 800, marginBottom: 0}}>
                    کارگاه ها
                </Typography.Title>
                <WorkshopGrid workshops={workshopData} />
            </Flex>

            <Flex
                vertical
                align={"start"}
                justify={"center"}
                style={{
                    width: '100%',
                }}
                gap={"medium"}
            >
                <Typography.Title level={4} style={{fontWeight: 800, marginBottom: 0}}>
                    ارائه ها
                </Typography.Title>
                <WorkshopGrid workshops={presentationData} />
            </Flex>
        </Flex>
    )
}