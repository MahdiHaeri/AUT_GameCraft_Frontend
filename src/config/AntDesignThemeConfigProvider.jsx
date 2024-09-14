import {ConfigProvider, message, notification} from "antd";
import '/src/assets/fonts/SF_Pro_Rounded/sfProRounded.css'
import '/src/assets/fonts/IRANYekanX/fontiran.css'
import '/src/assets/fonts/Estedad-v7.3/estedad.css'
import '/src/assets/fonts/vazirmatn-v33.003/Vazirmatn-font-face.css'
import {useContext} from "react";
import {ThemeContext} from "../hooks/context/ThemeContext.jsx";
import i18n from "i18next";
import {darkTheme} from "./theme/darkTheme.js";
import {lightTheme} from "./theme/lightTheme.js";

export function AntDesignThemeConfigProvider({children}) {
    const {darkMode} = useContext(ThemeContext);
    const direction = i18n.dir()
    const dynamicTheme = darkMode ? darkTheme : lightTheme

    message.config({
        top: 0,
        duration: 3,
        maxCount: 3,
        rtl: false,
        prefixCls: 'my-message',
    });

    notification.config({
        placement: 'bottomLeft',
        duration: 3,
        rtl: false,
        prefixCls: 'my-notification',
    });

    return (
        <ConfigProvider theme={dynamicTheme} direction={direction}>
            {children}
        </ConfigProvider>
    )
}


export default AntDesignThemeConfigProvider
