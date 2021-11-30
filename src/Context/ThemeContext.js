import { createContext, useReducer } from "react";
export const ThemeContext = createContext()

const themeReducer = (state, action) => {
    switch (action.type) {
        case 'CHANGE_COLOR':
            return { ...state, color: action.payload }
        default:
            return state;
    }
}
export function ThemeProvider({ children }) {

    const [state, dispatch] = useReducer(themeReducer, {
        color: '#20bf50',
    })

    const changeColor = (color) => {
        dispatch({ type: 'CHANGE_COLOR', color })
    }

    return (
        <ThemeContext.Provider value={{ ...state, changeColor }}>
            {children}
        </ThemeContext.Provider>
    )
}