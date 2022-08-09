import ImageItem from "../models/custom/ImageItem";


export function CreateImage(columnName: string, mappedColumn?: string, error?: string, cssClass?: string, imageCss?: string, expectImage?: boolean, imageLocation?: string) {

    let image = new ImageItem();

    image.columnName = columnName;
    
    image.mappedColumn = mappedColumn;

    image.onError = error;

    image.cssClass = cssClass;

    image.imageCss = imageCss;

    image.expectImage = expectImage;

    imageLocation = imageLocation;

    return image;

}