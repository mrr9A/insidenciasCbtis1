import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { AlumnoInfoComponent } from "../alumno-info/alumno-info.component";
import { CardAnuncioComponent } from "../card-anuncio/card-anuncio.component";
import { MenuComponent } from "../menu/menu.component";
import { addIcons } from 'ionicons';
import { fingerPrint } from 'ionicons/icons';

@Component({
  selector: 'app-tab1',
  templateUrl: 'tab1.page.html',
  styleUrls: ['tab1.page.scss'],
  standalone: true,
  imports: [IonicModule, AlumnoInfoComponent, CardAnuncioComponent, MenuComponent],
})
export class Tab1Page {
  constructor() {
    addIcons({fingerPrint})
  }
}
