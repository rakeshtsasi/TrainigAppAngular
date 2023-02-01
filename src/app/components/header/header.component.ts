import { Component, Input, OnInit } from '@angular/core';

@Component({
  selector: 'app-header-1',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
@Input() inputHeader:number=0;

constructor(){
  //alert(this.inputHeader);
}
ngOnInit(){
  //alert(this.inputHeader);
}


}
