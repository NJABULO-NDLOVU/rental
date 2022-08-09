import ButtonItem from "projects/core/src/lib/models/custom/ButtonItem";
import ButtonData from "../models/custom/ButtonData";

export function CreateButton(buttonLabel: string, iconName: string, iconLibrary: string, action: Function) {

    let item = new ButtonData();

    let button = new ButtonItem();

    button.label = buttonLabel;

    button.iconName = iconName;

    button.iconLibrary = iconLibrary;

    button.action = action;

    return button

}
