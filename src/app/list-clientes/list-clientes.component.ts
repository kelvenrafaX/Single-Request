import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-list-clientes',
  templateUrl: './list-clientes.component.html',
  styleUrls: ['./list-clientes.component.css'],
  providers: [ClienteService]
})
export class ListClientesComponent implements OnInit {

  @Input() clientes: Cliente[];
  @Output() eventRemove = new EventEmitter();

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clientes = [];
  }

  remove(cliente: Cliente): void {
    this.clienteService.removeCliente(cliente.id)
    .subscribe(x => {
      this.eventRemove.emit(cliente);
    });
  }

}
