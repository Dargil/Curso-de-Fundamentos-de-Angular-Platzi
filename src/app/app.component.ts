import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  title = 'myStore'
  name = 'Nicolas';
  // El acceso debe ser publico, viene publico por defecto
  age = 18;
  img =
    'https://static.bandainamcoent.eu/high/naruto/naruto-suns-revolution/00-page-setup/nsr_game-thumbnail.jpg';
  btnDisabled = true;

  person = {
    name: 'Nicolas',
    age: 18,
    avatar:
      'https://static.bandainamcoent.eu/high/naruto/naruto-suns-revolution/00-page-setup/nsr_game-thumbnail.jpg',
  };

  toggleButton() {
    this.btnDisabled = !this.btnDisabled;
  }
  increaseAge(){
    this.person.age += 1;
  }

  onScroll(event: Event){
      const element = event.target as HTMLElement;
      console.log(element.scrollTop);
  }

  changeName(event: Event){
    const element = event.target as HTMLInputElement;
    this.person.name= element.value;
  }
}
