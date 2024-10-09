import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { CardAnuncioComponent } from '../card-anuncio/card-anuncio.component';

@Component({
  selector: 'app-tab2',
  templateUrl: 'tab2.page.html',
  styleUrls: ['tab2.page.scss'],
  standalone: true,
  imports: [IonicModule,CardAnuncioComponent]
})
export class Tab2Page {

  constructor() {}

}
