import ImageCardData from "../models/custom/ImageCardData";
import ImageCardItem from "../models/custom/ImageCardItem";

export function CreateImageCard(imageSrc: string, label: string) {

    let imageCard = new ImageCardItem();

    imageCard.imageSrc = imageSrc;

    imageCard.label = label;

    return imageCard;

}