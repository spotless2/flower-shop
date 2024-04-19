import { CommonModule } from '@angular/common';
import { Component, ViewChild } from '@angular/core';
import { FormsModule, NgForm } from '@angular/forms';

@Component({
  selector: 'app-digital-invitations',
  standalone: true,
  imports: [CommonModule, FormsModule],
  templateUrl: './digital-invitations.component.html',
  styleUrl: './digital-invitations.component.css'
})
export class DigitalInvitationsComponent {

  // form sections
  title = '';
email = '';
brideFirstName = '';
brideLastName = '';
brideDescription = '';
bridePhoto = '';
groomFirstName = '';
groomLastName = '';
groomDescription = '';
groomPhoto = '';
parentsName = '';
godparentsName = '';
civilLocation = '';
civilAddress = '';
civilCityCountry = '';
civilDateTime = '';
religiousLocation = '';
religiousAddress = '';
religiousCityCountry = '';
religiousDateTime = '';
partyLocation = '';
partyAddress = '';
partyCityCountry = '';
partyDateTime = '';

  currentSection = 1;
  totalSections = 7;

  nextSection() {
    this.currentSection++;
  }

  previousSection() {
    if (this.currentSection > 1) {
      this.currentSection--;
    }
  }

  @ViewChild('myForm')
  form!: NgForm;
  onSubmit(form: NgForm) {
    console.log(form.value);
  }

}
