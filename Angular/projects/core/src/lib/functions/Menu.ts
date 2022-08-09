import { IconName } from "@fortawesome/fontawesome-common-types";

import MenuItem from "../components/toolbar/models/MenuItem";


export function CreateMenu(label: string, icon: IconName, menu: boolean, menu_class: string, action: Function) {

    let menuItem = new MenuItem();

    menuItem.action = action;

    menuItem.icon = icon;

    menuItem.label = label;

    menuItem.menu = menu;

    menuItem.menu_class = menu_class;

    return menuItem;

}