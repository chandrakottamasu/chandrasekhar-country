import { Component, Input, OnInit } from '@angular/core';
import { CountryService } from '../country.service';

@Component({
  selector: 'app-state',
  templateUrl: './state.component.html',
  styleUrls: ['./state.component.css']
})
export class StateComponent implements OnInit {

  countryName:any;
  countryStates:any;
  constructor(private country:CountryService) { }

  @Input() set countryNameValue(val:string){
    this.countryName = val;
    let obj ={
      'country' : this.countryName
    }
    this.countryName?this.country.getStates('/states',obj).subscribe((res:any)=>{
      console.log(res.data.states);
      this.countryStates = res.data.states;
  }):null;
}

  ngOnInit(): void {
  }

}
