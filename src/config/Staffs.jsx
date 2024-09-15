import {useTranslation} from "react-i18next";

// organizing team
import bitaShayegan from '/src/assets/images/2024/staffs/bitaShayegan.jpg'
import arminHamedazimi from '/src/assets/images/2024/staffs/arminHamedazimi.jpg'

// technical team
import alirezaZare from '/src/assets/images/2024/staffs/alirezaZare.png'
import mahdiHaeri from '/src/assets/images/2024/staffs/mahdiHaeri.jpg'
import alirezaYousefpour from '/src/assets/images/2024/staffs/alirezaYousefpour.jpg'
import mohammadJavadAkbari from '/src/assets/images/2024/staffs/mohammadJavadAkbari.jpg'
import sinaSadeghi from '/src/assets/images/2024/staffs/sinaSadeghi.jpg'
import pouriaFahimi from '/src/assets/images/2024/staffs/pouryaFahimi.png'

// graphic team
import baharRafinezhad from '/src/assets/images/2024/staffs/baharRafinezhad.jpg'

// scientific team
import mahdiehTahami from '/src/assets/images/2024/staffs/mahdiehTahami.jpg'
import amirabbasEntezari from '/src/assets/images/2024/staffs/amirabbasEntezari.jpg'
import sabaSeyedtabaei from '/src/assets/images/2024/staffs/sabaSeyedtabaei.jpg'

// finance team
import leila from '/src/assets/images/2024/staffs/leila.jpeg'
import bagherHosseini from '/src/assets/images/2024/staffs/bagherHosseini.png'
import parsaHamidi from '/src/assets/images/2024/staffs/parsaHamidi.png'

// marketing team
import mostafaDallaki from '/src/assets/images/2024/staffs/mostafaDallaki.png'
import sobhan from '/src/assets/images/2024/staffs/sobhan.png'
import mahdiNajibpour from '/src/assets/images/2024/staffs/mahdiNajibpour.png'
import arianMohseni from '/src/assets/images/2024/staffs/arianMohseni.png'
import mohammadRafiHajiliDavaji from '/src/assets/images/2024/staffs/mohammadRafiHajiliDavaji.png'
import delaraamRoohani from '/src/assets/images/2024/staffs/delaraamRoohani.png'
import arshiyaHashemzadeh from '/src/assets/images/2024/staffs/arshiyaHashemzadeh.jpg'

// content creation team
import ashkanChaji from '/src/assets/images/2024/staffs/ashkanChaji.png'
import mohamadaliHajifathali from '/src/assets/images/2024/staffs/mohamadaliHajifathali.png'

// operations team
import seyedAliDastan from '/src/assets/images/2024/staffs/seyedAliDastan.png'
import poor3a from '/src/assets/images/2024/staffs/poor3a.jpg'
import amirhosseinSabouri from '/src/assets/images/2024/staffs/amirhosseinSabouri.jpg'

export function useStaffs() {
    const {t} = useTranslation()
    const organizingTeam = {
        teamTitle: t('app.staffs.organizingTeam.title'),
        teamMembers: [
            {
                imageUrl: bitaShayegan,
                name: 'بیتا شایگان',
                role: 'دبیر رویداد'
            },
            {
                imageUrl: arminHamedazimi,
                name: 'آرمین حامدعظیمی',
                role: 'دبیر انجمن علمی'
            },
        ]
    }

    const technicalTeam = {
        teamTitle: t('app.staffs.technicalTeam.title'),
        teamMembers: [
            {
                imageUrl: alirezaZare,
                name: 'علیرضا زارع',
                role: 'سرپرست تیم فنی'
            },
            {
                imageUrl: alirezaYousefpour,
                name: 'علیرضا یوسف پور',
                role: 'توسعه دهنده و اسکرام مستر'
            },
            {
                imageUrl: sinaSadeghi,
                name: 'سینا صادقی',
                role: 'دواپس'
            },
            {
                imageUrl: mohammadJavadAkbari,
                name: 'محمد جواد اکبری',
                role: 'توسعه دهنده بک اند'
            },
            {
                imageUrl: pouriaFahimi,
                name: 'پوریا فهیمی',
                role: 'توسعه دهنده فرانت اند'
            },
            {
                imageUrl: mahdiHaeri,
                name: 'مهدی حائری',
                role: 'توسعه دهنده فرانت اند'
            },
        ]
    }

    const scientificTeam = {
        teamTitle: t('app.staffs.scientificTeam.title'),
        teamMembers: [
            {
                imageUrl: mahdiehTahami,
                name: 'مهدیه تهامی',
                role: 'سرپرست تیم علمی'
            },
            {
                imageUrl: amirabbasEntezari,
                name: 'امیرعباس انتظاری',
                role: 'عضو تیم علمی'
            },
            {
                imageUrl: sabaSeyedtabaei,
                name: 'صبا سیدطبایی',
                role: 'عضو تیم علمی'
            },
        ]
    }

    const graphicTeam = {
        teamTitle: t('app.staffs.graphicTeam.title'),
        teamMembers: [
            {
                imageUrl: baharRafinezhad,
                name: 'بهار رفیع نژاد',
                role: 'طراح گرافیک'
            },
        ]
    }

    const marketingTeam = {
        teamTitle: t('app.staffs.marketingTeam.title'),
        teamMembers: [
            {
                imageUrl: mostafaDallaki,
                name: 'مصطفی دلاکی',
                role: 'سرپرست تیم مارکتینگ'
            },
            {
                imageUrl: sobhan,
                name: 'سبحان حیدری',
                role: 'عضو تیم مارکتینگ'
            },
            {
                imageUrl: mahdiNajibpour,
                name: 'مهدی نجیب پور',
                role: 'عضو تیم مارکتینگ'
            },
            {
                imageUrl: arianMohseni,
                name: 'آرین محسنی',
                role: 'عضو تیم مارکتینگ'
            },
            {
                imageUrl: mohammadRafiHajiliDavaji,
                name: 'محمد رفیع حاجیلی دوجی',
                role: 'عضو تیم مارکتینگ'
            },
            {
                imageUrl: delaraamRoohani,
                name: 'دلارام روحانی',
                role: 'عضو تیم مارکتینگ'
            },
            {
                imageUrl: arshiyaHashemzadeh,
                name: 'عرشیا هاشم‌زاده',
                role: 'عضو تیم مارکتینگ'
            },
        ]
    }

    const contentCreationTeam = {
        teamTitle: t('app.staffs.contentCreationTeam.title'),
        teamMembers: [
            {
                imageUrl: mohamadaliHajifathali,
                name: 'محمدعلی حاجی فتحعلی',
                role: 'سرپرست تیم رسانه'
            },
            {
                imageUrl: ashkanChaji,
                name: 'اشکان چاجی',
                role: 'عضو تیم رسانه'
            }
        ]
    }

    const operationsTeam = {
        teamTitle: t('app.staffs.operationsTeam.title'),
        teamMembers: [
            {
                imageUrl: seyedAliDastan,
                name: 'سیدعلی محمد داستان',
                role: 'عضو تیم اجرایی'
            },
            {
                imageUrl: poor3a,
                name: 'پوریا صادقی',
                role: 'عضو تیم اجرایی'
            },
            {
                imageUrl: amirhosseinSabouri,
                name: 'امیرحسین صبوری خسروشاهی',
                role: 'عضو تیم اجرایی'
            },
        ]
    }

    const financeTeam = {
        teamTitle: t('app.staffs.financeTeam.title'),
        teamMembers: [
            {
                imageUrl: leila,
                name: 'لیلا',
                role: 'اسپانسرشیپ'
            },
            {
                imageUrl: bagherHosseini,
                name: 'باقر حسینی',
                role: 'مسئول مالی'
            },
            {
                imageUrl: parsaHamidi,
                name: 'پارسا حمیدی',
                role: 'مسئول مالی'
            },
        ]
    }

    return [
        organizingTeam,
        technicalTeam,
        scientificTeam,
        marketingTeam,
        operationsTeam,
        contentCreationTeam,
        financeTeam,
        graphicTeam,
    ]
}
