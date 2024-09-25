import {createBrowserRouter, Navigate} from "react-router-dom";
import {MainPage} from "../pages/MainPage/MainPage.jsx";
import ROUTES from "../config/routes.js";
import {LoginPage} from "../pages/LoginPage/LoginPage.jsx";
import {SignUpPage} from "../pages/SignUpPage/SignUpPage.jsx";
import {DashboardPage} from "../pages/DashboardPage/DashboardPage.jsx";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage.jsx";
import {StaffView} from "../view/staffView/StaffView.jsx";
import {HomeView} from "../view/homeView/HomeView.jsx";
import {FaqView} from "../view/FaqView/FaqView.jsx";
import {BlogView} from "../view/blogView/BlogView.jsx";
import {HistoryView} from "../view/historyView/HistoryView.jsx";
import {SponsorsView} from "../view/sponsorsView /SponsorsView.jsx";
import {TeamStatusView} from "../view/dashboard/teamStatusView/TeamStatusView.jsx";
import {EventsView} from "../view/dashboard/eventsView/EventsView.jsx";
import {ShoppingBagView} from "../view/dashboard/shopingBagView/ShopingBagView.jsx";
import {GameView} from "../view/dashboard/gamesView/GameView.jsx";

const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainPage/>,
        children: [
            {path: ROUTES.HOME, element: <HomeView/>},
            {path: ROUTES.HISTORY, element: <HistoryView/>},
            {path: ROUTES.FAQ, element: <FaqView/>},
            {path: ROUTES.SPONSOR, element: <SponsorsView/>},
            {path: ROUTES.BLOG, element: <BlogView/>},
            {path: ROUTES.STAFFS, element: <StaffView/>},
        ]
    },
    {
        path: ROUTES.DASHBOARD,
        element: <DashboardPage/>,
        children: [
            {index: true, element: <Navigate to={ROUTES.EVENTS} replace={true}/>},
            {path: ROUTES.EVENTS, element: <EventsView/>},
            {path: ROUTES.TEAM_STATUS, element: <TeamStatusView/>},
            {path: ROUTES.SHOPPING_BAG, element: <ShoppingBagView/>},
            {path: ROUTES.GAMES, element: <GameView/>},
        ]
    },
    {path: ROUTES.LOGIN, element: <LoginPage/>},
    {path: ROUTES.SIGNUP, element: <SignUpPage/>},
    {path: '*', element: <NotFoundPage/>},
]);

export default router
