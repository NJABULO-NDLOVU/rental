import CustomItem from "../../models/custom/user-access/CustomItem";

export function CreateCustomItem(itemLabel: string, imageEndpoint?: any, itemNumber?: number) {

    let newItem = new CustomItem();

    newItem.imageEndpoint = imageEndpoint;

    newItem.itemLabel = itemLabel;

    newItem.itemNumber = itemNumber;

    return newItem;

}