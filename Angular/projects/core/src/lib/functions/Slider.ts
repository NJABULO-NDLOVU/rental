import SliderItem from "../models/custom/SliderItem";

export function CreateSlider(checked: boolean, color: string, disabled: boolean){

    let slider = new SliderItem();

    slider.checked = checked;
    
    slider.color = color;

    slider.disabled = disabled;

    return slider;

}