export default interface Column<T> {

    type: 'text' | 'bool' | 'image' | 'risk' | 'action' | 'object'| 'icon';

    columnName: string;

    mappedProperty: string;

    columnWidth?: string;

    paddingColumn?: string;

    icons?: string[];

    cssClass?: string;

    imageUrlBuilder?: (item: T) => string;

    textFormatter?: (item: T) => string;

    iconSelector?: (item: T) => string[];

    iconColorSelector?: (item: T) => string;

    onClick?: (item: T) => void;

    objectTransform?: (item: T) => string;

}
