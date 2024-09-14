import './App.css'
import '/src/assets/fonts/Estedad-v7.3/estedad.css'
import '/src/assets/fonts/vazirmatn-v33.003/Vazirmatn-font-face.css'
import {RouterProvider} from "react-router-dom";
import router from "./routes/index.jsx";
import {useTranslation} from "react-i18next";
import {ThemeProvider} from "./hooks/context/ThemeContext.jsx";
import AntDesignThemeConfigProvider from "./config/AntDesignThemeConfigProvider.jsx";

function App() {
    const {i18n} = useTranslation()

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
