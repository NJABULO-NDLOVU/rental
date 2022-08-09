import { FormGroup } from "@angular/forms";
import CardContent from "./CardContent";

export default class ModalFormItem {

    InputFormGroup: FormGroup

    FormObjects: Array<any>;

    CustomItems: any[];

    cardName: string;

    constructor(){

        this.FormObjects = [];

        this.InputFormGroup = new FormGroup({});

        this.CustomItems = [];

    }

}