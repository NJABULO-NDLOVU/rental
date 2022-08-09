import InputBox from "./common/InputBox";

export function CreateInput(label: string, placeholder: string, controlName: string, readonly: string, appearance: string, width: string) {

    let input = new InputBox();

    input.label = label;

    input.placeholder = placeholder;
    
    input.controlName = controlName;

    input.readonly = readonly;

    input.appearance = appearance;

    input.width = width;

    return input;

}