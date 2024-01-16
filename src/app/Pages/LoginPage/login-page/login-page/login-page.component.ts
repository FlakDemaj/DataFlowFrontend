import { Component } from '@angular/core';
import { LabelComponent } from '../../../../reusable/general/label/label.component';
import { LowerLoginSectionComponent } from '../lower-login-section/lower-login-section.component';

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LabelComponent,LowerLoginSectionComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
