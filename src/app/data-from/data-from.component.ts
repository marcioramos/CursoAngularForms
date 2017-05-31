import { Component, OnInit } from '@angular/core';
import { FormGroup } from "@angular/forms";

@Component({
  selector: 'app-data-from',
  templateUrl: './data-from.component.html',
  styleUrls: ['./data-from.component.css']
})
export class DataFromComponent implements OnInit {

  formulario: FormGroup;

  constructor() { }

  ngOnInit() {
  }

}
