import { HttpEvent, HttpEventType, HttpProgressEvent, HttpResponse } from "@angular/common/http";

import { Observable } from "rxjs";

import { distinctUntilChanged, scan } from 'rxjs/operators';
import { Upload } from "../models/Upload";

function isHttpResponse<T>(event: HttpEvent<T>): event is HttpResponse<T> {

    return event.type === HttpEventType.Response;

}

function isHttpProgressEvent(event: HttpEvent<unknown>): event is HttpProgressEvent {

    return (event.type === HttpEventType.DownloadProgress || event.type === HttpEventType.UploadProgress);
}

export function upload(): (source: Observable<HttpEvent<unknown>>) => Observable<Upload> {

    const initialState: Upload = { state: 'PENDING', progress: 0, data: {} }

    const reduceState = (

        upload: Upload,
        event: HttpEvent<any>

    ): Upload => {

        if (isHttpProgressEvent(event)) {

            return {
                progress: event.total ? Math.round((100 * event.loaded) / event.total) : upload.progress, state: 'IN_PROGRESS', data: upload.data
            };

        }

        if (isHttpResponse(event)) {

            return { progress: 100, state: 'DONE', data: event.body };

        }

        return upload;

    }

    return (source) => source.pipe(scan(reduceState, initialState), distinctUntilChanged((a, b) => a.state === b.state && a.progress === b.progress));

};