import {ConfigProvider, theme} from "antd";
import '/src/assets/fonts/SF_Pro_Rounded/sfProRounded.css'
import '/src/assets/fonts/IRANYekanX/fontiran.css'
import '/src/assets/fonts/Estedad-v7.3/estedad.css'
import '/src/assets/fonts/vazirmatn-v33.003/Vazirmatn-font-face.css'
import {useContext} from "react";
import {ThemeContext} from "../hooks/context/ThemeContext.jsx";
import i18n from "i18next";

export function AntDesignThemeConfigProvider({children}) {
    const {darkMode} = useContext(ThemeContext);
    const direction = i18n.dir()

    const customTheme = {
        algorithm: darkMode ? theme.darkAlgorithm : theme.defaultAlgorithm,
        token: {
            fontFamily: "Estedad-bold",
            borderRadius: 16,
            colorPrimary: darkMode ? "#3c3a7d" : "#3c3a7d",
            colorBgBase: darkMode ? "#1E1E1E" : "#f5f5f5",
            colorInfo: "#3c3a7d",
            colorAction: "#01B582",
        },

        components: {
            Timeline: {
                dotBg: 'transparent',
                tailColor: '#01B582',
                tailWidth: 10,
            },
            Switch: {
                // colorPrimary: '#fff3',
            },
            Collapse: {
                // contentPadding: 0,
                // headerPadding: 0,
            },
        },
    }

    return (
        <ConfigProvider theme={customTheme} direction={direction}>
            {children}
        </ConfigProvider>
    )
}


export default AntDesignThemeConfigProvider
