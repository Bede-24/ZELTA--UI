import React, { useEffect, useState } from 'react';
import { retrieveTheme, updateThemeSelection } from '../../methods/utils/theme-settings';

const themes: any = {
    dark: {
        backgroundColor: '#1d1d1d',
        primaryColor: '#2A2A2A',
        strokeColor: '#3C3C3C',
        fontColor: '#EDEDED',
        strokeAltColor: '#6D6D6D',
        fontAltColor: '#9E9E9E',
        menuSelectionColor: '#1C1C1C',
        skeletonFrom: '#333',
        skeletonGradient: '#2e2e2e',
        tabActiveColor: '#fff',
        blueOrangeAccent: '#FF6600',
        disabledButtonBackgroundColor: '#333',
        disabledButtonColor: '#444444',
        extraButtonsStroke: '#ff6600',
        extraButtonsColor: '#fff',
        headerGradientText: '',
        getStartedThemeSwitcherButtonColor: '#2D2D2D',
    },
    light: {
        backgroundColor: '#FBFBFB',
        primaryColor: '#fff',
        //strokeColor: "#eee" E4E4E4,
        strokeColor: '#F1F1F1',
        fontColor: '#363636',
        strokeAltColor: '#6D6D6D',
        fontAltColor: '#797979',
        menuSelectionColor: '#EBEBEB',
        skeletonFrom: '#eee',
        skeletonGradient: '#e2e2e2',
        tabActiveColor: '#263238',
        blueOrangeAccent: '#2042B8',
        disabledButtonBackgroundColor: '#E8E8E8',
        disabledButtonColor: '#fff',
        extraButtonsStroke: '#2042B8',
        extraButtonsColor: '#6f6f6f',
        headerGradientText: '#fff',
        getStartedThemeSwitcherButtonColor: '#E7E7E7',
    },
};

type Props = {
    children: React.ReactNode;
};

// eslint-disable-next-line react/display-name
export default function (props: Props) {
    const savedTheme = retrieveTheme();

    const [themeName, setThemeName] = useState('light');
    const [theme, setTheme] = useState(themes[themeName]);
    function toggleTheme() {
        if (theme === themes.dark) {
            setTheme(themes.light);
            setThemeName('light');
        } else {
            setTheme(themes.dark);
            setThemeName('dark');
        }
    }
    function setCSSVariables(theme: any) {
        for (const value in theme) {
            document.documentElement.style.setProperty(`--${value}`, theme[value]);
        }
    }
    useEffect(() => {
        if (savedTheme === 'dark') {
            setTheme(themes.dark);
            setThemeName('dark');
        } else {
            setTheme(themes.light);
            setThemeName('light');
        }
        // eslint-disable-next-line
  }, [])

    useEffect(() => {
        setCSSVariables(theme);
        updateThemeSelection(themeName);
        // eslint-disable-next-line
  })

    // return (
    //     <ThemeSelectorContext.Provider value={{ toggleTheme, themeName }}>
    //         {props.children}
    //     </ThemeSelectorContext.Provider>
    
    // );
}

export const ThemeSelectorContext = React.createContext({
    themeName: 'dark',
    // eslint-disable-next-line @typescript-eslint/no-empty-function
    toggleTheme: () => {},
});
