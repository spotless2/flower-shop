import { CommonModule } from '@angular/common';
import { HttpClient, HttpClientModule } from '@angular/common/http';
import { Component } from '@angular/core';
import { ActivatedRoute, RouterModule } from '@angular/router';
import { log } from 'console';

declare function simplyCountdown(elt: string, args: { year: number; month: number; day: number; }): void;



@Component({
  selector: 'app-wedding-theme-1',
  standalone: true,
  imports: [CommonModule, RouterModule, HttpClientModule],
  templateUrl: './wedding-theme-1.component.html',
  styleUrl: './wedding-theme-1.component.css'
})
export class WeddingTheme1Component {

  invitedName = '';
  weedingDate = '';
  title = '';
  email = '';
  brideFirstName = 'Evangelina';
  brideLastName = 'Torres';
  brideDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec';
  bridePhoto = '';
  groomFirstName = 'Alejandro';
  groomLastName = 'Hernandez';
  groomDescription = 'Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam auctor, nunc nec';
  groomPhoto = '';
  parentsName = 'Teresa Hernandez y Juan Hernandez';
  godparentsName = 'Pedro Torres y Maria Torres';
  civilLocation = 'Nuestra casa';
  civilAddress = 'Zona 1, Guatemala, Guatemala';
  civilCityCountry = 'Guatemala City, Guatemala';
  civilDateTime = '2022-12-24T18:00:00';
  civilHour = '4:00 PM';
  civilDate = '12/24/2022';
  civilLocationName = 'Residencia de los Hernandez Torres';
  religiousLocation = 'Basílica de Esquipulas';
  religiousAddress = 'Izabal, Guatemala';
  religiousCityCountry = 'Guatemala City, Guatemala';
  religiousDateTime = '2022-12-25T18:00:00';
  religiousHour = '2:00 PM';
  religiousDate = '3/25/2023';
  religiousLocationName = 'Basílica de Esquipulas';
  partyLocation = 'La Finca de los Hernandez';
  partyAddress = 'quinta los Hernandez Torres, Zona 1, Guatemala, Guatemala';
  partyCityCountry = 'Guatemala City, Guatemala';
  partyDateTime = '2022-12-26T18:00:00';
  partyHour = '9:00 PM';
  partyDate = '9/26/2022';
  partyLocationName = 'Ubicación de la fiesta';

  selectedValue: string = "0";

  constructor(private http: HttpClient, private route: ActivatedRoute) { }

  ngOnInit() {
    this.route.params.subscribe(params => {
      const name = params['name']; // get the name parameter
      console.log(name);
      this.getData(name);
    });
  }

  getData(name: string) {
    this.http.get(`http://localhost:5000/api/endpoint/${name}`).subscribe(data => {
      // handle the data here
    });
  }

  onChange(event: Event) {
    this.selectedValue = String((event.target as HTMLSelectElement).value);
  }


  
  ngAfterViewInit(){

  let d = new Date();
  d.setDate(d.getDate() + 70); // Add 70 days to the current date

    simplyCountdown('.simply-countdown-one', {
      year: d.getFullYear(),
      month: d.getMonth() + 1,
      day: d.getDate()
  });
  }

}
