import { iThemeProperties } from "../interfaces/theme.interface"

/**
 * Light theme configuration for ProACT 
*/
export const lightTheme: iThemeProperties = {
    name: 'light',
    properties: {
        '--text-color': '#1E1E1E',
        '--background-color': '#F0F2F5',
        '--background-cards': '#FFF',
    }
}

/**
 * Dark theme configuration for ProACT 
*/
export const darkTheme: iThemeProperties = {
    name: 'dark',
    properties: {
        '--text-color': '#FAFAFA',
        '--background-color': '#000',
        '--background-cards': '#1E1E1E',
    }
}