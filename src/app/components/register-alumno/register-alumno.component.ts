import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addCircle, image, person } from 'ionicons/icons';

@Component({
  selector: 'app-register-alumno',
  templateUrl: './register-alumno.component.html',
  styleUrls: ['./register-alumno.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class RegisterAlumnoComponent  implements OnInit {

  constructor() {
    addIcons({image,person,addCircle})
   }

  ngOnInit() { }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log('Archivo seleccionado:', file);
  }


}
