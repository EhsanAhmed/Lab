import { Location } from '@angular/common';
import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-registeration',
  templateUrl: './registeration.component.html',
  styleUrls: ['./registeration.component.scss']
})
export class RegisterationComponent implements OnInit {

  constructor(private location: Location) { }

  ngOnInit(): void {
  }
  Back()
  {
    return this.location.back()
  }

}
