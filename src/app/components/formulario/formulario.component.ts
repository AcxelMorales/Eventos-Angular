import { Component, OnInit } from '@angular/core';
import { FormGroup, FormControl, Validators, NgForm } from '@angular/forms';

import { EventoService } from 'src/app/services/evento.service';

@Component({
  selector: 'app-formulario',
  templateUrl: './formulario.component.html',
  styles: []
})
export class FormularioComponent implements OnInit {

  form: FormGroup;
  categorias: any[] = [];
  eventos: any[] = [];

  constructor(
    private _eventoService: EventoService
  ) {
    this.form = new FormGroup({
      nombre: new FormControl(null, Validators.required),
      categoria: new FormControl(null, Validators.required),
    });
  }

  ngOnInit(): void {
    this._eventoService.getCategorias()
      .subscribe((resp: any) => this.categorias = resp.categories)
  }

  getData(form: NgForm): void {
    if (form.invalid) return;

    this._eventoService.getEventos(this.form.value.nombre, this.form.value.categoria)
      .subscribe((resp: any) => this.eventos = resp.events);
  }

}
