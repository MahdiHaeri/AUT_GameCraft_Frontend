import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./routes/index.jsx";
import {useTranslation} from "react-i18next";
import {ThemeProvider} from "./hooks/context/ThemeContext.jsx";
import AntDesignThemeConfigProvider from "./config/AntDesignThemeConfigProvider.jsx";

function App() {
    const {t, i18n} = useTranslation()

    document.body.dir = i18n.dir()
    return (
        <ThemeProvider>
            <AntDesignThemeConfigProvider>
                <RouterProvider router={router}/>
            </AntDesignThemeConfigProvider>
        </ThemeProvider>
    )
}

export default App
