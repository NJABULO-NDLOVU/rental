import CardContent from "../models/custom/CardContent";

export function CreateCardContent( imgSrc: string, implementedText: string){

    let cardContent = new CardContent();

    cardContent.imgSrc = imgSrc;

    cardContent.implementedText = implementedText;

    return cardContent;

}