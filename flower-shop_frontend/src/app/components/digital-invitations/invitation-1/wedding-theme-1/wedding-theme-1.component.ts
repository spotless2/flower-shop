import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { ActivatedRoute, RouterModule } from '@angular/router';

declare function simplyCountdown(elt: string, args: { year: number; month: number; day: number; }): void;

interface WeddingData {
  digitalInvitationName: string;
  weedingDate: string;
  email: string;
  brideFirstName: string;
  brideLastName: string;
  brideDescription: string;
  bridePhoto: string;
  groomFirstName: string;
  groomLastName: string;
  groomDescription: string;
  groomPhoto: string;
  parentsName: string;
  godparentsName: string;
  civilAddress: string;
  civilCityCountry: string;
  civilHour: string;
  civilDate: string;
  civilLocationName: string;
  religiousAddress: string;
  religiousCityCountry: string;
  religiousHour: string;
  religiousDate: string;
  religiousLocationName: string;
  partyAddress: string;
  partyCityCountry: string;
  partyHour: string;
  partyDate: string;
  partyLocationName: string;
}

@Component({
  selector: 'app-wedding-theme-1',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule, FormsModule, ReactiveFormsModule],
  templateUrl: './wedding-theme-1.component.html',
  styleUrl: './wedding-theme-1.component.css'
})
export class WeddingTheme1Component {

  weddingData: WeddingData;

  numberOfPersons: number;
  fullName: string;
  partnerFullName: string;
  message: string;

  selectedValue: string = "0";

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['name']; // get the name parameter
      console.log(name);
      this.getData(name);
    });
  }
  // ...

  getData(name: string) {
    this.http.get<WeddingData>(`http://localhost:8080/getData/${name}`).subscribe(data => { // Remove type annotation for 'data'
      console.log(data);
      if (!this.weddingData) {
        this.weddingData = {} as WeddingData;
      }
      this.weddingData.email = data.email;
      this.weddingData.brideFirstName = data.brideFirstName;
      this.weddingData.brideLastName = data.brideLastName;
      this.weddingData.brideDescription = data.brideDescription;
      this.weddingData.bridePhoto = data.bridePhoto;
      this.weddingData.groomFirstName = data.groomFirstName;
      this.weddingData.groomLastName = data.groomLastName;
      this.weddingData.groomDescription = data.groomDescription;
      this.weddingData.groomPhoto = data.groomPhoto;
      this.weddingData.parentsName = data.parentsName;
      this.weddingData.godparentsName = data.godparentsName;
      this.weddingData.civilAddress = data.civilAddress;
      this.weddingData.civilCityCountry = data.civilCityCountry;
      this.weddingData.civilHour = data.civilHour;
      this.weddingData.civilDate = new Date(data.civilDate).toLocaleDateString();;
      this.weddingData.civilLocationName = data.civilLocationName;
      this.weddingData.religiousAddress = data.religiousAddress;
      this.weddingData.religiousCityCountry = data.religiousCityCountry;
      this.weddingData.religiousHour = data.religiousHour;
      this.weddingData.religiousDate = new Date(data.religiousDate).toLocaleDateString();;
      this.weddingData.religiousLocationName = data.religiousLocationName;
      this.weddingData.partyAddress = data.partyAddress;
      this.weddingData.partyCityCountry = data.partyCityCountry;
      this.weddingData.partyHour = data.partyHour;
      this.weddingData.partyDate = new Date(data.partyDate).toLocaleDateString();;
      this.weddingData.partyLocationName = data.partyLocationName;
      this.weddingData.weedingDate = new Date(data.partyDate).toLocaleDateString();;
    });
  }

  onChange(event: Event) {
    this.selectedValue = String((event.target as HTMLSelectElement).value);
  }

  sendResponse(response: boolean, event: Event) {
    event.preventDefault();
    const url = 'http://localhost:8080/sendEmail';
    let subject = '';
    let text = '';
    let to = this.weddingData.email;
  
    if (response) {
      subject = 'Confirmare prezenta - ' + this.fullName;
      text = 'Voi fi alaturi de voi!' +'\n' + 'Numar persoane: ' + this.numberOfPersons + '\n' + this.fullName;
      if (this.numberOfPersons > 1) {
        text += ', ' + this.partnerFullName;
      }
      text += '\n' + this.message;
    } else {
      subject = 'Nu pot participa -' + this.fullName;
      text = this.fullName + '\n' + this.message;
    }
  
    const body = {
      to: to,
      subject: subject,
      text: text
    };
  
    this.http.post(url, body).subscribe(res => {
    });
  }
  
  ngAfterViewInit(){

  let d = new Date(this.weddingData?.partyDate);

    simplyCountdown('.simply-countdown-one', {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
  });
  }

}
