import { Component, OnInit, AfterViewInit,ViewEncapsulation } from '@angular/core';
import { Helpers } from '../../helpers';

@Component({
  selector: '.page-wrapper',
    templateUrl: './admin.component.html',
    encapsulation: ViewEncapsulation.None,
})
export class AdminComponent  implements AfterViewInit {

	constructor() { }

  ngAfterViewInit() {

    // initialize layout: handlers, menu ...
    Helpers.initLayout();

  }
}
