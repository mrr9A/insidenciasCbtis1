import { Component, OnInit, ViewChild } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addCircle, image, person } from 'ionicons/icons';
import { IonTextarea } from '@ionic/angular';

@Component({
  selector: 'app-register-aviso',
  templateUrl: './register-aviso.component.html',
  styleUrls: ['./register-aviso.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class RegisterAvisoComponent implements OnInit {

  constructor() {
    addIcons({ image, person, addCircle })
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
