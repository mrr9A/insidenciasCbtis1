import { Component, CUSTOM_ELEMENTS_SCHEMA, OnInit } from '@angular/core';
import { IonicModule,ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { ModalAnuncioComponent } from '../components/modal-anuncio/modal-anuncio.component';

@Component({
  selector: 'app-card-anuncio',
  templateUrl: './card-anuncio.component.html',
  styleUrls: ['./card-anuncio.component.scss'],
  standalone: true,
  imports: [IonicModule,ModalAnuncioComponent],
  schemas: [CUSTOM_ELEMENTS_SCHEMA]
})
export class CardAnuncioComponent  implements OnInit {

  constructor(private modalController: ModalController) {
    addIcons({})
  }

  ngOnInit() {}

  async openQrModal() {
    const modal = await this.modalController.create({
      component: ModalAnuncioComponent
    });
    return await modal.present();
  }

}
