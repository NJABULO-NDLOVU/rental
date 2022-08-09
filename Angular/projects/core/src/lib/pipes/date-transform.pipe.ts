import { Pipe, PipeTransform } from '@angular/core';

@Pipe({
  name: 'dateTransform'
})
export class DateTransformPipe implements PipeTransform {

  transform(date: string): string {

    let currentDate = new Date();

    let pastDate = new Date(date);

    let dateValue: string;

    if (date == null) {

      dateValue = "Pending";

    } else {

      dateValue = pastDate.toLocaleDateString();

    }

    if (currentDate.getFullYear() - pastDate.getFullYear() == 0) {

      if (currentDate.getMonth() - pastDate.getMonth() == 0) {

        if (currentDate.getDate() - pastDate.getDate() == 0) {

          if (currentDate.getHours() - pastDate.getHours() <= 24) {

            if (currentDate.getHours() - pastDate.getHours() == 1) {

              dateValue = currentDate.getHours() - pastDate.getHours() + " hour ago";

            } else {

              dateValue = currentDate.getHours() - pastDate.getHours() + " hours ago";

            }
          }
        }
      }
    }

    return dateValue;

  }

}
