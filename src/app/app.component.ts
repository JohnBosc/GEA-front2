/*COMPONENT CLASS FILE*/

import { Component } from '@angular/core';

/*decorateur*/
@Component({
  selector: 'app-root',    /*Tag devant etre utilise pour indexer notre application*/
  template: `<router-outlet></router-outlet>`,  /*chemin vers l'application*/
})
export class AppComponent {

}
