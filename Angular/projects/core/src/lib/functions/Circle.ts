import CircleItem from "../models/custom/CircleItem";

export function CreateCircle(bgColor: string, label: string, total: string | number) {

    let circle = new CircleItem();

    circle.bgColor = bgColor;
    
    circle.label = label;

    circle.total = total;

    return circle;
    
}