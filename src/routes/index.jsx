import {createBrowserRouter} from "react-router-dom";
import {MainPage} from "../pages/MainPage/MainPage.jsx";
import ROUTES from "../config/routes.js";
import {LoginPage} from "../pages/LoginPage/LoginPage.jsx";
import {SignUpPage} from "../pages/SignUpPage/SignUpPage.jsx";
import {DashboardPage} from "../pages/DashboardPage/DashboardPage.jsx";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage.jsx";
import {StaffView} from "../view/StaffView/StaffView.jsx";

const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <MainPage/>,
        children: [
            {path: ROUTES.HOME, element: <div> Home </div>},
            {path: ROUTES.HISTORY, element: <div> History </div>},
            {path: ROUTES.FAQ, element: <div> FAQ </div>},
            {path: ROUTES.SPONSOR, element: <div> Sponsor</div>},
            {path: ROUTES.BLOG, element: <div> Blog </div>},
            {path: ROUTES.STAFFS, element: <StaffView />},
        ]
    },
    {path: ROUTES.LOGIN, element: <LoginPage/>},
    {path: ROUTES.SIGNUP, element: <SignUpPage/>},
    {path: ROUTES.DASHBOARD, element: <DashboardPage/>},
    {path: '*', element: <NotFoundPage/>},
]);

export default router
