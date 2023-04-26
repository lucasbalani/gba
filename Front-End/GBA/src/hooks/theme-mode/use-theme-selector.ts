import { PaletteMode } from "@mui/material";
import { useSetRecoilState } from "recoil";
import { themeModeState } from "../../state/theme-state";

const useThemeModeSelector = () => {
    const setThemeMode = useSetRecoilState<PaletteMode>(themeModeState);

    return (themeMode: PaletteMode) => {
        if (themeMode !== 'light' && themeMode !== 'dark')
            themeMode = 'light';

        window.localStorage.setItem('themeMode', themeMode);

        setThemeMode(themeMode);
    }
};

export default useThemeModeSelector;