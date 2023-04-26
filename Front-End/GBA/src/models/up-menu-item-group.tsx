import { UpMenuItem } from "./up-menu-item";

export class UpMenuItemGroup {
    title: string;
    items: UpMenuItem[];

    constructor(title: string, items: UpMenuItem[]) {
        this.title = title;
        this.items = items;
    }
}