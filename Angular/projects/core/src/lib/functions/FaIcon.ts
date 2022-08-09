import { IconName, IconPrefix } from "@fortawesome/fontawesome-common-types";

import FaIconItem from "../models/custom/FaIconItem";

export function CreateFaIcon(prefix: IconPrefix, iconName: IconName, color: string, custom: string){

    let faIcon = new FaIconItem();

    faIcon.iconName = iconName;
    
    faIcon.prefix = prefix;

    faIcon.color = color;

    faIcon.custom = custom;

    return faIcon;

}