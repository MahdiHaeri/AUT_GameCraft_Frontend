import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./routes/index.jsx";
import {ConfigProvider} from "antd";
import customTheme from '/src/config/customTheme.js'
import {useTranslation} from "react-i18next";

function App() {
    const {t, i18n} = useTranslation()
    document.body.dir = i18n.dir()
    return (
        <ConfigProvider theme={customTheme}>
            <RouterProvider router={router}/>
        </ConfigProvider>
    )
}

export default App
