import { Component } from '@angular/core';
import { TranslateService } from '@ngx-translate/core';

/*decorateur*/

@Component({
  selector: 'app-root',    /*Tag devant etre utilise pour indexer notre application*/
  template: '<router-outlet></router-outlet>' /*chemin vers l'application*/
})
export class AppComponent {
  constructor(translate: TranslateService) {
    translate.addLangs(['en', 'fr']);
    translate.setDefaultLang('en');

    const browserLang: string = translate.getBrowserLang();
    translate.use(browserLang.match(/en|fr/) ? browserLang : 'en');
  }
}
