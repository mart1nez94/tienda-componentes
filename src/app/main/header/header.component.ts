import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-header',
  templateUrl: './header.component.html',
  styleUrls: ['./header.component.scss']
})
export class HeaderComponent implements OnInit {
  valores = '';

  constructor() { }

  ngOnInit() {
  }

  // buscar(event: any){
  //   this.valores += event.target.valores + ' | ';
  //   console.log("inicio");
  // }

  // buscar(event: KeyboardEvent){
  //   // this.valores += (<HTMLInputElement>event.target).value + ' | ';
  //   console.log(event.key);
  // }
}
