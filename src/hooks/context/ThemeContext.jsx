import storage from "../../utils/storage.js";
import {createContext, useState} from "react";

// Create a context
export const ThemeContext = createContext();

export const ThemeProvider = ({ children }) => {
    const [darkMode, setDarkMode] = useState(storage.get('darkMode' || false));

    const toggleTheme = () => {
        setDarkMode(!darkMode);
        storage.set('darkMode', !darkMode);
    }

    return (
        <ThemeContext.Provider value={{ darkMode, toggleTheme }}>
            {children}
        </ThemeContext.Provider>
    );
};
