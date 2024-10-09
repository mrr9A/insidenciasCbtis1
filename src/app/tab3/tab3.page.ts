import { Component } from '@angular/core';
import { IonicModule } from '@ionic/angular';
import { PerfilComponent } from "../components/perfil/perfil.component";

@Component({
  selector: 'app-tab3',
  templateUrl: 'tab3.page.html',
  styleUrls: ['tab3.page.scss'],
  standalone: true,
  imports: [IonicModule, PerfilComponent],
})
export class Tab3Page {
  constructor() {}
}
