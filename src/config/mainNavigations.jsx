import ROUTES from "./routes.js";
import {useTranslation} from "react-i18next";

export const useMainNavigations = () => {
    const { t } = useTranslation();

    return [
        {
            name: t('app.mainNavigation.home'), // Assuming you have a translation key like 'navigation.home'
            route: ROUTES.HOME,
        },
        {
            name: t('app.mainNavigation.news'),
            route: ROUTES.BLOG,
        },
        {
            name: t('app.mainNavigation.faq'),
            route: ROUTES.FAQ,
        },
        {
            name: t('app.mainNavigation.staffs'),
            route: ROUTES.STAFFS,
        },
        {
            name: t('app.mainNavigation.history'),
            route: ROUTES.HISTORY,
        },
        {
            name: t('app.mainNavigation.sponsors'),
            route: ROUTES.SPONSOR,
        },
        {
            name: t('app.mainNavigation.dashboard'),
            route: ROUTES.DASHBOARD,
        },
    ];
}
