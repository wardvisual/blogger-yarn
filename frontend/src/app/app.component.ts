import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.scss'],
})
export class AppComponent {
  protected title = 'practice-app-1';

  public changeTitle(): void {
    this.title = 'Edward HII';
  }
}
