import { UntypedFormGroup } from "@angular/forms";
import BaseFormItem from "./BaseFormItem";

export default class SelectionBoxes extends BaseFormItem {

    Options: Array<SelectionBoxItem>;
    Selected?: Array<SelectionBoxItem>;

    constructor(){

        super();
        this.Options = [];
        this.Selected = [];

    }

}

export class SelectionBoxItem extends BaseFormItem {

    cardName?: string;

    description?: string

    value: boolean;

    formObjects: any; //TODO DylanF Need to Strong Type this

    inputFormGroup: UntypedFormGroup;

}