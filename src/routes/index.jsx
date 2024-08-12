import {createBrowserRouter} from "react-router-dom";
import {HomePage} from "../pages/HomePage/HomePage.jsx";
import ROUTES from "../config/routes.js";
import {LoginPage} from "../pages/LoginPage/LoginPage.jsx";
import {SignUpPage} from "../pages/SignUpPage/SignUpPage.jsx";
import {DashboardPage} from "../pages/DashboardPage/DashboardPage.jsx";
import {NotFoundPage} from "../pages/NotFoundPage/NotFoundPage.jsx";

const router = createBrowserRouter([
    {
        path: ROUTES.HOME,
        element: <HomePage/>,
        children: [
            {path: ROUTES.HOME, element: <div> Home </div>},
            {path: ROUTES.HISTORY, element: <div> History </div>},
            {path: ROUTES.FAQ, element: <div> FAQ </div>},
            {path: ROUTES.SPONSOR, element: <div> Sponsor</div>},
            {path: ROUTES.BLOG, element: <div> Blog </div>},
            {path: ROUTES.STAFFS, element: <div> Staffs </div>},
        ]
    },
    {path: ROUTES.LOGIN, element: <LoginPage/>},
    {path: ROUTES.SIGNUP, element: <SignUpPage/>},
    {path: ROUTES.DASHBOARD, element: <DashboardPage/>},
    {path: '*', element: <NotFoundPage/>},
]);

export default router
