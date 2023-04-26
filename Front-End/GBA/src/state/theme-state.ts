import { PaletteMode } from "@mui/material";
import { atom } from "recoil";

export const themeModeState = atom<PaletteMode>({
    key: 'themeModeState',
    default: window.localStorage.getItem('themeMode') as PaletteMode ?? 'light'
});