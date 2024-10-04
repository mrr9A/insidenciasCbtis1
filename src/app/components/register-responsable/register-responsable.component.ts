import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addCircle, image, person } from 'ionicons/icons';

@Component({
  selector: 'app-register-responsable',
  templateUrl: './register-responsable.component.html',
  styleUrls: ['./register-responsable.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class RegisterResponsableComponent  implements OnInit {
  constructor() {
    addIcons({image,person,addCircle})
   }

  ngOnInit() { }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log('Archivo seleccionado:', file);
  }

}
