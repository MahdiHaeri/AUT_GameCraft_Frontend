import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./routes/index.jsx";
import {ConfigProvider} from "antd";
import customTheme from '/src/config/customTheme.js'
import {useTranslation} from "react-i18next";

function App() {
    const {t, i18n} = useTranslation()
    const direction = i18n.dir()
    document.body.dir = direction
    return (
        <ConfigProvider theme={customTheme} direction={direction}>
            <RouterProvider router={router}/>
        </ConfigProvider>
    )
}

export default App
