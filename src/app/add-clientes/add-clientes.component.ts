import { Component, OnInit, Input, Output, EventEmitter } from '@angular/core';
import { Cliente } from '../cliente';
import { ClienteService } from '../clientes.service';

@Component({
  selector: 'app-add-clientes',
  templateUrl: './add-clientes.component.html',
  styleUrls: ['./add-clientes.component.css'],
  providers: [ClienteService]
})
export class AddClientesComponent implements OnInit {

  cliente: Cliente;
  @Input() clientes: Cliente[];
  @Output() eventAdd = new EventEmitter();

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.clientes = [];
    this.cliente = new Cliente();
  }

  valid(): boolean {
    return this.clientes.filter(x => x.nome === this.cliente.nome).length === 0;
  }

  add(): void {
    this.clienteService.addCliente(this.cliente)
    .subscribe(x => {
      this.eventAdd.emit(this.cliente);
      this.cliente = new Cliente();
    });
  }
}
