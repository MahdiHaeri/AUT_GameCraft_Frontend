import ROUTES from "./routes.js";
import {useTranslation} from "react-i18next";


export const useDashboardNavigations = () => {
    const {t} = useTranslation();
    return [
        {
            name: t('app.dashboard.event'),
            route: ROUTES.EVENTS,
        },
        {
            name: t('app.dashboard.teamStatus'),
            route: ROUTES.TEAM_STATUS,
        },
        {
            name: t('app.dashboard.games'),
            route: ROUTES.GAMES,
        },
        {
            name: t('app.dashboard.shoppingBag'),
            route: ROUTES.SHOPPING_BAG,
        }
    ]
}
