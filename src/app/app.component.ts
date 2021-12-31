import { Component } from '@angular/core';
import {FormBuilder, FormGroup} from '@angular/forms';
@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent {
  title = 'ja-demo';
  myicons:string = "assets/image/linkedin.svg"
   stackoverflowUrl: string = 'https://stackoverflow.com/users/1791913/faisal?tab=profile';
  linkedinUrl: string = 'https://www.linkedin.com/in/josimar-arias549/';
   fiverrUrl:string = 'https://www.fiverr.com/faisalmuhammad_';
   facebookUrl:string = 'https://www.facebook.com/phaysall';
   twitterUrl:string = 'https://twitter.com/faisssallll';
   githubUrl:string = 'https://github.com/faisalmuhammad';
   googleUrl:string = 'https://plus.google.com/+MuhammadFaisal04';
  constructor() { }

}
