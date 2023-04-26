import { IconPrefix, IconName } from "@fortawesome/fontawesome-svg-core";
import { To } from "react-router-dom";

export class UpMenuItem {
    icon: [IconPrefix, IconName];
    text: string;
    route: To;
    tooltip: string;
    description?: string;

    constructor(icon: [IconPrefix, IconName], route: To, text: string, tooltip: string, description?: string) {
        this.icon = icon;
        this.text = text;
        this.route = route;
        this.tooltip = tooltip;
        this.description = description;
    }
} 