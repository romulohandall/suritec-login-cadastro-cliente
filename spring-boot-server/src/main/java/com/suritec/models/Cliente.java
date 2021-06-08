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
	@Column(name = "idCliente")
	@GeneratedValue(strategy = GenerationType.AUTO)
	private long id;

	@Column(name = "nome")
	private String nome;

	@Column(name = "cpf")
	private String cpf;

	@OneToOne(cascade = CascadeType.ALL)
	@JoinColumn(name = "id", referencedColumnName = "id")
	private Endereco endereco;

	@OneToMany(mappedBy = "cliente", cascade = {CascadeType.ALL}, fetch = FetchType.EAGER)
	private List<Telefone> telefones;

	@Override
	public String toString() {
		return "Cliente [id=" + id + ", nome=" + nome + ", tipo=" + cpf + "]";
	}
}
