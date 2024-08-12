import './App.css'
import {RouterProvider} from "react-router-dom";
import router from "./routes/index.jsx";
import {ConfigProvider} from "antd";
import customTheme from '/src/config/customTheme.js'

function App() {
    return (
        <ConfigProvider theme={customTheme}>
            <RouterProvider router={router}/>
        </ConfigProvider>
    )
}

export default App
