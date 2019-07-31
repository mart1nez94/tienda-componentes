import { Component, OnInit } from '@angular/core';
import { faCoffee, faCreditCard } from '@fortawesome/free-solid-svg-icons';

@Component({
  selector: 'app-footer',
  templateUrl: './footer.component.html',
  styleUrls: ['./footer.component.scss']
})
export class FooterComponent implements OnInit {
  faCreditCard = faCreditCard;

  constructor() { }

  ngOnInit() {
  }

}
