import { Component } from '@angular/core';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  contacts: string[] = ["nikhil", "nitish", "kalpesh"];
  title: string ="My Address Book";
  firstName: string = "";
}
