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
    title: '',
    description: '',
    published: false
  };
  submitted = false;

  constructor(private clienteService: ClienteService) { }

  ngOnInit(): void {
  }

  saveCliente(): void {
    const data = {
      title: this.cliente.title,
      description: this.cliente.description
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
      title: '',
      description: '',
      published: false
    };
  }

}
