import {theme} from "antd";
import {defaultTheme} from "./defaultTheme.js";

export const darkTheme = {
    ...defaultTheme,
    algorithm: theme.darkAlgorithm,
    token: {
        ...defaultTheme.token,
        colorBgBase: "#1E1E1E",
    }
}
