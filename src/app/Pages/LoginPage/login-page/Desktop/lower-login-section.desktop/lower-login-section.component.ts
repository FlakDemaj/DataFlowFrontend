import { Component } from '@angular/core';
import { InputFieldsComponent } from '../../../Inputs/input-fields/input-fields.component';
import{HelperLinksComponent} from '../../../more/helper-links/helper-links.component'

@Component({
  selector: 'app-lower-login-desktop-section',
  standalone: true,
  imports: [InputFieldsComponent,HelperLinksComponent],
  templateUrl: './lower-login-section.component.html',
  styleUrl: './lower-login-section.component.scss'
})
export class LowerLoginSectionComponentDesktop {

}
