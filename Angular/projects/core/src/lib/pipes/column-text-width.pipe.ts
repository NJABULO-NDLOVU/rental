import {Pipe, PipeTransform } from '@angular/core';


@Pipe({
    name: "textWidth"
})
export class ColumnTextWidthPipe implements PipeTransform{

transform(columnText: string, columnSize:string | undefined, type: string): string {

    const fontSize: number = 6; //Assume 12px text is averaged 6px wide
    const padding:number = 2; //From tablecomponent.html
    const elipsisSize: number = 12 * 3 //3 characters
    const imageSize:number = 25 + 10 //25 for image, 10 for margin

    let transformedText: string = columnText

    if(!!columnSize){

        let arr: string[] | undefined = columnSize.split("-")

        let columnWidth: number = Number(arr[2]);  
        
        if(type == "image"){
            
            columnWidth = columnWidth + imageSize
        }

        let textPxWidth: number = columnText.length * fontSize

        if(textPxWidth >= columnWidth - padding){
            let lettersToTake:number = ((columnWidth-padding-elipsisSize)/fontSize)
            lettersToTake = Math.floor(lettersToTake);
            
            transformedText = columnText.substring(0,lettersToTake) + "..."
        }
    }

    return transformedText;
}
}