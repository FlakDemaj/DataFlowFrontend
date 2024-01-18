import { Component } from '@angular/core';
import { FormBuilder, FormGroup, Validators } from '@angular/forms';
import { ReactiveFormsModule } from '@angular/forms';

@Component({
  selector: 'app-input-fields',
  standalone: true,
  imports: [ReactiveFormsModule],
  templateUrl: './input-fields.component.html',
  styleUrl: './input-fields.component.scss',
})
export class InputFieldsComponent {
  loginData: FormGroup;

  constructor(private fb: FormBuilder) {
    this.loginData = this.fb.group({
      userName: ['', Validators.required],
      password: ['', Validators.required],
      
    });
  }

  async submitForm() {
    try {
      if (this.loginData.valid) {
        var Logindatas = {
          userName: (String = this.loginData.get('userName')!.value),
          password: (String = this.loginData.get('password')!.value),
        };

        var filePath: string = 'http://localhost:5000/api/Login/EmpfangeJson';

        var response = await fetch(filePath, {
          method: 'POST',
          headers: {
            'Content-Type': 'application/json',
          },
          body: JSON.stringify(Logindatas),
        });

        if (response.status == 200) {
          //window.location.href = '/src/StartingPage/StartingPage.html';
          alert('Gut gemacht');
        } else if (response.status == 401) {
          this.WrongLoginDatas();
        } else {
          alert(
            'Falls es ein Problem bei der Anmeldung gab, melden Sie sich bei unserem Support!'
          );
        }
      } else {
        alert('Nicht gut');
      }
    } catch (error) {
      alert(error);
    }
  }

  togglePasswordVisibility(): void {
    const passwordInput= document.getElementById(
      'PasswordInput'
    ) as HTMLInputElement;

    if (passwordInput.type=="password") {
      passwordInput.type ="text";
    }
    else{
      passwordInput.type="password";
    }
  }

   WrongLoginDatas():void {
    
    var LoginButtonSection = document.getElementById("LoginButtonSection");
    var WrongDataAlert=document.getElementById("WrongDataAlert");
    var inputFields=document.getElementsByClassName("Input") as HTMLCollectionOf<HTMLElement>;

    LoginButtonSection!.style.marginTop="5%";
    WrongDataAlert!.style.visibility="visible";

    for (let i = 0; i < inputFields.length; i++) {
      inputFields[i].style.backgroundColor="#ff000052";      
    }

  }
}
