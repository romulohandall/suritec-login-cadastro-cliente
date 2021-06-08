package com.suritec.models;

import lombok.*;

import javax.persistence.*;
import java.io.Serializable;
import java.util.List;


@Getter
@Setter
@Entity
@Table(name = "cliente")
@AllArgsConstructor
@NoArgsConstructor
@Builder

public class Cliente implements Serializable {

	@Id
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long idCliente;

	@Column(name = "nome")
	private String nome;

	@Column(name = "cpf")
	private String cpf;

	@OneToOne(cascade = CascadeType.ALL)
	private Endereco endereco;

	@OneToMany(mappedBy = "cliente")
	private List<Telefone> telefones;


}
