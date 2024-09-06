import { Component } from '@angular/core';
import { RouterOutlet } from '@angular/router';

@Component({
  selector: 'app-root',
  standalone: true,
  imports: [RouterOutlet],
  templateUrl: './app.component.html',
  styleUrl: './app.component.scss',
})
export class AppComponent {
  title = 'AngularPiano';

  public playSound(note: string) {
    let audio = new Audio();
    audio.src = `../assets/sounds/${note}.wav`;
    audio.load();
    audio.play();
  }
}
