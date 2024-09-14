import {theme} from "antd";
import {defaultTheme} from "./defaultTheme.js";

export const lightTheme = {
    ...defaultTheme,
    algorithm: theme.defaultAlgorithm,
    token: {
        ...defaultTheme.token,
        colorBgBase: "#f5f5f5",
    }
}
