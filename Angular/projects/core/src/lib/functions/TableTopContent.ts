import { IconName } from '@fortawesome/fontawesome-common-types';

import TableTopContent from 'projects/core/src/lib/components/table/models/custom/TabletopContent';

export function CreateTableTop(label: string, iconClass: string, iconName: IconName, click?: Function) {

    let tableTopContent = new TableTopContent();

    tableTopContent.label = label;
    
    tableTopContent.click = click;

    tableTopContent.iconClass = iconClass;

    tableTopContent.iconName = iconName;

    return tableTopContent;

}