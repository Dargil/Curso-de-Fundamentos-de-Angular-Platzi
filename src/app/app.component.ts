import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss']
})
export class AppComponent {
  name = 'Nicolas';
  // El acceso debe ser publico, viene publico por defecto
  age = 18;
  img = 'https://static.bandainamcoent.eu/high/naruto/naruto-suns-revolution/00-page-setup/nsr_game-thumbnail.jpg';
  btnDisabled = true;

  person = {
    name: 'Nicolas',
    age: 18,
    avatar: 'https://static.bandainamcoent.eu/high/naruto/naruto-suns-revolution/00-page-setup/nsr_game-thumbnail.jpg'
  }
}
