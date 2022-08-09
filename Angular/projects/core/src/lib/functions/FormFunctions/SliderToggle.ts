import BooleanSlider from "./common/BooleanSlider";


export function CreateSliderToggle(controlName: string, appearance: string, options: string, label: string) {

    let slider = new BooleanSlider();

    slider.controlName = controlName;
    
    slider.appearance = appearance;

    slider.options = options;

    slider.label = label;

    return slider;

}