import ProfilePictureItem from "../components/profile-picture/models/ProfilePictureItem";


export function CreatePicture(src: string, imageDivClass: string, imageClass: string) {

    let picture = new ProfilePictureItem()

    picture.imageClass = imageClass;

    picture.src = src;

    picture.imageDivClass = imageDivClass;

    return picture;

}