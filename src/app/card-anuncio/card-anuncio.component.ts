import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-card-anuncio',
  templateUrl: './card-anuncio.component.html',
  styleUrls: ['./card-anuncio.component.scss'],
  standalone: true,
  imports: [IonicModule],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardAnuncioComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
