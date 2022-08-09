import TabItem from "../models/custom/TabItems";

export function CreateTab (label: string, index: number) {

    let tab = new TabItem();

    tab.label = label;
    
    tab.index = index;

    return tab;

}