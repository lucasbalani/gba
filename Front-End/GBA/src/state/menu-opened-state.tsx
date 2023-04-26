import { atom } from "recoil";

export const menuOpenedState = atom<boolean>({
    key: 'menuOpenedState',
    default: false
});