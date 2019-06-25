import { Component, OnInit, Input } from '@angular/core';

@Component({
  selector: 'app-eventos',
  templateUrl: './eventos.component.html',
  styles: []
})
export class EventosComponent {
  
  @Input() eventos: any;

  constructor() { }

}
