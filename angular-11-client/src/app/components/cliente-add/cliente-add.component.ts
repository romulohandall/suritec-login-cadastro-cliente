import { Component, OnInit } from '@angular/core';
import { Cliente } from 'src/app/models/cliente.model';
import { ClienteService } from 'src/app/_services/cliente.service';

@Component({
  selector: 'app-add-cliente',
  templateUrl: './cliente-add.component.html',
  styleUrls: ['./cliente-add.component.css']
})
export class ClienteAddComponent implements OnInit {
  cliente: Cliente = {
    nome: '',
    cpf: '',
    // published: false
  };
  submitted = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  saveCliente(): void {
    const data = {
      nome: this.cliente.nome,
      cpf: this.cliente.cpf
    };

    this.clienteService.create(data)
      .subscribe(
        response => {
          console.log(response);
          this.submitted = true;
        },
        error => {
          console.log(error);
        });
  }

  newCliente(): void {
    this.submitted = false;
    this.cliente = {
      nome: '',
      cpf: '',
      //published: false
    };
  }

}
