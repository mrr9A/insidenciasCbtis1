import { Component, OnInit } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { addIcons } from 'ionicons';
import { add, addCircle, apps, chevronForwardOutline,construct,documentText,helpCircle,home, information, listCircle, people, personAdd, settings, time, today, volumeHigh } from 'ionicons/icons';

@Component({
  selector: 'app-menu',
  templateUrl: './menu.component.html',
  styleUrls: ['./menu.component.scss'],
  standalone: true,
  imports: [IonicModule],
})
export class MenuComponent  implements OnInit {

  constructor() {
    addIcons({ chevronForwardOutline,home,settings,helpCircle,documentText,time,volumeHigh,today,apps,construct,personAdd,listCircle,people,addCircle,information });
   }

  ngOnInit() {}

}
