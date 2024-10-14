import { Component, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { caretForward } from 'ionicons/icons';

@Component({
  selector: 'app-modal-insidencia',
  templateUrl: './modal-insidencia.component.html',
  styleUrls: ['./modal-insidencia.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ModalInsidenciaComponent  implements OnInit {

  constructor(private modalController: ModalController) { }

  ngOnInit() {}

  closeModal() {
    this.modalController.dismiss();
  }

}
