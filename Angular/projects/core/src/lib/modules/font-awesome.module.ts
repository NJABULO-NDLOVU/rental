import {NgModule} from '@angular/core';
import { FaIconLibrary, FontAwesomeModule } from '@fortawesome/angular-fontawesome';
import { faCheck, faTimesCircle, faBars, faUserTimes, faUserCheck, faUserCircle, faMask, faBuilding} from '@fortawesome/free-solid-svg-icons';


@NgModule({
  imports: [
    FontAwesomeModule,
  ],
  exports: [
    FontAwesomeModule,
  ],
})
export class FontAModule {
    constructor(library: FaIconLibrary) {
        library.addIcons(
          faCheck,
          faTimesCircle,
          faBars,
          faUserTimes,
          faUserCheck,
          faUserCircle,
          faMask,
          faBuilding
        );
      }
 }
