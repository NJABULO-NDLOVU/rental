import { SelectionBoxItem } from "./common/SelectionBoxes";


export function CreateSelectionBox(label: string, controlName: string, value: boolean) {

    let selectionBox = new SelectionBoxItem();

    selectionBox.controlName = controlName;

    selectionBox.value = value;

    selectionBox.label = label;

    return selectionBox;

}