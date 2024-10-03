import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { caretDownSharp } from 'ionicons/icons';

@Component({
  selector: 'app-alumno-info',
  templateUrl: './alumno-info.component.html',
  styleUrls: ['./alumno-info.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AlumnoInfoComponent  implements OnInit {

  constructor() {
    addIcons({caretDownSharp})
  }

  ngOnInit() {}

}
