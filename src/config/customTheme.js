import {theme} from "antd";
import '/src/assets/fonts/SF_Pro_Rounded/sfProRounded.css'
import '/src/assets/fonts/IRANYekanX/fontiran.css'
import '/src/assets/fonts/Estedad-v7.3/estedad.css'
import '/src/assets/fonts/vazirmatn-v33.003/Vazirmatn-font-face.css'

const customTheme = {
    algorithm: theme.defaultAlgorithm,
    token: {

        fontFamily: "Estedad-bold",
        borderRadius: 16,
        colorPrimary: "#3c3a7d",
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
            colorPrimary: 'darkgreen',
        },
    },
}

export default customTheme
