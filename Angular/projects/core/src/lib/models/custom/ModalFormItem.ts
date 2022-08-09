import { UntypedFormGroup } from "@angular/forms";
import CardContent from "./CardContent";

export default class ModalFormItem {

    InputFormGroup: UntypedFormGroup

    FormObjects: Array<any>;

    CustomItems: any[];

    cardName: string;

    constructor(){

        this.FormObjects = [];

        this.InputFormGroup = new UntypedFormGroup({});

        this.CustomItems = [];

    }

}