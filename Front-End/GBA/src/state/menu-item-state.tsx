import { atom } from "recoil";
import { library } from "@fortawesome/fontawesome-svg-core";
import { UpMenuItem } from "../models/up-menu-item";
library.add();

export const menuItemsState = atom<UpMenuItem[]>({
    key: 'menuItemsState',
    default: [
        new UpMenuItem(['fal', 'home'], '/', 'Home', 'Home', 'Acesse a página principal da aplicação'),
        
    ]
});