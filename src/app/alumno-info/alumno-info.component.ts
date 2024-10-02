import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';

@Component({
  selector: 'app-alumno-info',
  templateUrl: './alumno-info.component.html',
  styleUrls: ['./alumno-info.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class AlumnoInfoComponent  implements OnInit {

  constructor() { }

  ngOnInit() {}

}
