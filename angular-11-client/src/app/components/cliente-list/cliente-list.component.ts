import { Component, OnInit } from '@angular/core';
import {Cliente} from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/_services/cliente.service';

@Component({
  selector: 'app-cliente-list',
  templateUrl: './cliente-list.component.html',
  styleUrls: ['./cliente-list.component.css']
})
export class ClienteListComponent implements OnInit {
  clientes?: Cliente[];
  currentCliente?: Cliente;
  currentIndex = -1;
  nome = '';

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
    this.retrieveClientes();
  }

  retrieveClientes(): void {
    this.clienteService.getAll()
      .subscribe(
        data => {
          this.clientes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  refreshList(): void {
    this.retrieveClientes();
    this.currentCliente = undefined;
    this.currentIndex = -1;
  }

  setActiveCliente(cliente: Cliente, index: number): void {
    this.currentCliente = cliente;
    this.currentIndex = index;
  }

  removeAllClientes(): void {
    this.clienteService.deleteAll()
      .subscribe(
        response => {
          console.log(response);
          this.refreshList();
        },
        error => {
          console.log(error);
        });
  }

  searchNome(): void {
    this.currentCliente = undefined;
    this.currentIndex = -1;

    this.clienteService.findByNome(this.nome)
      .subscribe(
        data => {
          this.clientes = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

}
