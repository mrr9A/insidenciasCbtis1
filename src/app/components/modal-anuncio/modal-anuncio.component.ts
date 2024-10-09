import { Component, Input, OnInit } from '@angular/core';
import { IonicModule, ModalController } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { caretForward } from 'ionicons/icons';

@Component({
  selector: 'app-modal-anuncio',
  templateUrl: './modal-anuncio.component.html',
  styleUrls: ['./modal-anuncio.component.scss'],
  standalone: true,
  imports: [IonicModule]
})
export class ModalAnuncioComponent implements OnInit {

  constructor(private modalController: ModalController,) { }

  ngOnInit() { }

  closeModal() {
    this.modalController.dismiss();
  }



}
