import { Component } from '@angular/core';
import { LabelComponent } from '../../../../reusable/general/label/label.component';
import { LowerLoginSectionComponentDesktop } from '../Desktop/lower-login-section.desktop/lower-login-section.component';
import {LowerLoginSectionSmartPhonensComponent} from '../Smartphones/lower-login-section-smart-phonens/lower-login-section-smart-phonens.component'

@Component({
  selector: 'app-login-page',
  standalone: true,
  imports: [LabelComponent,LowerLoginSectionComponentDesktop,LowerLoginSectionSmartPhonensComponent],
  templateUrl: './login-page.component.html',
  styleUrl: './login-page.component.scss'
})
export class LoginPageComponent {

}
