import { Component, OnInit } from '@angular/core';
import { ClienteService } from '../clientes.service';
import { Cliente } from '../cliente';

@Component({
  selector: 'app-clientes',
  templateUrl: './clientes.component.html',
  styleUrls: ['./clientes.component.css'],
  providers: [ClienteService]
})
export class ClientesComponent implements OnInit {

  clientes: Cliente[];

  constructor(private clienteService: ClienteService) { }

  ngOnInit() {
    this.get();
  }

  get() {
    this.clienteService.getClientes().subscribe(
      clientes => {
        this.clientes = clientes;
      }
    );
  }

  add(cliente: Cliente): void {
    this.get();

    // this.clientes.push(cliente);

    alert(`Cliente ${cliente.nome} adicionado com sucesso!  `);
  }

  remove(cliente: Cliente): void {
    this.get();

    // this.clientes = this.clientes.filter(x => x !== cliente);

    alert(`Cliente ${cliente.nome} removido com sucesso!  `);
  }

}
