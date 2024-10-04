import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { addCircle, image, person } from 'ionicons/icons';

@Component({
  selector: 'app-register-administrativo',
  templateUrl: './register-administrativo.component.html',
  styleUrls: ['./register-administrativo.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class RegisterAdministrativoComponent implements OnInit {

  constructor() {
    addIcons({ image, person, addCircle })
  }

  ngOnInit() { }

  onFileSelected(event: any) {
    const file = event.target.files[0];
    console.log('Archivo seleccionado:', file);
  }

}
