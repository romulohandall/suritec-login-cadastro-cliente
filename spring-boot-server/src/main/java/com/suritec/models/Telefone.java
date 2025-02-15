package com.suritec.models;

import lombok.*;

import javax.persistence.*;

@Getter
@Setter
@Entity
@Table(name = "telefone")
@AllArgsConstructor
@NoArgsConstructor
@Builder
public class Telefone {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idTelefone;

	@Column(name = "tipo")
	private String tipo;

	@Column(name = "numero")
	private Integer numero;

	@ManyToOne
	@JoinColumn(name="idCliente" , nullable=false)
	private Cliente cliente;


}
