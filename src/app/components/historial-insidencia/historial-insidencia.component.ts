import { Component, OnInit } from '@angular/core';
import { IonicModule,ModalController } from '@ionic/angular';
import { ModalInsidenciaComponent } from '../modal-insidencia/modal-insidencia.component';

@Component({
  selector: 'app-historial-insidencia',
  templateUrl: './historial-insidencia.component.html',
  styleUrls: ['./historial-insidencia.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class HistorialInsidenciaComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}


  async openQrModal() {
    const modal = await this.modalController.create({
      component: ModalInsidenciaComponent
    });
    return await modal.present();
  }


}
