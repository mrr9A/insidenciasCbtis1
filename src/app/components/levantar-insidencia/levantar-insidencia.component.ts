import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { IonTextarea } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { image } from 'ionicons/icons';

@Component({
  selector: 'app-levantar-insidencia',
  templateUrl: './levantar-insidencia.component.html',
  styleUrls: ['./levantar-insidencia.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class LevantarInsidenciaComponent implements OnInit {

  constructor() {
    addIcons({image})
  }

  ngOnInit() { }

  /* Esta funcion es para la subida de imagen y se vea bonito el diseño */
  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log('Archivo seleccionado:', file);
  }

  @ViewChild('myTextarea', { static: false }) myTextarea!: IonTextarea;

  // Ajusta la altura del textarea automáticamente
  adjustTextarea(event: any) {
    const textarea = this.myTextarea.getInputElement();
    textarea.then((el: HTMLTextAreaElement) => {
      el.style.height = 'auto'; // Resetea la altura para recálculo
      el.style.height = el.scrollHeight + 'px'; // Ajusta la altura según el contenido
    });
  }

}
