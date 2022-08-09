import { IconName } from "@fortawesome/fontawesome-common-types";
import IconItem from "../models/custom/IconItem";

export function CreateIcon(color: string, iconName: IconName, text: string, total: number, totalText: string | number) {

    let icon = new IconItem();

    icon.color = color;
    
    icon.iconName = iconName;

    icon.text = text;

    icon.total = total;

    icon.totalText = totalText;

    return icon;

}