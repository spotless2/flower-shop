import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component, ViewChild } from '@angular/core';
import {
  FormControl,
  FormGroup,
  FormsModule,
  NgForm,
  ReactiveFormsModule,
  Validators,
} from '@angular/forms';

import { Router } from '@angular/router';

@Component({
  selector: 'app-digital-invitations',
  standalone: true,
  imports: [CommonModule, FormsModule, HttpClientModule, ReactiveFormsModule],
  templateUrl: './digital-invitations.component.html',
  styleUrl: './digital-invitations.component.css',
})
export class DigitalInvitationsComponent {
  isDigitalInvitationNameAvailable: boolean;
  isCheckNameButtonPressed: boolean = false;
  successMessage: string = '';
  errorMessage: string = '';

  // form sections
  digitalInvitationName: string = '';
  email: string = '';
  brideFirstName: string = '';
  brideLastName: string = '';
  brideDescription: string = '';
  bridePhoto: string = '';
  groomFirstName: string = '';
  groomLastName: string = '';
  groomDescription: string = '';
  groomPhoto: string = '';
  parentsName: string = '';
  godparentsName: string = '';
  civilLocationName: string = '';
  civilAddress: string = '';
  civilCityCountry: string = '';
  civilDate: Date;
  civilHour: string = '';
  religiousLocationName: string = '';
  religiousAddress: string = '';
  religiousCityCountry: string = '';
  religiousDate: Date;
  religiousHour: string = '';
  partyLocationName: string = '';
  partyAddress: string = '';
  partyCityCountry: string = '';
  partyDate: Date;
  partyHour: string = '';
  digitalInvitationLink = '';

  currentSection = 1;
  totalSections = 8;
  checkNameAvailability(invitationName: string) {
    const url = `http://localhost:8080/checkNameAvailability/${invitationName}`;

    this.http.get(url, { responseType: 'text' }).subscribe(
      (response) => {
        this.isDigitalInvitationNameAvailable =
          response === 'Name is available';
        this.isCheckNameButtonPressed = true;
      },
      (error) => {
        this.isDigitalInvitationNameAvailable = false;
        this.isCheckNameButtonPressed = true;
      }
    );
  }

  form1: FormGroup;

  constructor(private http: HttpClient, private router: Router) {
    this.form1 = new FormGroup({
      invitationName: new FormControl('', [
        Validators.required,
        Validators.minLength(3),
        Validators.pattern('^[a-zA-Z-&]+$'),
      ]),
    });
  }

  get invitationNameControl(): FormControl {
    return this.form1.get('invitationName') as FormControl;
  }

  nextSection() {
    this.currentSection++;
    console.log(this.currentSection);
  }

  previousSection() {
    if (this.currentSection > 1) {
      this.currentSection--;
    }
  }

  @ViewChild('myForm')
  form!: NgForm;
  onSubmit(form: NgForm) {

    form.value.digitalInvitationName = this.invitationNameControl.value;
    let date = new Date(this.partyDate)
    let formattedDate = `${date.getDate()} ${date.toLocaleString('ro-RO', { month: 'long' })}`;
    form.value.weedingDate = formattedDate;
    this.digitalInvitationLink = `http://localhost:4200/digital-invitations/i/${form.value.digitalInvitationName}`;

    this.http.post('http://localhost:8080/saveData', form.value).subscribe(
      (response: any) => {
        this.successMessage = 'Invitatia digitala a fost creeata!'
        this.errorMessage = '';
      },
      (error: any) => {
        this.successMessage = '';
        console.log(error);
        this.errorMessage = error.error || 'A aparut e eroare! Va rugam incercati din nou!';
      }
    );
  }

  navigateToPayment() {
    // save the form data somewhere accessible from the payment page
    // this could be a service or local storage
  
    // navigate to the payment page
    this.router.navigate(['/payment']);
  }
}
