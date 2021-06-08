import { Component, OnInit } from '@angular/core';
import { ClienteService } from 'src/app/_services/cliente.service';
import { ActivatedRoute, Router } from '@angular/router';
import { Cliente } from 'src/app/models/cliente.model';

@Component({
  selector: 'app-cliente-details',
  templateUrl: './cliente-details.component.html',
  styleUrls: ['./cliente-details.component.css']
})
export class ClienteDetailsComponent implements OnInit {
  currentCliente: Cliente = {
    title: '',
    description: '',
    published: false
  };
  message = '';

  constructor(
    private clienteService: ClienteService,
    private route: ActivatedRoute,
    private router: Router) { }

  ngOnInit(): void {
    this.message = '';
    this.getCliente(this.route.snapshot.params.id);
  }

  getCliente(id: string): void {
    this.clienteService.get(id)
      .subscribe(
        data => {
          this.currentCliente = data;
          console.log(data);
        },
        error => {
          console.log(error);
        });
  }

  updatePublished(status: boolean): void {
    const data = {
      title: this.currentCliente.title,
      description: this.currentCliente.description,
      published: status
    };

    this.message = '';

    this.clienteService.update(this.currentCliente.id, data)
      .subscribe(
        response => {
          this.currentCliente.published = status;
          console.log(response);
          this.message = response.message ? response.message : 'O cliente foi atualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  updateCliente(): void {
    this.message = '';

    this.clienteService.update(this.currentCliente.id, this.currentCliente)
      .subscribe(
        response => {
          console.log(response);
          this.message = response.message ? response.message : 'O cliente foi autualizado com sucesso!';
        },
        error => {
          console.log(error);
        });
  }

  deleteCliente(): void {
    this.clienteService.delete(this.currentCliente.id)
      .subscribe(
        response => {
          console.log(response);
          this.router.navigate(['/clientes']);
        },
        error => {
          console.log(error);
        });
  }
}
