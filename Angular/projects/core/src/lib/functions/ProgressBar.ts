import { ProgressBarMode } from "@angular/material/progress-bar";
import ProgressItem from "../models/custom/ProgressBarItem";

export function CreateProgressBar(color: string, mode: ProgressBarMode, value: Function) {

    let progressbar = new ProgressItem();

    progressbar.color = color;
    
    progressbar.mode = mode;

    progressbar.value = value

    return progressbar;

}