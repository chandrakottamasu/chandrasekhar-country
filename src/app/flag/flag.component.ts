import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-flag',
  templateUrl: './flag.component.html',
  styleUrls: ['./flag.component.css']
})
export class FlagComponent implements OnInit {

  flag:any;
  countryName:any;
  constructor(private country:CountryService) { }

  @Input() set countryNameValue(val:string){
    this.countryName =val;
    let obj ={
      'country' : this.countryName
    }
    this.countryName?this.country.getFlag('/flag/images',obj).subscribe((res:any)=>{
      console.log(res.data.flag);
      this.flag= res.data.flag;
      
  }):null


  }

  ngOnInit(): void {
  }

}
