import { Component, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-country',
  templateUrl: './country.component.html',
  styleUrls: ['./country.component.css']
})
export class CountryComponent implements OnInit {

  flag:any;
  userData:any;
  countryName:any;
  constructor(private country:CountryService) { }

  ngOnInit(): void {
    this.getCountries();
  }

  getCountries(){
    this.country.getData('/capital').subscribe((res:any)=>{
      console.log(res);
      this.userData = res.data;
    })

  }
  
  passCountryData(country:any){
    console.log(country.name);
    this.countryName = country.name;
    this.flag =true;



    }

  

  
}
